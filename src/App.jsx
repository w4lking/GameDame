import { useState } from 'react'
import NavBar from './components/layout/NavBar'
import Footer from './components/layout/Footer'
import './App.css' 

function App() {
  return (
    <>
      <NavBar />

      <main>
        <h1>Welcome to GameDame</h1>
      </main>

      <Footer />
    </>
  )
}

export default App