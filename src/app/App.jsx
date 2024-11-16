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
      <div className="container mx-auto px-4">
        <section className="py-20 space-y-16">
          <div className="w-full">
            <h2 className="text-3xl font-bold mb-8">Brand Guidelines</h2>
            <BrandGuidelinesFlipbook />
          </div>
          <div className="w-full">
            <h2 className="text-3xl font-bold mb-8">Membership Handbook</h2>
            <MembershipHandbookFlipbook />
          </div>
        </section>
      </div>
    </div>
  )
}

export default App