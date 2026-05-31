import React from 'react';
import SEO from '../components/SEO';

export default function Home({ setActivePage }) {
  return (
    <div className="bg-white">
      <SEO 
        title="Bike Servicing & Repairs Banchory | Canny Cycle Services"
        description="Professional bicycle servicing and repairs in Inchmarlo, near Banchory. Honest advice, quality workmanship, and transparent pricing by Callum."
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-brandBlue to-brandBlue-dark text-white py-16 md:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center md:text-left md:flex md:items-center md:justify-between">
          <div className="md:w-2/3 space-y-6">
            <div className="inline-flex items-center space-x-2 bg-blue-900/60 text-brandOrange font-bold px-3 py-1 rounded-full text-xs uppercase tracking-wider border border-blue-800">
              <span>📍 Serving Banchory, Aberdeenshire & Deeside</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight">
              Professional Bike Servicing & Repairs Near Banchory
            </h1>
            <p className="text-lg text-gray-300 font-normal max-w-2xl leading-relaxed">
              From quick tune-ups to full overhauls, Canny Cycle Services keeps your bike running smoothly with honest advice and quality workmanship. No unnecessary upselling—just expert attention from a local mechanic.
            </p>
            <div className="pt-2 flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 justify-center md:justify-start">
              <button 
                onClick={() => setActivePage('Contact')} 
                className="bg-brandOrange hover:bg-brandOrange-dark text-white text-base font-bold px-8 py-4 rounded-md shadow-lg transition-all"
              >
                Book a Service
              </button>
              <button 
                onClick={() => setActivePage('Services')} 
                className="bg-transparent border-2 border-white/40 hover:border-white text-white text-base font-bold px-8 py-4 rounded-md transition-all"
              >
                View Services
              </button>
            </div>
          </div>
          <div className="hidden md:block md:w-1/3 text-right pl-8">
            <div className="bg-blue-950/40 border border-blue-800 rounded-lg p-6 inline-block text-left max-w-xs shadow-inner">
              <span className="text-brandOrange font-black text-3xl block">100%</span>
              <span className="text-sm font-bold text-white block mt-1">Direct Access to Mechanic</span>
              <p className="text-xs text-gray-400 mt-2">Deal directly with Callum. Get clear, straightforward updates on your bike without shop floor markup or confusion.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicator / Core Values Bar */}
      <section className="bg-brandOff border-b border-gray-200 py-6 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div>
            <span className="block font-bold text-brandBlue text-base md:text-lg">Local & Independent</span>
            <span className="text-xs text-gray-500">Based at Bridge of Canny</span>
          </div>
          <div>
            <span className="block font-bold text-brandBlue text-base md:text-lg">No Forced Upselling</span>
            <span className="text-xs text-gray-500">Only repairs you actually need</span>
          </div>
          <div>
            <span className="block font-bold text-brandBlue text-base md:text-lg">Transparent Pricing</span>
            <span className="text-xs text-gray-500">Upfront labor rates explained</span>
          </div>
          <div>
            <span className="block font-bold text-brandBlue text-base md:text-lg">All Bikes Welcome</span>
            <span className="text-xs text-gray-500">Road, MTB, Gravel, Commuter</span>
          </div>
        </div>
      </section>

      {/* Service Categories Section */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-2xl sm:text-4xl font-black text-brandBlue tracking-tight">Expert Technical Care For Every Rider</h2>
          <p className="text-gray-600 mt-3 text-base">
            Whether you ride trails on Deeside, commute to work, or track miles on tarmac, your bike is treated with the same precision and focus on safety.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="border border-gray-200 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <div className="text-brandOrange text-2xl font-black mb-3">01 / Road & Gravel</div>
            <p className="text-gray-700 text-sm leading-relaxed">
              Precision gear indexing, custom hydraulic brake bleeds, bottom bracket diagnostics, and structural safety checks for long days on Aberdeenshire's roads.
            </p>
          </div>
          <div className="border border-gray-200 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <div className="text-brandOrange text-2xl font-black mb-3">02 / Mountain Bikes</div>
            <p className="text-gray-700 text-sm leading-relaxed">
              Full pivot component assessments, brake pad conditioning, drivetrain cleaning, and rough-terrain bolt torque verification built for harsh singletrack.
            </p>
          </div>
          <div className="border border-gray-200 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <div className="text-brandOrange text-2xl font-black mb-3">03 / Commuters & Families</div>
            <p className="text-gray-700 text-sm leading-relaxed">
              Reliability-first tune-ups, puncture remedies, cable replacements, and child-seat safety inspections to make sure every practical utility bike remains safe.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Canny Cycle Services Section */}
      <section className="bg-gray-50 py-16 px-4 border-t border-b border-gray-200">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-2xl sm:text-3xl font-black text-brandBlue tracking-tight">Honest Bike Servicing & Repairs Without The Hassle</h2>
            <p className="text-gray-700 text-sm mt-4 leading-relaxed">
              Larger stores often suffer from communication gaps. At Canny Cycle Services, you speak directly with Callum, the mechanic working on your machine.
            </p>
            <p className="text-gray-700 text-sm mt-3 leading-relaxed">
              We look closely at components to see what can be safely cleaned and adjusted rather than replacing parts prematurely. If a part does need replacing, we talk it through with you first so there are no surprise costs at pickup.
            </p>
            <ul className="mt-6 space-y-2.5 text-sm font-semibold text-gray-800">
              <li className="flex items-center text-brandBlue">✓ Countryside location near Banchory for easy drop-offs</li>
              <li className="flex items-center text-brandBlue">✓ Thorough visual safety checks before any tools touch your frame</li>
              <li className="flex items-center text-brandBlue">✓ Clear, structured records showing exactly what work was done</li>
            </ul>
          </div>
          <div className="bg-white border border-gray-200 p-8 rounded-lg shadow-sm">
            <h3 className="text-lg font-bold text-brandBlue mb-4">How It Works</h3>
            <div className="space-y-6">
              <div className="flex space-x-4">
                <span className="bg-brandOrange/10 text-brandOrange font-bold w-8 h-8 rounded-full flex items-center justify-center shrink-0">1</span>
                <div>
                  <h4 className="font-bold text-sm text-gray-900">Book Online or Call</h4>
                  <p className="text-xs text-gray-600 mt-1">Select your service tier or request a custom mechanical repair online.</p>
                </div>
              </div>
              <div className="flex space-x-4">
                <span className="bg-brandOrange/10 text-brandOrange font-bold w-8 h-8 rounded-full flex items-center justify-center shrink-0">2</span>
                <div>
                  <h4 className="font-bold text-sm text-gray-900">Drop-Off & Assessment</h4>
                  <p className="text-xs text-gray-600 mt-1">Bring your bike to our workshop at Bridge of Canny. We evaluate it live together.</p>
                </div>
              </div>
              <div className="flex space-x-4">
                <span className="bg-brandOrange/10 text-brandOrange font-bold w-8 h-8 rounded-full flex items-center justify-center shrink-0">3</span>
                <div>
                  <h4 className="font-bold text-sm text-gray-900">Expert Work & Collection</h4>
                  <p className="text-xs text-gray-600 mt-1">We complete the agreed work, walk you through the adjustments, and get you back riding safely.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Verification / Reviews Component Integration */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl font-black text-brandBlue">What Local Deeside Riders Say</h2>
          <p className="text-xs uppercase tracking-wider text-gray-500 font-bold mt-1">Verified Google Reviews Integration Placeholder</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white border border-gray-200 p-6 rounded-md shadow-sm">
            <p className="text-gray-600 italic text-sm">"Callum fixed a persistent gear skipping issue on my gravel bike that another shop missed. Honest pricing and fantastic turnaround. Highly recommend for any cyclist near Banchory."</p>
            <span className="block mt-4 font-bold text-xs text-gray-900">— Mark D., Road & Gravel Cyclist</span>
          </div>
          <div className="bg-white border border-gray-200 p-6 rounded-md shadow-sm">
            <p className="text-gray-600 italic text-sm">"Brilliant service from a local expert. He assessed my daughter's bike and my mountain bike, giving clean feedback without pushing replacements. Very practical approach."</p>
            <span className="block mt-4 font-bold text-xs text-gray-900">— Sarah M., Family Rider</span>
          </div>
          <div className="bg-white border border-gray-200 p-6 rounded-md shadow-sm">
            <p className="text-gray-600 italic text-sm">"So good to have a dedicated mechanic on Deeside. Callum is straightforward, organized, and deeply practical. The bike shifts like it's brand new."</p>
            <span className="block mt-4 font-bold text-xs text-gray-900">— Fraser G., Enduro Rider</span>
          </div>
        </div>
      </section>

      {/* Final Strong Call to Action */}
      <section className="bg-brandBlue text-white py-12 px-4 text-center">
        <h2 className="text-2xl sm:text-3xl font-black tracking-tight">Ready to Get Your Bike Running Smoothly?</h2>
        <p className="text-sm text-gray-300 mt-2 max-w-xl mx-auto">Don’t wait until a small squeak turns into an expensive component failure. Let’s get it sorted today.</p>
        <button 
          onClick={() => setActivePage('Contact')}
          className="mt-6 bg-brandOrange hover:bg-brandOrange-dark text-white text-base font-bold px-10 py-4 rounded-md shadow-md transition-transform"
        >
          Book Your Appointment Now
        </button>
      </section>
    </div>
  );
}