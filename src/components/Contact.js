import React, { useState } from 'react';

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  return (
    <center>

    <div className='contact'>
      <h1>Contact Us</h1>

      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        /> <br/> <br/>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)} 
        /><br/> <br/>

        <textarea
          rows="4"
          placeholder="Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea><br/> <br/>

        <button type="submit">Send</button>
      </form>
    </div>
    </center>
  );
}

export default Contact;
