import { AppBar, Box, Button, Dialog, DialogContent, DialogContentText, DialogTitle, FormControl, Grid, IconButton, List, ListItemButton, ListItemText, MenuItem, MenuList, Select, TextField, Toolbar, Typography, Zoom, useMediaQuery, useTheme } from '@mui/material';
import React, { useState, useEffect } from 'react';
import Footer from '../../common/Footer/Footer';
import { DateCalendar, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { Link } from 'react-router-dom';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import CloseIcon from '@mui/icons-material/Close';
import moment from 'moment';


// dude i made this from like one day ignore the inline css XD 
const options = [
  'Individual tax returns - 30 min',
  'Individual tax returns + Rental property - 45 min',
  'Trust/Partnership simple - 45 min',
  'Company simple - 45 min',
  'Business registration (Trust/Company/partnership) - 30 min',
  'BAS/Bookkeeping - 30min',
  'Other - 30 min',
];


const boxStyles = {
  width: 800,
  height: 'auto',
  mx: 'auto',
  mt: 1,
  p: 3,
  textAlign: 'center',
  borderRadius: 2,
  bgcolor: '#FFFFFF',
};



const EventForm = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [start, setStart] = useState([]);
  const [message, setMessage] = useState('select a location first');
  const [selectedIndex, setSelectedIndex] = React.useState(null);
  const [duration, setDuration] = React.useState(0);
  const [selectedTime, setSelectedTime] = React.useState(null);
  const [title, setTitle] = React.useState("");

  const [msgvisble, setMsgvisble] = useState(false);
  const [timevisble, setTimevisble] = useState(true);

  //seting visiblity
  const [loc, setLoc] = useState(true);
  const [servicetype, setSertype] = useState(false);
  const [dt, setDt] = useState(false);
  const [details, setDetails] = useState(false);

  const handleMenuItemClick = (index, option) => {
    setSelectedIndex(index);
    setTitle(option.split('-')[0].trim());

    if (
      option === 'Individual tax returns - 30 min' ||
      option === 'Business registration (Trust/Company/partnership) - 30 min' ||
      option === 'BAS/Bookkeeping - 30min' ||
      option === 'Other - 30 min'
    ) {
      setDuration(30);
    } else {
      setDuration(60);
    }
  };


  const [place, setPlace] = React.useState('');
  const handleChange = (event) => {
    const selectedPlace = event.target.value;
    setPlace(selectedPlace);
    if (selectedPlace === 'Bowden office') {
      setMessage("(Only available on Wdnesday and Friday)");
    } else if (selectedPlace === 'Home office') {
      setMessage("(Only available on  Monday, Tuesday, Thursday, Saturday and Sunday)");
    } else if (selectedPlace === 'Online') {
      setMessage("(Available on all days)");
    } else {
      setMessage("select a location first");
    }
  };

  const shouldDisableDate = (date) => {
    if (place === 'Home office') {
      const day = date.day();
      return day === 3 || day === 5; // Disable Wednesday and Friday
    }
    else if (place === 'Bowden office') {
      const day = date.day();
      return day === 1 || day === 2 || day === 4 || day === 6 || day === 0; // Disable Monday, Tuesday, Thursday, Saturday, and Sunday
    }
    return false; // Enable all dates by default
  };

  const handleDateChange = (pickedDate) => {
    setSelectedDate(pickedDate); 
  };


  //call the date and use it to calculate time slots
  useEffect(() => {
    if (selectedDate) {
      // console.log(selectedDate);
      const fetchData = async () => {
        try {
          const response = await fetch('http://localhost:3001/api/getEventsByDate', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ date: selectedDate, duration: duration }),
          });

          if (response.ok) {
            const data = await response.json();
            const starttime = data.availableTimeSlots;
            setStart(starttime);
            if (starttime.length === 0) {
              setMsgvisble(true);
              setTimevisble(false);
            } else {
              setMsgvisble(false);
              setTimevisble(true);
            }
          } else {
            console.error('Error:', response.status);
          }
        } catch (error) {
          console.error(error);
        }
      };


      fetchData();

    }
  }, [selectedDate]);




  const [timeIndex, setTimeIndex] = React.useState(1);

  const handleListItemClick = (event, index) => {
    setTimeIndex(index);
    setSelectedTime(start[index]);
  };

  //validation part
  //dialog box handling
  const [open, setOpen] = React.useState(false);
  const [dialogMsg, setDialogMsg] = React.useState("default");
  const handleClose = () => {
    setOpen(false);
  };

  //buttons handling with validation
  const handlelocationNext = () => {
    if (place === "") {
      setDialogMsg("Select a Location First..!");
      setOpen(true);
    } else {
      setLoc(false);
      setSertype(true);
    }
  }

  const handleSerback = () => {
    setDuration(0);
    setSelectedIndex(null);
    setSertype(false);
    setLoc(true);
  }

  const handleServiceNext = () => {
    if (duration === 0) {
      setDialogMsg("Select the Service You need to proceed..!");
      setOpen(true);
    } else {
      setSertype(false);
      setDt(true);
    }
  }

  const handleDTback = () => {
    setSelectedDate(null);
    setSelectedTime(null);
    setTimeIndex(null);
    setTimevisble(false);
    setDt(false);
    setSertype(true);
  }

  const handleDTnext = () => {
    if (selectedDate === null) {
      setDialogMsg("Pick A Date and Time..!");
      setOpen(true);
    } else {
      if (selectedTime === null) {
        setDialogMsg("Pick A Time for your Appointment..!");
        setOpen(true);
      } else {
        setTimeIndex(null);
        setDt(false);
        setTimevisble(false);
        setDetails(true);
      }
    }
  }
  //final form data
  const [checked, setChecked] = React.useState(false);
  const [dialogtitle, setDialogtitle] = React.useState("");
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [contact, setContact] = React.useState('');
  const [specialRequests, setSpecialRequests] = React.useState('');


  const handleDetailBack = () => {
    setName('');
    setEmail('');
    setContact('');
    setSpecialRequests('');
    setSelectedDate(null);
    setSelectedTime(null);
    setDetails(false);
    setDt(true);
  }
  //final dialog
  const handleClose2 = () => {
    setChecked(false);
    setLoc(true);
    setDetails(false);
  }

  //submitting form
  const handleSubmit = async (event) => {
    event.preventDefault();
    const nextdate = new Date(selectedDate);
    const formattedDate = moment(nextdate).format('YYYY-MM-DD');
    console.log(formattedDate);

    const formData = {
      summary: title,
      description: {
        name: name,
        email: email,
        contact: contact,
        place: place,
        note: specialRequests
      },
      date: formattedDate,
      time: selectedTime,
      duration: duration
    };
    
    try {
      const response = await fetch('http://localhost:3001/api/createEvent', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)

      });
      if (response.ok) {
        setDialogtitle("Success..");
        setDialogMsg("Your booking is complete.");
        setName('');
        setEmail('');
        setContact('');
        setSpecialRequests('');
        setSelectedDate(null);
        setSelectedTime(null);
        setPlace(null);
        setChecked(true);

      } else {
        setDialogtitle("Failed..");
        setDialogMsg("Oops! Something went wrong. Please try again later.");
        setChecked(true);
      }
    } catch (error) {
      console.log('Error:', error);
    }
  };


