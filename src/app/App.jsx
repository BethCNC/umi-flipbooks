import React from 'react'
<<<<<<< HEAD
import { Navbar } from '../components/layout/Navbar'
import Hero from '../components/layout/hero'
=======
import { Navbar } from "../components/layout/Navbar"
import Hero from '../components/layout/hero'
import { MockupCarousel } from '../components/layout/MockupCarousel'
import { MockupGallery } from '../components/layout/MockupGallery'
import { BrandGuidelinesFlipbook } from '../components/layout/BrandGuidelinesFlipbook'
import { MembershipHandbookFlipbook } from '../components/layout/MembershipHandbookFlipbook'
>>>>>>> 601d8483f5fd200a4f5b6363cc4ce7f926768761

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <Hero />
<<<<<<< HEAD
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h2 className="text-2xl font-bold">Welcome to UMI Flipbooks</h2>
      </main>
=======
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
>>>>>>> 601d8483f5fd200a4f5b6363cc4ce7f926768761
    </div>
  )
}

export default App