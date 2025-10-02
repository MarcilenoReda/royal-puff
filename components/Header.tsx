'use client'

import { FaFacebook, FaInstagram, FaYoutube, FaTiktok, FaLinkedin, FaSearch, FaUser, FaShoppingCart, FaBars, FaTimes } from 'react-icons/fa'
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
        {/* Logo and Social Icons */}
        <div className="flex justify-between items-center py-4 border-b">
          {/* Social Icons - Hidden on mobile */}
          <div className="hidden md:flex items-center space-x-4 text-gray-700">
            <FaFacebook className="cursor-pointer hover:text-[#1253e0] transition-colors text-sm" />
            <FaInstagram className="cursor-pointer hover:text-[#1253e0] transition-colors text-sm" />
            <FaYoutube className="cursor-pointer hover:text-[#1253e0] transition-colors text-sm" />
            <FaTiktok className="cursor-pointer hover:text-[#1253e0] transition-colors text-sm" />
            <FaLinkedin className="cursor-pointer hover:text-[#1253e0] transition-colors text-sm" />
          </div>
          
          {/* Mobile Menu Button - Left side */}
          <button 
            onClick={toggleMobileMenu}
            className="md:hidden text-gray-700 hover:text-[#1253e0] transition-colors text-2xl"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
          
          {/* Logo - Centered on mobile, centered on desktop */}
          <div className="text-center flex-1 md:flex-none">
            <h1 className="text-2xl md:text-3xl font-bold">Royal Puff</h1>
            <p className="text-xs tracking-widest">PREMIUM E-LIQUIDS</p>
          </div>
          
          {/* Action Icons */}
          <div className="flex items-center space-x-3 md:space-x-4 text-gray-700">
            <FaSearch className="cursor-pointer hover:text-[#1253e0] transition-colors text-sm md:text-base" />
            <FaUser className="cursor-pointer hover:text-[#1253e0] transition-colors text-sm md:text-base" />
            <FaShoppingCart className="cursor-pointer hover:text-[#1253e0] transition-colors text-sm md:text-base" />
          </div>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden lg:block py-4">
          <ul className="flex justify-center space-x-6 xl:space-x-8 text-sm font-medium">
            <li><a href="#" className="nav-link">HOME</a></li>
            <li><a href="#" className="nav-link">PRODUCTS</a></li>
            <li><a href="#" className="nav-link">INTERNATIONAL SALES</a></li>
            <li><a href="#" className="nav-link">E-LIQUID</a></li>
            <li><a href="#" className="nav-link">DEVICES</a></li>
            <li><a href="#" className="nav-link">ABOUT US</a></li>
            <li><a href="#" className="nav-link">BLOG</a></li>
            <li><a href="#" className="nav-link">CONTACTS</a></li>
          </ul>
        </nav>

        {/* Mobile Navigation */}
        <nav 
          className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            mobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <ul className="py-4 space-y-3">
            <li><a href="#" className="block py-2 px-4 hover:bg-gray-100 hover:text-[#1253e0] transition-colors rounded">HOME</a></li>
            <li><a href="#" className="block py-2 px-4 hover:bg-gray-100 hover:text-[#1253e0] transition-colors rounded">PRODUCTS</a></li>
            <li><a href="#" className="block py-2 px-4 hover:bg-gray-100 hover:text-[#1253e0] transition-colors rounded">INTERNATIONAL SALES</a></li>
            <li><a href="#" className="block py-2 px-4 hover:bg-gray-100 hover:text-[#1253e0] transition-colors rounded">E-LIQUID</a></li>
            <li><a href="#" className="block py-2 px-4 hover:bg-gray-100 hover:text-[#1253e0] transition-colors rounded">DEVICES</a></li>
            <li><a href="#" className="block py-2 px-4 hover:bg-gray-100 hover:text-[#1253e0] transition-colors rounded">ABOUT US</a></li>
            <li><a href="#" className="block py-2 px-4 hover:bg-gray-100 hover:text-[#1253e0] transition-colors rounded">BLOG</a></li>
            <li><a href="#" className="block py-2 px-4 hover:bg-gray-100 hover:text-[#1253e0] transition-colors rounded">CONTACTS</a></li>
          </ul>
          
          {/* Mobile Social Icons */}
          <div className="flex justify-center items-center space-x-6 py-4 border-t">
            <FaFacebook className="cursor-pointer hover:text-[#1253e0] transition-colors text-lg" />
            <FaInstagram className="cursor-pointer hover:text-[#1253e0] transition-colors text-lg" />
            <FaYoutube className="cursor-pointer hover:text-[#1253e0] transition-colors text-lg" />
            <FaTiktok className="cursor-pointer hover:text-[#1253e0] transition-colors text-lg" />
            <FaLinkedin className="cursor-pointer hover:text-[#1253e0] transition-colors text-lg" />
          </div>
        </nav>
      </div>
    </header>
  )
}
