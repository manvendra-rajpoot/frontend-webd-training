import React from 'react';
import './App.css';
import AddEntry from './components/AddEntry';
import Entries from './components/Entries';
import TotalCalories from './components/TotalCalories';

const App = () => {
  return (
    <div className='app'>
        <TotalCalories />
        <AddEntry />
        <Entries />
    </div>
  )
}

export default App;