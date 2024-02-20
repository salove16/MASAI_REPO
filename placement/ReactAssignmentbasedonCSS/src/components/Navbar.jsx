// // src/components/Navbar.js
// import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faHome, faImages, faEnvelope, faInfo,faHouseChimney,faCircleInfo } from '@fortawesome/free-solid-svg-icons';
// import '../styles/navbar.css';

// const Navbar = () => {
//   return (
    
//     <nav className="navbar">
//       <div className="navbar-container">
//         <div className="nav-links">
//            <div className="nav-link">
//            <FontAwesomeIcon icon={faHouseChimney} className="nav-icon"/>
//             <span className="nav-text">Home</span>
//           </div>
//           <div className="nav-link">
//           <FontAwesomeIcon icon={faImages} className="nav-icon" />
//             <span className="nav-text">Gallery</span>
//           </div>
//           <div className="nav-link">
//           <FontAwesomeIcon icon={faEnvelope} className="nav-icon" />
//             <span className="nav-text">Contact</span>
//           </div>
//           <div className="nav-link">
//           <FontAwesomeIcon icon={faCircleInfo} className="nav-icon"/>
//             <span className="nav-text">About</span>
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;


// src/components/Navbar.js
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faImages, faEnvelope, faInfo, faHouseChimney, faCircleInfo, faBars } from '@fortawesome/free-solid-svg-icons';
import '../styles/navbar.css';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        
       
          {showMenu ? (<div className="nav-links">
          <div className="nav-link">
            <FontAwesomeIcon icon={faHouseChimney} className="nav-icon" />
            <span className="nav-text">Home</span>
          </div>
          </div>): <div className="nav-links-home">
          <div className="nav-link-home">
            <FontAwesomeIcon icon={faHouseChimney} className="nav-icon" />
            <span className="nav-text">Home</span>
          </div>
          </div>}
          <div className="nav-links">
          <div className="nav-link">
            <FontAwesomeIcon icon={faImages} className="nav-icon" />
            <span className="nav-text">Gallery</span>
          </div>
          <div className="nav-link">
            <FontAwesomeIcon icon={faEnvelope} className="nav-icon" />
            <span className="nav-text">Contact</span>
          </div>
          <div className="nav-link">
            <FontAwesomeIcon icon={faCircleInfo} className="nav-icon" />
            <span className="nav-text">About</span>
          </div>
          </div>
        <div className="hamburger-icon" onClick={toggleMenu}>
          <FontAwesomeIcon icon={faBars} className="nav-icon" />
        </div>
        {showMenu && (
          <div className="nav-links-mobile">
            <div className="nav-link">
              <FontAwesomeIcon icon={faHouseChimney} className="nav-icon" />
              <span className="nav-text">Home</span>
            </div>
            <div className="nav-link">
              <FontAwesomeIcon icon={faImages} className="nav-icon" />
              <span className="nav-text">Gallery</span>
            </div>
            <div className="nav-link">
              <FontAwesomeIcon icon={faEnvelope} className="nav-icon" />
              <span className="nav-text">Contact</span>
            </div>
            <div className="nav-link">
              <FontAwesomeIcon icon={faCircleInfo} className="nav-icon" />
              <span className="nav-text">About</span>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
