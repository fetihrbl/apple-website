import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Higlights from './components/Higlights'
import Model from './components/Model'
import Features from './components/Features'
import HowItWorks from './components/HowItWorks'


const App = () => {
  return (
    <main className='bg-black'>
      <Navbar />
      <Hero />
      <Higlights />
      <Model />
      <Features />
      <HowItWorks />
    </main>
  )
}

export default App