import React from 'react'
import {BrowserRouter,Routes,Route} from "react-router"
import  Planets from "./assets/Planets"
import Character  from "./assets/Character"
import Home from "./assets/Home"
import Navbar  from "./Navbar"
import Singlepageplanet from './Singlepageplanet'
import Singlepagecharacter from'./Singlepagecharacter'
const App = () => { 
  return (

    <BrowserRouter>

     <Navbar/>

    <Routes>

    <Route path="/" element={<Home/>} />

  
    <Route path="/planets" element={<Planets/>} />
  

    <Route path="/singlapageplanet/:id" element={<Singlepageplanet/>} />

  

    <Route path="/character" element={<Character/>} />

  

    <Route path="/singlapagecharacter/:id" element={<Singlepagecharacter/>} />

  </Routes>
  

    
    </BrowserRouter>
    
  )
}

export default App

