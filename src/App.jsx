import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Higlights from './components/Higlights'
import Model from './components/Model'
import Features from './components/Features'


const App = () => {
  return (
    <main className='bg-black'>
      <Navbar />
      <Hero />
      <Higlights />
      <Model />
      <Features />
    </main>
  )
}

export default App