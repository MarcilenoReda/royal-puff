'use client'

import { FaFacebook, FaInstagram, FaSearch, FaUser, FaShoppingCart, FaBars, FaTimes } from 'react-icons/fa'
import { useEffect, useState } from 'react'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  return (
    <header className={`bg-white sticky top-0 z-50 transition-shadow ${scrolled ? 'shadow-lg' : 'shadow-sm'}`}>
      <div className="container mx-auto px-4">
        {/* Logo and Icons */}
        <div className="flex justify-between items-center py-2">
          {/* Mobile Menu Button - Left side */}
          <button 
            onClick={toggleMobileMenu}
            className="md:hidden text-gray-700 hover:text-[#1253e0] transition-colors text-xl"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
          
          {/* Logo - Centered on mobile, left on desktop */}
          <div className="text-center flex-1 md:flex-none">
            <h1 className="text-xl md:text-2xl font-bold"><a href="/">Royal Puff</a></h1>
            <p className="text-xs tracking-wider hidden md:block">PREMIUM E-LIQUIDS</p>
          </div>
          
          {/* All Icons Combined */}
          <div className="flex items-center space-x-3 text-gray-700">
            {/* Social Icons - Hidden on mobile */}
            <div className="hidden lg:flex items-center space-x-3 mr-3">
              <a href="https://www.facebook.com/profile.php?id=61581352243672" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <FaFacebook className="cursor-pointer hover:text-[#1253e0] transition-colors text-sm" />
              </a>
              <FaInstagram className="cursor-pointer hover:text-[#1253e0] transition-colors text-sm" />
            </div>
            
            {/* Action Icons */}
            <FaSearch className="cursor-pointer hover:text-[#1253e0] transition-colors text-sm" />
            <FaUser className="cursor-pointer hover:text-[#1253e0] transition-colors text-sm" />
            <FaShoppingCart className="cursor-pointer hover:text-[#1253e0] transition-colors text-sm" />
          </div>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden lg:block py-2 border-t border-gray-100">
          <ul className="flex justify-center space-x-6 xl:space-x-8 text-sm font-medium">
            <li><a href="/" className="nav-link">HOME</a></li>
            <li><a href="/products" className="nav-link">PRODUCTS</a></li>
            <li><a href="/about-us" className="nav-link">ABOUT US</a></li>
            <li><a href="/contact-us" className="nav-link">CONTACTS</a></li>
          </ul>
        </nav>

        {/* Mobile Navigation */}
        <nav 
          className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            mobileMenuOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <ul className="py-2 space-y-1">
            <li><a href="/" className="block py-2 px-4 hover:bg-gray-100 hover:text-[#1253e0] transition-colors rounded text-sm">HOME</a></li>
            <li><a href="/products" className="block py-2 px-4 hover:bg-gray-100 hover:text-[#1253e0] transition-colors rounded text-sm">PRODUCTS</a></li>
            <li><a href="/about-us" className="block py-2 px-4 hover:bg-gray-100 hover:text-[#1253e0] transition-colors rounded text-sm">ABOUT US</a></li>
            <li><a href="/contact-us" className="block py-2 px-4 hover:bg-gray-100 hover:text-[#1253e0] transition-colors rounded text-sm">CONTACTS</a></li>
          </ul>
          
          {/* Mobile Social Icons */}
          <div className="flex justify-center items-center space-x-6 py-3 border-t">
            <a href="https://www.facebook.com/profile.php?id=61581352243672" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <FaFacebook className="cursor-pointer hover:text-[#1253e0] transition-colors text-base" />
            </a>
            <FaInstagram className="cursor-pointer hover:text-[#1253e0] transition-colors text-base" />
          </div>
        </nav>
      </div>
    </header>
  )
}
