import React, { useEffect, useState } from 'react';
import './App.css';
import Form from './components/Form';
import Tweets from './components/Tweets';

const App = () => {
  const [users, setUsers] = useState(null);
  const fetchUsers = () => {
    fetch("https://jsonplaceholder.typicode.com/users").then((res)=> res.json()).then((data) => {
      setUsers(data);
    });
  }

  useEffect(() => {
    fetchUsers();
  }, []);

  // console.log(users);
  return (
    <div className='app'>
        <Tweets />
        <Form />
    </div>
  )
}

export default App;
