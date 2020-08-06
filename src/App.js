import React from 'react';
import './App.css';

function App() {
  rollTwentySide = (min,max) => {
    min = Math.ceil(1);
    max = Math.floor(20);
    return Math.floor(Math.random() * (max - min)) + min;
  }

  rollTwelveSide = (min,max) => {
    min = Math.ceil(1);
    max = Math.floor(12);
    return Math.floor(Math.random() * (max - min)) + min;
  }

  rollTenSide = (min,max) => {
    min = Math.ceil(0);
    max = Math.floor(9);
    return Math.floor(Math.random() * (max - min)) + min;
  }

  rollEightSide = (min,max) => {
    min = Math.ceil(1);
    max = Math.floor(8);
    return Math.floor(Math.random() * (max - min)) + min;
  }

  rollSixSide = (min,max) => {
    min = Math.ceil(1);
    max = Math.floor(6);
    return Math.floor(Math.random() * (max - min)) + min;
  }

  rollFourSide = (min,max) => {
    min = Math.ceil(1);
    max = Math.floor(4);
    return Math.floor(Math.random() * (max - min)) + min;
  }

  rollPercentage = (min, max) => {
    min = Math.ceil(10);
    max = Math.floor(100);
    return Math.floor(Math.random()*11)*10
  }

  return (
    <div className="App">
      <h1>Let's Roll!</h1>
    </div>
  );
}

export default App;