//responsive
const theme = useTheme();
const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div style={{ backgroundColor: '#FAF9F6' }}>
          <AppBar position="static" variant='elevation' style={{ backgroundColor: '#FFFFFF' }}>
            <Toolbar>
              <Link to='/' style={{ width: '260px', height: '130px', margin: 'auto' }}>
                <img src='assets/img/logo/logo.png' alt='logo' />
              </Link>
            </Toolbar>
          </AppBar>
          <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogTitle id="alert-dialog-title">
              {"Failed.."}
              <IconButton
                aria-label="close"
                onClick={handleClose}
                sx={{
                  position: 'absolute',
                  right: 2,
                  top: 2,

                }}
              >
                <CloseIcon />
              </IconButton>
            </DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-description">
                {dialogMsg}
              </DialogContentText>
            </DialogContent>
          </Dialog>
          {loc && <Box {...boxStyles} sx={{ height: isMobile ? 'auto' : '400px', width: isMobile ? '100%' : 'auto' }}>
            <Typography align='center' variant='h6'>Select the Location</Typography>
            <FormControl sx={{ m: 1, minWidth: 200, mt: 8 }} size="small">
              <Select id="demo-select-small" value={place} onChange={handleChange}>
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={'Bowden office'}>Office - Bowden</MenuItem>
                <MenuItem value={'Home office'}>Home - Modbury Heights</MenuItem>
                <MenuItem value={'Online'} >Online</MenuItem>
              </Select>
            </FormControl>
            <Typography mb={7}>{message}</Typography>
            <Button variant='outlined' endIcon={<ArrowForwardIosIcon />} onClick={handlelocationNext}>next</Button>
          </Box>}
          {servicetype && <Box {...boxStyles} sx={{ width: isMobile ? '100%' : '00px', margin: 'auto' }}>
            <Typography align='center' variant='h6'>Select Service</Typography>
            <MenuList sx={{ p: 2, width: '500px', margin: 'auto' }}>
              {options.map((option, index) => (
                <MenuItem
                  key={index}
                  selected={index === selectedIndex}
                  onClick={(event) => handleMenuItemClick(index, option)}
                  sx={{ p: 2 }}
                >
                  {option}
                </MenuItem>
              ))}
            </MenuList>
            <Button variant='outlined' startIcon={<ArrowBackIosNewIcon />} sx={{ mr: 1 }} onClick={handleSerback}>back</Button>
            <Button variant='outlined' endIcon={<ArrowForwardIosIcon />} onClick={handleServiceNext}>next</Button>
          </Box>}
          {dt && <Box {...boxStyles}>
            <Typography align='center' variant='h6' mb={2}>Select Date and Time</Typography>
            <Grid container>
              <Grid item xs={6}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DateCalendar disablePast disableHighlightToday shouldDisableDate={shouldDisableDate} onChange={handleDateChange} />
                </LocalizationProvider>
              </Grid>
              <Grid item xs={6}>


                {timevisble && <div style={{ height: '300px', overflow: 'auto', width: '200px', marginLeft: '30px' }}>
                  <List component="nav">
                    {start.map((timeOption, index) => (
                      <ListItemButton
                        key={index}
                        selected={timeIndex === index}
                        onClick={(event) => handleListItemClick(event, index)}

                      >
                        <ListItemText primary={timeOption} />
                      </ListItemButton>
                    ))}
                  </List>
                </div>}
                {msgvisble && <div style={{ padding: '3px', height: '55px', width: 'auto', backgroundColor: 'lightgray', fontSize: '15px', marginTop: '120px' }}>There is no availability on this date. Please choose another one.</div>}

              </Grid>
            </Grid>
            <Typography>All times are in (UTC+09:30) Adelaide</Typography>
            <Button variant='outlined' startIcon={<ArrowBackIosNewIcon />} sx={{ mr: 1 }} onClick={handleDTback}>back</Button>
            <Button variant='outlined' endIcon={<ArrowForwardIosIcon />} onClick={handleDTnext}>next</Button>
          </Box>}
          {details && <Box {...boxStyles} mb={10} mt={10}>
            <Typography variant='h6' mb={1}>Add your details</Typography>
            <Grid container>
              <Grid item xs={5}>
                <TextField
                  size='small'
                  required
                  type='text'
                  id="name"
                  label="Name"
                  sx={{ mt: 2 }}
                  value={name}
                  onChange={(event) => setName(event.target.value)}

                />
                <TextField
                  size='small'
                  required
                  type='email'
                  id="mail"
                  label="Email"
                  sx={{ mt: 2 }}
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                />
                <TextField
                  size='small'
                  required
                  type='text'
                  id="contact"
                  label="Contact"
                  sx={{ mt: 2 }}
                  value={contact}
                  onChange={(event) => setContact(event.target.value)}
                  inputProps={{
                    inputMode: 'numeric',
                    pattern: '[0-9]*', // Only allow numeric input
                  }}

                />
              </Grid>
              <Grid item xs={7} sx={{ display: 'flow' }}>
                <TextField
                  id="Special Requests"
                  label="Special Requests"
                  multiline
                  rows={3}
                  sx={{ mt: 2, width: '350px' }}
                  value={specialRequests}
                  onChange={(event) => setSpecialRequests(event.target.value)}

                />
                <Button size='medium' variant='outlined' startIcon={<ArrowBackIosNewIcon />} sx={{ width: '150px', mt: '10px', mr: '10px' }} onClick={handleDetailBack}>Back</Button>
                <Button type='submit' size='medium' variant='contained' sx={{ width: '150px', mt: '10px' }}>BOOK</Button>
              </Grid>
            </Grid>

          </Box>}
          <Dialog
            open={checked}
            onClose={handleClose2}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogTitle id="alert-dialog-title">
              {dialogtitle}
              <IconButton
                aria-label="close"
                onClick={handleClose2}
                sx={{
                  position: 'absolute',
                  right: 2,
                  top: 2,

                }}
              >
                <CloseIcon />
              </IconButton>
            </DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-description">
                {dialogMsg}
              </DialogContentText>
            </DialogContent>
          </Dialog>
          <Footer />
        </div>
      </form>
    </>
  );
};

export default EventForm;
