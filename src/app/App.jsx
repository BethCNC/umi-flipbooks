import React from 'react'
import { Navbar } from "../components/layout/Navbar"
import Hero from '../components/layout/hero'
import { MockupCarousel } from '../components/layout/MockupCarousel'

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <Hero />
      <MockupCarousel />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h2 className="text-2xl font-bold">Welcome to UMI Flipbooks</h2>
      </main>
    </div>
  )
}

export default App