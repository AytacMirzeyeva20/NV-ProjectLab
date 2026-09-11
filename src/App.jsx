import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import DecisionBoard from './components/Sidebar/DecisionBoard'
export default function App() {
  return (
    <>
     <Navbar />
      <Routes>
        <Route path="/" element={
      <Home/>
        } 
        />
     
        <Route path="/sidebar" element={
          <>
          <DecisionBoard/>
          </>
        }/>
      </Routes>
      
    </>
  )
}
