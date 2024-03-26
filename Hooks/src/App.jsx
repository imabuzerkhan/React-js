import React, { useState } from 'react';
import './App.css';

function App() {
  const [counter, setCounter] = useState(0);

  function addValue() {
    if (counter < 20) {
      setCounter(prevCounter => prevCounter + 1);
    }
  }

  function removeValue() {
    if (counter > 0) {
      setCounter(prevCounter => prevCounter - 1);
    }
  }

  return (
    <>
      <h1>The value of counter is {counter}</h1>
      <button onClick={addValue}>Add Value</button><br/>
      <button onClick={removeValue}>Remove Value</button>
    </>
  );
}

export default App;
