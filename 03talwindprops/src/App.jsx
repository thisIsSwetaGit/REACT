import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)
  let myObj={
    name: "John",
    age: 30,
    city: "New York"
  }

let newArr= [1, 2, 3, 4, 5];

  return (
    <>
      <h1 className='bg-pink-400 text-white p-4 rounded-xl'>Tailwind test</h1>
      <Card username="photo1" someObj={myObj}/>
      <Card username="photo2" obj2={newArr}/>
    </>
  )
}

export default App
