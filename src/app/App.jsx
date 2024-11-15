import React from 'react'
import { Navbar } from "../components/layout/Navbar"
import Hero from '../components/layout/hero'
import { MockupCarousel } from '../components/layout/MockupCarousel'
import { MockupGallery } from '../components/layout/MockupGallery'

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <Hero />
      <MockupCarousel />
      <MockupGallery />
    </div>
  )
}

export default App