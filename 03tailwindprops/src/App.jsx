import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  let myObj = {
    age: 21,
    username: "vinit"
  }

  let newArr = [1, 2, 3]

  return (
    <>
    <h1 className='bg-green-500 text-black rounded-xl p-4 mb-4'>Tailwind test</h1> 
    
    <Card username="chaiaurcode" btnText="click me" />
    <Card username="js"  />
    </>
  )
}

export default App
