import React, { useState } from 'react';
import './App.css';
import Dashboard from './Dashboard';
import Display from './Display';

function App() {


  const [balls, setBalls] = useState(0);
  const  [strikes, setStrikes] = useState(0);


  const ball = () => {
    if (balls === 4) {
      setBalls(0);
      setStrikes(0);
    } else {
      setBalls(balls + 1)
    }

  }


  const strike = () => {
    if (strikes === 3) {
      setBalls(0);
      setStrikes(0);
    } else {
      setStrikes(strikes + 1)
    }
  }
  
  const foul = () => {
    if (strikes === 2) {
      setStrikes(0)
    } else {
      setStrikes(strikes + 1)
    }
  }

  const hit = () => {
    setBalls(0);
    setStrikes(0);
  }


  return (
    <div className="App" >
      <header className="App-header">
        <div className="display" data-testid="displayContainer">
          <Display strikes = {strikes}  balls = {balls} />  <br />
        </div>

        <div className="dashboard">
          <Dashboard ball = {ball} strike = {strike} foul = {foul} hit = {hit} />
        </div>
      </header>
    </div>
  );
}

export default App;



