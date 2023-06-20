import React from 'react';
import Header from './components/Header';
import Card from './components/Card';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
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
