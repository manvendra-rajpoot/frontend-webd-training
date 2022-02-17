import React, { useState } from 'react';
import './App.css';
import Navbar  from './navbar/Navbar';
const App = () => {
  // const [count, setCount] = useState(0);
  const [count, setCount] = useState({cnt1:0,cnt2:10});
  
  // const incrementCounterOne = () => {
  //   setCount({...count, cnt1: count.cnt1+1});
  // }
  // const decrementCounterTwo = () => {
  //   setCount({...count, cnt2: count.cnt2-1});
  // }
  const handleClick = (countValue) => {
    if(countValue===1){
      setCount({...count, cnt1: count.cnt1+1});
    } else if(countValue===2) {
      setCount({...count, cnt2: count.cnt2-1});
    }
  }

  return (
    <div className="app">
      {/* <Navbar/> */}
      <div className='myCounter'>
      {/* <span>Counter-1: {count.cnt1}</span>
      <button onClick={incrementCounterOne}>+</button>
      <br />
      <span>Counter-2: {count.cnt2}</span>
      <button onClick={decrementCounterTwo}>--</button> */}
      <span>Counter-1: {count.cnt1}</span>
      <button onClick={() => handleClick(1)}>+</button>
      <br />
      <span>Counter-2: {count.cnt2}</span>
      <button onClick={() => handleClick(2)}>--</button>
      </div>
      <h3>Beverages</h3>
      <Navbar firstBev='Coffee' secondBev='Tea' />
      
    </div>
  );
}

export default App;
