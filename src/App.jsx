import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import NavBar from './components/NavBar'
import BodySection from './components/BodySection'
import Footer  from './components/Footer'

function App() {

  return (
   <div className="flex flex-col h-screen">
   <NavBar />
   <BodySection/>
   <Footer/>
   </div>
  )
}

export default App
