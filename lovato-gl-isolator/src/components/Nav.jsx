import { useState } from 'react'
import { Link } from 'react-router-dom'

const menuItems = [
  { name: 'Products', path: '/products' },
  { name: 'Solutions', path: '/solutions' },
  { name: 'Pricing', path: '/pricing' },
  { name: 'About', path: '/about' },
  { name: 'Resources', path: '/resources' },
]

function Nav() {
  const [openIndex, setOpenIndex] = useState(null)

  return (
    <nav className="w-full backdrop-blur-md bg-white/60 border-b border-gray-200 px-8 py-4 flex items-center justify-between shadow-sm relative z-[60]">
      {/* Logo */}
      <div className="font-bold text-2xl text-gray-900">Lovato</div>
      {/* Menu */}
      <div className="flex gap-8 items-center">
        {menuItems.map((item, idx) => (
          <div key={item.name} className="relative">
            <button
              className={`font-medium transition-colors text-[#FA4515] hover:text-[#FA4515] bg-transparent outline-none border-none`}
              onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
              style={{ background: 'none' }}
            >
              {item.name}
            </button>
            {/* Dropdown */}
            {openIndex === idx && (
              <div className="fixed left-0 top-[72px] w-full bg-white shadow-lg border-t border-gray-200 z-[100]">
                <div className="max-w-6xl mx-auto py-8 px-8 flex flex-col gap-4">
                  <span className="font-bold text-lg text-[#FA4515]">{item.name} Options</span>
                  <div className="text-gray-700">Dropdown content for {item.name} goes here.</div>
                  {/* You can add more dropdown content here */}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </nav>
  )
}

export default Nav