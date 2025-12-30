import { useState } from 'react';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [counter, setCounter] = useState(10);

  const addValue = () => {
    if(counter >= 0 && counter < 20) setCounter(counter + 1);
    else return;
  }

  const removeValue = () => {
    if(counter <= 0) return;
    setCounter(counter - 1);
  }
  
  return (
    <>
      <h1>Counter Project</h1>
      <h2>Using Hooks</h2>

      <h3>Counter : {counter}</h3>
      <button onClick={addValue}>Add Value: {counter}</button> <br /> <br />
      <button onClick={removeValue}>Remove Value: {counter}</button>
    </>
  )
}

export default App
