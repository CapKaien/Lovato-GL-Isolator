import { useState } from 'react'
import menuItems from './data/menuItems'

function Nav() {
  const [openIndex, setOpenIndex] = useState(null)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <nav className="w-full backdrop-blur-md bg-white/60 border-b border-gray-200 px-4 sm:px-8 py-4 flex items-center justify-between shadow-sm relative z-[60]">
      {/* Logo */}
      <div className="font-bold text-2xl text-gray-900">Lovato</div>

      {/* Hamburger for Mobile */}
      <button
        className="sm:hidden text-[#FA4515] text-3xl bg-transparent outline-none border-none"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        ☰
      </button>

      {/* Desktop Menu */}
      <div className="hidden sm:flex gap-8 items-center">
        {menuItems.map((item, idx) => (
          <div key={item.name} className="relative">
            <button
              className="font-medium transition-colors text-[#FA4515] hover:text-[#FA4515] bg-transparent outline-none border-none p-0 text-left"
              onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
            >
              {item.name}
            </button>
            {/* Dropdown */}
            {openIndex === idx && (
              <div className="fixed left-0 top-[72px] w-full bg-white shadow-lg border-t border-gray-200 z-[100]">
                <div className="max-w-6xl mx-auto py-8 px-8 flex flex-col gap-4 text-left">
                  <span className="font-bold text-lg text-[#FA4515]">
                    {item.name}
                  </span>
                  {item.description}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white flex flex-col items-start p-4 shadow-lg z-[80] sm:hidden">
          {menuItems.map((item, idx) => (
            <div key={item.name} className="w-full">
              <button
                className="text-left w-full py-2 font-medium text-[#FA4515] bg-transparent outline-none border-none p-0"
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
              >
                {item.name}
              </button>
              {/* Dropdown inside mobile */}
              {openIndex === idx && (
                <div className="w-full bg-gray-50 border-t border-gray-200 p-4 text-left">
                  <span className="font-bold text-lg text-[#FA4515] block mb-2">
                    {item.name}
                  </span>
                  {item.description}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </nav>
  )
}

export default Nav
