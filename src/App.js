import React from 'react';
import './App.css';

function App() {

  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
  }


  rollTwentySide = (min,max) => {}

  rollTwelveSide = (min,max) => {}

  rollTenSide = (min,max) => {}

  rollNineSide = (min,max) => {}

  rollTwentySide = (min,max) => {}

  rollSixSide = (min,max) => {}

  rollFourSide = (min,max) => {}

  rollPercentage = (min, max) => {}

  return (
    <div className="App">
      <h1>Let's Roll!</h1>
    </div>
  );
}

export default App;
