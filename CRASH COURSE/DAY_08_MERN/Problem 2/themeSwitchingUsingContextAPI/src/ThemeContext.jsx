// ThemeContext.js
import React, { createContext, useState, useContext } from 'react';

const themes = {
  light: {
    background: '#ffffff',
    text: '#333333',
  },
  dark: {
    background: '#333333',
    text: '#ffffff',
  },
};

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState('light');

  const toggleTheme = () => {
    setCurrentTheme(currentTheme === 'light' ? 'dark' : 'light');
  };

  return (
    <ThemeContext.Provider value={{ theme: themes[currentTheme], toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
