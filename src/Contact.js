import React, { useState } from 'react';

function Contact() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [comments, setComments] = useState('');
  const [contacts, setContacts] = useState([]);

  const handleAddContact = (e) => {
    e.preventDefault();
    if (firstName && lastName && email && comments) {
      const newContact = { firstName, lastName, email, comments };
      setContacts([...contacts, newContact]);
      // Reset input fields
      setFirstName('');
      setLastName('');
      setEmail('');
      setComments('');
    }
  };

  return (
    <div>
      <h1>Contact Form</h1>
      <form onSubmit={handleAddContact}>
        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          required
        />
        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <textarea
          name="comments"
          placeholder="Comments"
          value={comments}
          onChange={(e) => setComments(e.target.value)}
          required
        />
        <button type="submit">Add Contact</button>
      </form>
      <h2>Contacts List</h2>
      <ul>
        {contacts.map((contact, index) => (
          <li key={index}>
            {contact.firstName} {contact.lastName} - {contact.email} <br />
            Comments: {contact.comments}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Contact;
