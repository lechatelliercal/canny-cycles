import React, { useState } from 'react';

export default function Navbar({ activePage, setActivePage }) {
  const [isOpen, setIsOpen] = useState(false);
  const menuItems = ['Home', 'Services', 'Pricing', 'About', 'FAQs', 'Contact'];

  return (
    <>
      <header className="sticky top-0 z-50 bg-brandBlue text-white border-b-2 border-brandOrange">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex flex-col cursor-pointer" onClick={() => setActivePage('Home')}>
            <span className="text-2xl font-black tracking-tight text-white">
              CANNY <span className="text-brandOrange">CYCLE</span>
            </span>
            <span className="text-xs tracking-widest text-gray-300 font-medium">SERVICES</span>
          </div>

          {/* Desktop Links */}
          <nav className="hidden md:flex space-x-8 font-semibold text-sm tracking-wide">
            {menuItems.map((item) => (
              <button
                key={item}
                onClick={() => setActivePage(item)}
                className={`transition-colors duration-200 hover:text-brandOrange ${
                  activePage === item ? 'text-brandOrange border-b-2 border-brandOrange' : 'text-white'
                }`}
              >
                {item}
              </button>
            ))}
          </nav>

          <div className="hidden md:block">
            <button 
              onClick={() => setActivePage('Contact')}
              className="bg-brandOrange hover:bg-brandOrange-dark text-white px-5 py-2.5 rounded-md font-bold transition-all text-sm shadow-md"
            >
              Book a Service
            </button>
          </div>

          {/* Mobile Hamburger Trigger */}
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-white focus:outline-none p-2" aria-label="Toggle Navigation">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                     : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation Dropdown */}
        {isOpen && (
          <div className="md:hidden bg-brandBlue-dark px-4 pt-2 pb-6 space-y-2 border-t border-blue-900 transition-all">
            {menuItems.map((item) => (
              <button
                key={item}
                onClick={() => { setActivePage(item); setIsOpen(false); }}
                className="block w-full text-left py-2 text-base font-medium text-gray-200 hover:text-white"
              >
                {item}
              </button>
            ))}
          </div>
        )}
      </header>

      {/* Sticky Bottom Bar for Mobile Layouts */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 shadow-[0_-4px_12px_rgba(0,0,0,0.08)] p-3 flex justify-between items-center">
        <div className="flex flex-col">
          <span className="text-xs text-gray-500 font-bold uppercase tracking-wider">Call Callum Directly</span>
          <span className="text-sm font-black text-brandBlue">+44 1330 82XXXX</span>
        </div>
        <button 
          onClick={() => setActivePage('Contact')}
          className="bg-brandOrange text-white font-bold px-5 py-2.5 rounded-md text-sm shadow"
        >
          Book Now
        </button>
      </div>
    </>
  );
}