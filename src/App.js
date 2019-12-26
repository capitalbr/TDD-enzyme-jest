import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div data-test="component-app">
      <h1 data-test="counter-display">click count is</h1>
      <button data-test="increment-button">button</button>
    </div>
  );
}

export default App;
