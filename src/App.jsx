import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/navbar/navbar'
import Topbar from './components/topbar'
import Hero from './components/hero/hero'
import Category from './components/category/category'
import Featured from './components/featured/Featured'
function App() {

  return (
    <div>
      <Navbar />
      <Topbar />
      <Hero />
      <Category />
      <Featured />
    </div>
  )
}

export default App
