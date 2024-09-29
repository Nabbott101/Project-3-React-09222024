import React, { useState } from 'react';

function Contact() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [comments, setComments] = useState('');
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('all');

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

  const filteredContacts = () => {
    switch (filter) {
      case 'completed':
        return contacts.filter(contact => contact.completed);
      case 'incomplete':
        return contacts.filter(contact => !contact.completed);
      default:
        return contacts;
    }
  };

  const removeContacts = (index) => {
    setContacts(contacts.filter((_, i) => i !== index));
  };

  const toggleContacts = (index) => {
    const newContacts = [...contacts];
    newContacts[index].completed = !newContacts[index].completed;
    setContacts(newContacts);
  };


  return (
    <div>
      <h1>Contact Form</h1>
      <form onSubmit={handleAddContact}>
        <tr>
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
        <input
          type="comments"
          name="comments"
          placeholder="Comments"
          value={comments}
          onChange={(e) => setComments(e.target.value)}
          required
        />
        <button type="submit">Add Contact</button>
        </tr>
      </form>
      
      <select onChange={(e) => setFilter(e.target.value)} value={filter}>
        <option value="all">All</option>
        <option value="completed">Completed</option>
        <option value="incomplete">Incomplete</option>
      </select>

      <h2>Contacts List</h2>
      <ul>
        {filteredContacts().map((contact, index) => (
          <li key={index} style={{ textDecoration: contact.completed ? 'line-through' : 'none' }}>
            {contact.firstName} {contact.lastName} - {contact.email} <br />
            Comments: {contact.comments}
            <button onClick={() => toggleContacts(index)}>Toggle Complete</button>
            <button onClick={() => removeContacts(index)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Contact;
