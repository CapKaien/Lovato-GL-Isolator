import {
  FaXTwitter,
  FaFacebookF,
  FaLinkedinIn,
  FaGlobe,
} from "react-icons/fa6";

function Footer() {
  return (
    <footer className="relative bg-[#111827] text-white w-screen px-6 md:px-20 pt-36 pb-36 overflow-visible">
      <div
        className="absolute left-1/2 -translate-x-1/2 bg-[#FA4515] rounded-[32px] shadow-md z-10 flex flex-col items-center justify-center text-center px-4 w-[90%] max-w-[1200px] h-[300px]"
        style={{ top: "-150px" }}
      >
        <h4 className="text-white text-2xl sm:text-3xl md:text-4xl font-medium mb-15">
          Power Up with Precision – The Lovato GL Isolator
        </h4>

        <button
          className="flex items-center justify-center gap-4 bg-[#111827] text-white px-8 h-12 text-sm sm:text-base hover:bg-[#1f2937] transition-all"
          style={{ borderRadius: "9999px" }}
        >
          <FaGlobe className="text-[#FA4515] text-base sm:text-lg" />
          <span className="font-medium">Join Now!</span>
        </button>
      </div>

      {/* Top section - 5 columns */}
      <div className="max-w-none w-full grid grid-cols-2 md:grid-cols-5 gap-10 text-sm mb-12 mt-20">
        {/* 1. Company */}
        <div>
          <h3 className="text-base font-semibold mb-3">Company</h3>
          <ul className="space-y-2 text-gray-300">
            <li>About</li>
            <li>Blogs</li>
            <li>Careers</li>
            <li>Referral Program</li>
          </ul>
        </div>

        {/* 2. Resources */}
        <div>
          <h3 className="text-base font-semibold mb-3">Resources</h3>
          <ul className="space-y-2 text-gray-300">
            <li>Tools & Integrations</li>
            <li>Function</li>
            <li>Product</li>
            <li>API</li>
          </ul>
        </div>

        {/* 3. Community */}
        <div>
          <h3 className="text-base font-semibold mb-3">Community</h3>
          <ul className="space-y-2 text-gray-300">
            <li>Tutorials</li>
            <li>FAQ</li>
            <li>Current Research</li>
          </ul>
        </div>

        {/* 4. Contact */}
        <div>
          <h3 className="text-base font-semibold mb-3">Contact</h3>
          <ul className="space-y-2 text-gray-300">
            <li>Support</li>
            <li>Sales</li>
          </ul>
        </div>

        {/* 5. Subscribe */}
        <div>
          <h3 className="text-base font-semibold mb-3">Subscribe</h3>
          <p className="text-gray-400 text-sm mb-3">
            Enter your email to get product updates
          </p>
          <form>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full px-4 py-2 rounded-full bg-gray-800 text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </form>
        </div>
      </div>

      {/* Divider */}
      <div className="w-full h-px bg-gray-600 mb-6" />

      {/* Bottom section */}
      <div className="flex flex-col md:flex-row items-center justify-between text-sm gap-4 text-gray-400 mb-15">
        {/* Social Icons */}
        <div className="flex gap-4">
          <FaXTwitter className="hover:text-white cursor-pointer" />
          <FaLinkedinIn className="hover:text-white cursor-pointer" />
          <FaFacebookF className="hover:text-white cursor-pointer" />
        </div>

        {/* Copyright */}
        <div className="text-center">© 2025 Lovato. All rights reserved.</div>

        {/* Logo or Company Name */}
        <div className="text-center">Lovato</div>
      </div>
    </footer>
  );
}

export default Footer;
