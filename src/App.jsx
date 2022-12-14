import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import NavBar from './components/NavBar'
import BodySection from './components/BodySection'
import Footer  from './components/Footer'

function App() {

  return (
   <>
   <NavBar />
   <BodySection/>
   <Footer/>
   </>
  )
}

export default App
