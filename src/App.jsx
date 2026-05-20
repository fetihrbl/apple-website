import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Higlights from './components/Higlights'

const App = () => {
  return (
    <main className='bg-black'>
      <Navbar />
      <Hero />
      <Higlights />
    </main>
  )
}

export default App