import React from 'react';
import './LeftComponent.css';
import iconArrow from '../../assets/images/icon-arrow.svg';
import logo from '../../assets/images/logo.svg';

const LeftComponent = () => {
  return (
    <div className='left'>
      <img src={logo} alt="logo" />
        <header>  <span id="we-re">We're</span> coming soon</header>
         <p>Hello fellow shoppers! We're currently building our new fashion store. Add your email below to stay up-to-date with announcements and our launch deals.
        </p>
        <form action="">
            <input type="text" placeholder="Email Address" />
            <button id='btn' disabled>
                <img src={iconArrow} alt="iconArrow" />
            </button>
        </form>
  </div>
  );
}

export default LeftComponent;