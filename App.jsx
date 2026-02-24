import { useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Contextexample from './Contextexample'
import UseContextExample from './UseContextExample'
import Customhook from './Customhook'
import Usecallback from './Usecallback'
import Usememo from './Usememo'
import ReduxCrud from './ReduxCrud'

function App() {
  let [count,setCount] = useState(0)
  // let a=10
  let a=useRef(10)
  const addCount = ()=>{
    setCount(count+1)
    // a = a+1
    a.current += 1
    console.log(a); 
  }
  return (
    <>
      <h3>Hooks Example</h3>
      <ReduxCrud />
      {/* <h4>Count is - {count}</h4>
      <h4>A is - {a.current}</h4>
      <button onClick={addCount}>Add</button> */}
      {/* <Contextexample /> */}
      {/* <UseContextExample /> */}
      {/* <Customhook /> */}
      {/* <Usecallback /> */}
      {/* <Usememo /> */}
    </>
  )
}

export default App
