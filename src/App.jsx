import React from 'react'
import Nevbar from './sections/Nevbar'
import Hero from './sections/Hero'
import About from './sections/About'
import Projects from './sections/Projects'
import Client from './sections/Client'
import Contact from './sections/Contact'
import Footer from './sections/Footer'
import Experience from './sections/Experience'

const App = () => {
  return (
    <main className='max-w-7xl mx-auto'>
      <Nevbar />
      <Hero />
      <About />
      <Projects />
      <Client />
      <Experience />
      <Contact />
      <Footer />
    </main>
  )
}

export default App
