import React from 'react';

export default function Footer({ setActivePage }) {
  return (
    <footer className="bg-slate-900 text-gray-300 pt-16 pb-24 md:pb-12 border-t-4 border-brandBlue">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-10">
        <div>
          <h3 className="text-white text-lg font-bold mb-4">Canny Cycle Services</h3>
          <p className="text-sm text-gray-400 leading-relaxed">
            Honest bike servicing and repairs without the hassle. Keeping riders moving safely across Banchory, Aberdeenshire, and the Deeside valley.
          </p>
          <p className="mt-4 text-xs text-gray-500">© {new Date().getFullYear()} Canny Cycle Services. All rights reserved.</p>
        </div>
        <div>
          <h4 className="text-white text-sm font-bold tracking-wider uppercase mb-4">Our Service Location</h4>
          <p className="text-sm text-gray-400 leading-relaxed">
            Bridge of Canny, Inchmarlo<br />
            Near Banchory, Aberdeenshire<br />
            Scotland, AB31
          </p>
          <p className="mt-2 text-xs text-brandOrange font-semibold">Convenient countryside workshop drop-off.</p>
        </div>
        <div>
          <h4 className="text-white text-sm font-bold tracking-wider uppercase mb-4">Quick Navigation</h4>
          <div className="grid grid-cols-2 gap-2 text-sm">
            {['Home', 'Services', 'Pricing', 'About', 'FAQs', 'Contact'].map((item) => (
              <button 
                key={item} 
                onClick={() => { setActivePage(item); window.scrollTo(0,0); }} 
                className="text-left text-gray-400 hover:text-brandOrange transition-colors"
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}