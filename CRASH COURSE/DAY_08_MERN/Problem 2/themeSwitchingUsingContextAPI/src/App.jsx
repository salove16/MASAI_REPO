import './App.css'
import React from 'react';
import { ThemeProvider } from './ThemeContext';
import ThemeSwitcher from './ThemeSwitcher';
import UserForm from './UserForm';
import Header from './Header';


const App = () => {
  return (
    <ThemeProvider>
      <div>
        <ThemeSwitcher />
        <Header />
        <UserForm />
      </div>
    </ThemeProvider>
  );
};

export default App;
