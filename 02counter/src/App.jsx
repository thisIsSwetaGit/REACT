import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [counter, setCounter] = useState(1);

  const addValue = () => {
    if(counter>=20) {
      alert("Counter value cannot be more than 20");
      return;
    }
    setCounter(counter + 1);
    // console.log("clicked",counter);
  }

  const subtractValue = () => {
    // console.log("clicked", counter);
    if(counter <= 1) {
      alert("Counter value cannot be less than 1");
      return;
    }
    setCounter(counter - 1);
  }

  return (
    <>
      <h1> My name is counter</h1>
      <h2>Counter Value: {counter}</h2>

      <button
      onClick={addValue}>Add value</button>
      <br/>
      <button
      onClick={subtractValue}>Subtract value</button>
    </>
  )
}


export default App
