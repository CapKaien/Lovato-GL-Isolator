const menuItems = [
  {
    name: 'Products',
    path: '/products',
    description: (
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-left">
        <div className="flex flex-col gap-1 text-gray-700">
          <a href="#" className="hover:text-[#FA4515]">GL Series Automatic Transfer Switches</a>
          <a href="#" className="hover:text-[#FA4515]">Modular Contactors</a>
          <a href="#" className="hover:text-[#FA4515]">Load Break Switches</a>
          <a href="#" className="hover:text-[#FA4515]">Surge Protection Devices</a>
          <a href="#" className="hover:text-[#FA4515]">Motor Protection Relays</a>
          <a href="#" className="hover:text-[#FA4515]">Phase Monitoring Relays</a>
        </div>
        <div className="flex flex-col gap-1 text-gray-700">
          <a href="#" className="hover:text-[#FA4515]">Soft Starters</a>
          <a href="#" className="hover:text-[#FA4515]">Variable Frequency Drives</a>
          <a href="#" className="hover:text-[#FA4515]">Energy Meters</a>
          <a href="#" className="hover:text-[#FA4515]">Multifunction Meters</a>
          <a href="#" className="hover:text-[#FA4515]">Current Transformers</a>
          <a href="#" className="hover:text-[#FA4515]">Power Factor Controllers</a>
        </div>
        <div className="flex flex-col gap-1 text-gray-700">
          <a href="#" className="hover:text-[#FA4515]">Level Controls</a>
          <a href="#" className="hover:text-[#FA4515]">Timer Relays</a>
          <a href="#" className="hover:text-[#FA4515]">Temperature Controllers</a>
          <a href="#" className="hover:text-[#FA4515]">Push Buttons & Pilot Lights</a>
          <a href="#" className="hover:text-[#FA4515]">Modular Switches</a>
          <a href="#" className="hover:text-[#FA4515]">Automation Controllers</a>
        </div>
      </div>
    ),
  },
  {
    name: 'Solutions',
    path: '/solutions',
    description: (
      <p className="text-gray-700 text-left">
        Lovato provides scalable energy automation, motor protection, and seamless power switching solutions for industries and infrastructures seeking reliability, modularity, and ease of integration into modern systems.
      </p>
    ),
  },
  {
      name: 'Pricing',
  path: '/pricing',
  description: (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-left">
      <div className="flex flex-col gap-2 text-gray-700">
        <div className="flex justify-between items-center">
          <span>GL ATS</span>
          <span className="text-[#FA4515] font-bold mr-10">$450/unit</span>
        </div>
        <div className="flex justify-between items-center">
          <span>Load Break Switch</span>
          <span className="text-[#FA4515] font-bold mr-10">$120/unit</span>
        </div>
        <div className="flex justify-between items-center">
          <span>Modular Contactor</span>
          <span className="text-[#FA4515] font-bold mr-10">$85/unit</span>
        </div>
        <div className="flex justify-between items-center">
          <span>Energy Meter</span>
          <span className="text-[#FA4515] font-bold mr-10">$300/unit</span>
        </div>
        <div className="flex justify-between items-center">
          <span>Soft Starter</span>
          <span className="text-[#FA4515] font-bold mr-10">$600/unit</span>
        </div>
        <div className="flex justify-between items-center">
          <span>Phase Monitor Relay</span>
          <span className="text-[#FA4515] font-bold mr-10">$50/unit</span>
        </div>
      </div>

      <div className="flex flex-col gap-2 text-gray-700">
        <div className="flex justify-between items-center">
          <span>Variable Frequency Drive</span>
          <span className="text-[#FA4515] font-bold mr-10">$700/unit</span>
        </div>
        <div className="flex justify-between items-center">
          <span>Power Factor Controller</span>
          <span className="text-[#FA4515] font-bold mr-10">$250/unit</span>
        </div>
        <div className="flex justify-between items-center">
          <span>Surge Protection Device</span>
          <span className="text-[#FA4515] font-bold mr-10">$90/unit</span>
        </div>
        <div className="flex justify-between items-center">
          <span>Multifunction Meter</span>
          <span className="text-[#FA4515] font-bold mr-10">$350/unit</span>
        </div>
        <div className="flex justify-between items-center">
          <span>Temperature Controller</span>
          <span className="text-[#FA4515] font-bold mr-10">$120/unit</span>
        </div>
        <div className="flex justify-between items-center">
          <span>Timer Relay</span>
          <span className="text-[#FA4515] font-bold mr-10">$45/unit</span>
        </div>
      </div>

      <div className="flex flex-col gap-2 text-gray-700">
        <div className="flex justify-between items-center">
          <span>Current Transformer</span>
          <span className="text-[#FA4515] font-bold mr-10">$35/unit</span>
        </div>
        <div className="flex justify-between items-center">
          <span>Push Button</span>
          <span className="text-[#FA4515] font-bold mr-10">$5/unit</span>
        </div>
        <div className="flex justify-between items-center">
          <span>Pilot Light</span>
          <span className="text-[#FA4515] font-bold mr-10">$7/unit</span>
        </div>
        <div className="flex justify-between items-center">
          <span>Automation Controller</span>
          <span className="text-[#FA4515] font-bold mr-10">$800/unit</span>
        </div>
        <div className="flex justify-between items-center">
          <span>Level Control</span>
          <span className="text-[#FA4515] font-bold mr-10">$60/unit</span>
        </div>
        <div className="flex justify-between items-center">
          <span>Motor Protection Relay</span>
          <span className="text-[#FA4515] font-bold mr-10">$150/unit</span>
        </div>
      </div>
    </div>
    ),
  },
{
  name: 'About Us',
  path: '/about',
  description: (
<div className="text-gray-700 text-left space-y-2">
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
    <a href="/news" className="text-[#FA4515] font-medium hover:underline">News Articles</a>
    <a href="/about-company" className="text-[#FA4515] font-medium hover:underline">About the Company</a>
    <a href="/concepts" className="text-[#FA4515] font-medium hover:underline">Concepts</a>
    <a href="/contact" className="text-[#FA4515] font-medium hover:underline">Contact Us</a>
  </div>
</div>
  ),
},
  {
    name: 'Resources',
    path: '/resources',
    description: (
      <p className="text-gray-700 text-left">
        Access product manuals, wiring diagrams, software downloads, and energy optimization resources to enhance your Lovato installations and system integration practices.
      </p>
    ),
  },
]

export default menuItems
