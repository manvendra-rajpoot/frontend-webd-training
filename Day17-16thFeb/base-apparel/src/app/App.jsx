import React from 'react';
import './App.css';
import LeftComponent from './left-component/LeftComponent';
import ImageComponent from './image-component/ImageComponent';

const App = () => {
  return (
    <div className='app'>
        <LeftComponent />
        <ImageComponent />
    </div>
  );
}

export default App;