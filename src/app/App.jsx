import React from 'react'
import { Navbar } from "../components/layout/Navbar"
import Hero from '../components/layout/hero'
import { MockupCarousel } from '../components/layout/MockupCarousel'
import { MockupGallery } from '../components/layout/MockupGallery'
import { BrandGuidelinesFlipbook } from '../components/layout/BrandGuidelinesFlipbook'
import { MembershipHandbookFlipbook } from '../components/layout/MembershipHandbookFlipbook'

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <Hero />
      <MockupCarousel />
      <MockupGallery />
      <section className="w-full space-y-32 py-20">
        <BrandGuidelinesFlipbook />
        <MembershipHandbookFlipbook />
      </section>
    </div>
  )
}

export default App