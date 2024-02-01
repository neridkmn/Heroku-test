import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

function App() {

  const [input, setInput] = useState("");
  const [message, setMessage] = useState("")

  const handleOnChange = (e) => {
    setInput(e.target.value)
  }

  const onSubmit = () => {
    fetch('https://heroku-test-neri-6c75de1160cd.herokuapp.com/api/test-submission', {
      method: 'POST',
      body: JSON.stringify({ message: input }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setMessage(data.message);
      })
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <input type="text" onChange={handleOnChange} value={input}/>
        <button onClick={onSubmit}>Submit</button>
        <h2>MESSAGE</h2>
        {message}
      </header>
    </div>
  );
}

export default App;
