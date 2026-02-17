import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Firstcomponent from './Firstcomponent'
import Classexample from './Classexample'
import LifecycleClass from './LifecycleClass'
import LifecycleFunction from './LifecycleFunction'
import Usercrud from './Usercrud'
import Empcomponent from './Empcomponent'
import StudentComponent from './StudentComponent'
import Apiexample from './Apiexample'
import Apicrud from './Apicrud'
import Menu from './Menu'
import { BrowserRouter, Routes, Route } from 'react-router'

function App() {
  let name="TEst"
  return (
   <>
    <h4>Vite Project Example</h4>
    {/* <Firstcomponent myname={name}/> */}
    {/* <Classexample /> */}
    {/* <LifecycleClass /> */}
    {/* <LifecycleFunction /> */}
    {/* <Usercrud /> */}
    {/* <Empcomponent /> */}
    {/* <StudentComponent /> */}
    {/* <Apiexample /> */}
    {/* <Apicrud /> */}
    <Menu />
    {/* <BrowserRouter> */}
    <Routes>
        <Route path='/home' element={<LifecycleClass />}/>
        <Route path='/about' element={<StudentComponent />}>
          <Route path='a1' element={<Firstcomponent />}/>
          <Route path='a2' element={<Apiexample />}/>
        </Route>
        <Route path='/contact' element={<Usercrud />}/>
    </Routes>
    {/* </BrowserRouter> */}
   </>
  )
}
export default App
