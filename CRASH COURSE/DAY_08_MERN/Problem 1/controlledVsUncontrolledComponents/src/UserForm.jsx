import React, { useState, useRef } from 'react';
import './App.css'
const UserForm = () => {
  
  const [name, setName] = useState('');
  
  const emailRef = useRef(null);
  
  const [nameError, setNameError] = useState('');

  
  const handleNameChange = (event) => {
    setName(event.target.value);
    if (event.target.value.length < 3) {
      setNameError('Name must be at least 3 characters long');
    } else {
      setNameError('');
    }
  };

  
  const handleSubmit = () => {
    
    const emailValue = emailRef.current.value;
    console.log('Name:', name);
    console.log('Email:', emailValue);
  };

  return (
    <div>
      <form>
        {/* Controlled input */}
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={handleNameChange}
          />
          {nameError && <p style={{ color: 'red' }}>{nameError}</p>}
        </div>
        {/* Uncontrolled input */}
        <div>
          <label htmlFor="email">Email:</label>
          <input type="text" id="email" ref={emailRef} />
        </div>
        {/* Submit button */}
        <button type="button" onClick={handleSubmit}>Submit</button>
      </form>
    </div>
  );
};

export default UserForm;
