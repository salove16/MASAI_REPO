// // Header.js
// import React from 'react';
// import { useTheme } from './ThemeContext';

// const Header = () => {
//   const { theme } = useTheme();

//   return (
//     <header style={{ background: theme.background, color: theme.text }}>
//       {/* Header content */}
//     </header>
//   );
// };

// export default Header;
// // Header.js
// import React from 'react';
// import { useTheme } from './ThemeContext';


// const Header = () => {
//   const { theme } = useTheme();

//   return (
//     <header style={{ background: theme.background, color: theme.text }}>
//       {/* <h1>Welcome to My App</h1> */}
//       <nav>
//         <div>
//           <div>Home</div>
//           <div>About</div>
//           <div>Contact</div>
//         </div>
//       </nav>
//     </header>
//   );
// };

// export default Header;

// Header.js
import React from 'react';
import { useTheme } from './ThemeContext';
import './App.css'; // Import CSS file for styling

const Header = () => {
  const { theme } = useTheme();

  return (
    <header style={{ background: theme.background, color: theme.text }}>

      <nav>
        <ul className="navbar">
          <li><a href="/">Home</a></li>
          <li><a href="/">About</a></li>
          <li><a href="/">Services</a></li>
          <li><a href="/">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;


