import React from 'react'
import { InteractiveGridPattern } from './components/ui/interactive-grid-pattern'
import { Button } from './components/ui/button'
import { cn } from "@/lib/utils";
import { Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import Navbar from './components/ui/navbar';

const App = () => {
  return (
    <>
    <Navbar></Navbar>
   <Routes>
    <Route path='/' element={<Home></Home>}></Route>
   </Routes>
   </>
  )
}

export default App