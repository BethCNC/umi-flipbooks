import React, { useState } from 'react'
import navBarLogo from '../../assets/images/NavBar-Logo.svg'
import largeCTAButton from '../../assets/motion/large-cta-button.gif'
import mobileCTAButton from '../../assets/motion/mobile-cta-button.gif'

export function Navbar() {
  const [isLargeButtonHovered, setIsLargeButtonHovered] = useState(false)
  const [isMobileButtonHovered, setIsMobileButtonHovered] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#1e293b]">
      {/* Desktop Navigation */}
      <div className="hidden lg:flex w-[1280px] h-[81px] mx-auto items-center justify-between px-[48px] py-5">
        {/* Logo Container */}
        <div className="w-[180px] h-[41px]">
          <img 
            src={navBarLogo} 
            alt="UMI Wellness Center"
            className="w-full h-full object-contain"
          />
        </div>

        {/* Navigation Links */}
        <div className="flex items-center gap-[40px] mx-[40px]">
          <a href="/" className="text-[24px] font-neulisSans text-[#f8fafc] hover:text-[#86babf] transition-colors">
            Home
          </a>
          <a href="/about" className="text-[24px] font-neulisSans text-[#f8fafc] hover:text-[#86babf] transition-colors">
            About
          </a>
          <a href="/who-we-serve" className="text-[24px] font-neulisSans text-[#f8fafc] hover:text-[#86babf] transition-colors">
            Who We Serve
          </a>
          <a href="/membership" className="text-[24px] font-neulisSans text-[#f8fafc] hover:text-[#86babf] transition-colors">
            Membership
          </a>
        </div>

        {/* CTA Button */}
        <div className="w-[180px] h-10">
          <button 
            className="w-full h-full rounded-lg overflow-hidden relative"
            onMouseEnter={() => setIsLargeButtonHovered(true)}
            onMouseLeave={() => setIsLargeButtonHovered(false)}
          >
            {/* Static background */}
            <div className="absolute inset-0 bg-[#86babf]" />
            
            {/* Text layer */}
            <span 
              className={`absolute inset-0 flex items-center justify-center text-lg font-neulisSans font-medium text-[#1e293b] z-10 transition-opacity duration-300 ${
                isLargeButtonHovered ? 'opacity-0' : 'opacity-100'
              }`}
            >
              Contact Us
            </span>

            {/* GIF Animation Layer */}
            <img
              src={largeCTAButton}
              alt="Contact Us Animation"
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${
                isLargeButtonHovered ? 'opacity-100' : 'opacity-0'
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className="lg:hidden flex items-center justify-between px-5 py-4">
        <div className="w-[120px]">
          <img 
            src={navBarLogo} 
            alt="UMI Wellness Center"
            className="w-full h-auto"
          />
        </div>

        <button 
          className="w-10 h-10 rounded-lg overflow-hidden relative"
          onMouseEnter={() => setIsMobileButtonHovered(true)}
          onMouseLeave={() => setIsMobileButtonHovered(false)}
        >
          {!isMobileButtonHovered && (
            <div className="absolute inset-0 flex items-center justify-center bg-umi-calm-blue-500 rounded-lg">
              <span className="text-umi-rest-navy-900">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                  <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                  <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                </svg>
              </span>
            </div>
          )}
          <img
            src={mobileCTAButton}
            alt="Menu"
            className={`w-full h-full object-cover transition-opacity duration-300 ${
              isMobileButtonHovered ? 'opacity-100' : 'opacity-0'
            }`}
          />
        </button>
      </div>
    </nav>
  )
}
