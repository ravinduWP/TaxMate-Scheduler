import React, { useState } from 'react';


const Contactform=()=>{
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
    
      const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        // console.log(formData);
        fetch('http://localhost:5000/api/sendMail', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(formData)
          
        })
        
          .then((response) => response.json())
          .then((data) => {
            console.log(data); // Handle success response
            // Optionally show a success message to the user
          })
          .catch((error) => {
            console.log('Error sending email:', error); // Handle error
            // Optionally show an error message to the user
          });
      };
    

    return(
        
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
              </div>
           
    );
};
export default Contactform;