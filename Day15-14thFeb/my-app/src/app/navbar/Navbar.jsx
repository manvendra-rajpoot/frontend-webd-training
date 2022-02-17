import React from 'react';
import './Navbar.css';
const Navbar = (props) => {
  return (
    <div>
      <ul>
        <li>{props.firstBev}</li>
        <li>{props.secondBev}</li>
      </ul>
    </div>
    
  );
}

export default Navbar;