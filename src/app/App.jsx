import React from 'react'
import { Navbar } from '../components/layout/Navbar'
import Hero from '../components/layout/hero'

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <Hero />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      </main>
    </div>
  )
}

export default App