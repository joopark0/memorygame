import React, { useState } from 'react';
import Header from './components/Header';
import Card from './components/Card';
import './App.css';
import char1 from './images/char1.webp';
import char2 from './images/char2.jpeg';
import char3 from './images/char3.jpeg';
import char4 from './images/char4.jpeg';
import char5 from './images/char5.webp';
import char6 from './images/char6.jpeg';
import char7 from './images/char7.png';
import char8 from './images/char8.png';
import char9 from './images/char9.jpeg';
import char10 from './images/char10.jpeg';

function App() {
  const [pointScore, setpointScore] = useState(0);
  const [highpointScore, sethighpointScore] = useState(0);
  const [charArray, setcharArray] = useState([
    char1,
    char2,
    char3,
    char4,
    char5,
    char6,
    char7,
    char8,
    char9,
    char10,
  ]);

  return (
    <div className="App">
      <Header pointScore={pointScore} highpointScore={highpointScore} />
      <div className="cardGrid">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}

export default App;
