// UserForm.js
import React, { useState, useRef } from 'react';
import { useTheme } from './ThemeContext';
import './App.css'
const UserForm = () => {
  const { theme } = useTheme();
  // Controlled input state
  const [name, setName] = useState('');
  // Ref for uncontrolled input
  const emailRef = useRef(null);
  // Validation state
  const [nameError, setNameError] = useState('');

  // Controlled input change handler
  const handleNameChange = (event) => {
    setName(event.target.value);
    if (event.target.value.length < 3) {
      setNameError('Name must be at least 3 characters long');
    } else {
      setNameError('');
    }
  };

  // Submit handler
  const handleSubmit = () => {
    // Getting value from uncontrolled input using ref
    const emailValue = emailRef.current.value;
    console.log('Name:', name);
    console.log('Email:', emailValue);
  };

  return (
    <div style={{ background: theme.background, color: theme.text }}>
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
