import React, {useState} from 'react';
import './Form.css';

const Form = () => {
    const [info, setInfo] = useState({"name": "", "email":"", "pswd":""});
    const handleClick = (event) => {
        event.preventDefault();
        console.log("Button clicked!!!!!!!")
        console.log(info);
    }
    const handleNameChange = (event) => {
      setInfo({...info, "name": event.target.value});
    }
    const handleEmailChange = (event) => {
        setInfo({...info, "email": event.target.value});
    }
    const handlePswdChange = (event) => {
        setInfo({...info, "pswd": event.target.value});
    }

    return (
        <div>
            <form action="">
                <label htmlFor="">Enter Name: </label>
                <input type="text" placeholder='Enter name' onChange={handleNameChange} value={info.name} />
                <label htmlFor="">Enter Email: </label>
                <input type="email" placeholder='Enter email' onChange={handleEmailChange} value={info.email} />
                <label htmlFor="">Enter Name: </label>
                <input type="password" placeholder='Enter pswd' onChange={handlePswdChange} value={info.pswd} />
                <button onClick={handleClick}>Submit</button>
            </form>
        </div>
    )
}

export default Form;