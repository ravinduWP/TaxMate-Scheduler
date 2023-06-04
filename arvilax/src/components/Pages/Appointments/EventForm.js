import React, { useState } from 'react';

const EventForm = () => {
  const [summary, setSummary] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Create an object with the event details
    const event = {
      summary,
      description,
    };
   
    // Send the event details to the backend API
    try {
      const response = await fetch('http://localhost:3001/api/createEvent', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(event),
      });
      console.log(JSON.stringify(event));
      if (response.ok) {
        console.log('Event created successfully!');
        // Reset the form after successful submission
        setSummary('');
        setDescription('');
      } else {
        console.log('Failed to create event.');
      }
    } catch (error) {
      console.log('Error:', error);
    }
  };

  return (
    <div>
      <h2>Create Event</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="summary">Summary:</label>
          <input
            type="text"
            id="summary"
            value={summary}
            onChange={(e) => setSummary(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="description">Description:</label>
          <input
            type="text"
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <button type="submit">Create</button>
      </form>
    </div>
  );
};

export default EventForm;
