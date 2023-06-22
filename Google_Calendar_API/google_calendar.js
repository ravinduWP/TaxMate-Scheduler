const express = require('express');
const { google } = require('googleapis');
const cors = require('cors');
const moment = require('moment/moment');
require('dotenv').config();

const app = express();
const port = 3001;
app.use(cors());

// Provide the required configuration
const CREDENTIALS = JSON.parse(process.env.CREDENTIALS);
const calendarId = process.env.CALENDAR_ID;
const timeZone = process.env.TZ;

// Google calendar API settings
const SCOPES = 'https://www.googleapis.com/auth/calendar';
const calendar = google.calendar({ version: 'v3' });

const auth = new google.auth.JWT(
  CREDENTIALS.client_email,
  null,
  CREDENTIALS.private_key,
  SCOPES
);

app.use(express.json());

app.post('/api/createEvent', async (req, res) => {
    const { summary,description,date,time,duration} = req.body;
    try {
      const dateTimeString = `${date} ${time}`; 
      const startDateTime = moment(dateTimeString, 'YYYY-MM-DD HH:mm');
      const endDateTime = startDateTime.clone().add(duration, 'minutes');
      const event = {
        summary,
        description: `Name: ${description.name}\nEmail: ${description.email}\nContact: ${description.contact}\nplace: ${description.place}\nSpecial note: ${description.note}`,
        start: {
          dateTime: startDateTime.toISOString(),
          timeZone: timeZone,
        },
        end: {
          dateTime: endDateTime.toISOString(),
          timeZone: timeZone,
        },
      };

    const result = await insertEvent(event);
      
    if (result) {
      res.sendStatus(200);
    } else {
      res.sendStatus(500);
    }
  } catch (error) {
    console.log('Error:', error);
    res.sendStatus(500);
  }
});

// Insert new event to Google Calendar
const insertEvent = async (event) => {
  try {
    const response = await calendar.events.insert({
      auth: auth,
      calendarId: calendarId,
      resource: event,
    });

    return response.status === 200 && response.statusText === 'OK';
  } catch (error) {
    console.log(`Error at insertEvent --> ${error}`);
    return false;
  }
};

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

app.post('/api/getEventsByDate', async (req, res) => {
  const { date, duration } = req.body;

  try {
    const startDateTime = moment(date, 'YYYY-MM-DD').startOf('day');
    const endDateTime = moment(date, 'YYYY-MM-DD');

    let startTime, endTime;

    if (startDateTime.isBetween(moment().month(6).date(1), moment().month(9).date(31), 'month', '[]')) {
      // July to October (inclusive)
      startTime = moment(date).set({ hour: 9, minute: 0, second: 0 });
      endTime = moment(date).set({ hour: 17, minute: 30, second: 0 });
    } else {
      // November to June
      startTime = moment(date).set({ hour: 9, minute: 0, second: 0 });
      endTime = moment(date).set({ hour: 16, minute: 30, second: 0 });
    }

    // Create an array to store all time slots
    const timeSlots = [];

    let currentTime = startTime.clone();
    while (currentTime.isSameOrBefore(endTime)) {
      timeSlots.push(currentTime.format('HH:mm'));
      currentTime.add(duration, 'minutes');
    }

    let allEvents = [];
    let pageToken = null;
    let response;

    do {
      response = await calendar.events.list({
        auth: auth,
        calendarId: calendarId,
        timeMin: startTime.toISOString(),
        timeMax: endTime.toISOString(),
        pageToken: pageToken,
      });

      const events = response.data.items;
      allEvents = allEvents.concat(events);
      pageToken = response.data.nextPageToken;
    } while (pageToken);

    const eventList = allEvents.map(event => ({
      
      startTime: moment(event.start.dateTime).format('HH:mm'),
      endTime: moment(event.end.dateTime).format('HH:mm'),
    }));

    // Get the event start times
    const eventTimes = eventList.map(event => ({
      startTime: event.startTime,
      endTime: event.endTime,
    }));
    const eventStartTimes = eventList.map(event => event.startTime);
    // Check if any event has start time and end time set to 9 AM and 5 PM
const hasFullDayEvent = eventList.some(event => event.startTime === '09:00' && event.endTime === '17:00');

let filteredTimeSlots;

if (hasFullDayEvent) {
  filteredTimeSlots = [];
} else {
  // Remove the event start times from timeSlots
  filteredTimeSlots = timeSlots.filter(timeSlot => !eventStartTimes.includes(timeSlot));
}

// console.log(filteredTimeSlots);


    // Return the remaining time slots
     res.json({ availableTimeSlots: filteredTimeSlots });
  } catch (error) {
    // Handle the error
    console.error(error);
    res.status(500).json({ error: 'An error occurred' });
  }
});
