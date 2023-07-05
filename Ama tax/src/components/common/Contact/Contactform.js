import { Alert, Snackbar } from '@mui/material';
import React, { useState } from 'react';

const Contactform = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState("none");
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('https://nice-snaps-fawn.cyclic.app/api/sendEmail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        // Reset form fields
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: ''
        });
        setOpenalert(true);
      } else {
        setStatus('error');
        console.log('error');
      }
    } catch (error) {
      console.log('Error:', error);
      setStatus('error');
    }
  };


  const [openalert, setOpenalert] = React.useState(false);
  const handleAlertClose = (event, reason) => {
    if (reason === 'clickaway') {
        return;
    }

    setOpenalert(false);
};
  return (

    <div className="tp-contact-form tp-contact-form-2 white-bg pt-50 pl-50 pr-50 pb-55 mr-60">
      <h4 className="tp-contact-form-title">
        Enquiries
      </h4>
      <form id="contact-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Enter your name*"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your email here"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="phone"
          placeholder="Enter your number*"
          value={formData.phone}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="subject"
          placeholder="Subject*"
          value={formData.subject}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="Enter your Message*"
          value={formData.message}
          onChange={handleChange}
        ></textarea>
        <div className="text-center">
          <button type="submit" className="tp-btn-border">
            Send Message
          </button>
        </div>
      </form>
      <Snackbar
        open={openalert}
        autoHideDuration={5000}
        onClose={handleAlertClose}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}

      >
        <Alert onClose={handleAlertClose} variant="filled" severity="success" sx={{ width: '100%' }}>
          Message sent Successfully...!<br/>
          Our team will get back to you shortly..
        </Alert>
      </Snackbar>
    </div>

  );
};
export default Contactform;