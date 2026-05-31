import React from 'react';
import SEO from '../components/SEO';

export default function Pricing({ setActivePage }) {
  return (
    <div className="bg-white py-12 md:py-20">
      <SEO 
        title="Transparent Bike Servicing Prices Banchory | Upfront Rates"
        description="No hidden fees or unnecessary upselling. View our clear safety check, tune-up, and full overhaul servicing price tiers near Banchory."
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h1 className="text-3xl sm:text-4xl font-black text-brandBlue tracking-tight">Transparent Workshop Pricing</h1>
          <p className="text-gray-600 text-sm sm:text-base mt-2">
            No unexpected costs or mystery fees. If your bike needs extra work or replacement parts, we always discuss it with you first before doing any work.
          </p>
        </div>

        {/* Pricing Matrix Table Layout */}
        <div className="overflow-x-auto border border-gray-200 rounded-lg shadow-sm mb-16">
          <table className="w-full text-left border-collapse bg-white min-w-[600px]">
            <thead>
              <tr className="bg-brandBlue text-white text-xs uppercase font-bold tracking-wider">
                <th className="p-4 w-1/3">Service Details</th>
                <th className="p-4 text-center bg-blue-900">Safety Check</th>
                <th className="p-4 text-center bg-brandBlue-dark">Tune-Up Service</th>
                <th className="p-4 text-center bg-slate-950">Full Overhaul</th>
              </tr>
            </thead>
            <tbody className="text-sm text-gray-700 divide-y divide-gray-200">
              <tr className="bg-orange-50/40 font-bold text-brandBlue text-base">
                <td className="p-4">Estimated Base Labor Rate</td>
                <td className="p-4 text-center text-gray-900">£45</td>
                <td className="p-4 text-center text-gray-900">£75</td>
                <td className="p-4 text-center text-brandOrange">£145</td>
              </tr>
              <tr>
                <td className="p-4 font-semibold">Frame & Fork Safety Evaluation</td>
                <td className="p-4 text-center text-brandOrange font-bold">✓</td>
                <td className="p-4 text-center text-brandOrange font-bold">✓</td>
                <td className="p-4 text-center text-brandOrange font-bold">✓</td>
              </tr>
              <tr>
                <td className="p-4 font-semibold">Fastener Torque Correction</td>
                <td className="p-4 text-center text-brandOrange font-bold">✓</td>
                <td className="p-4 text-center text-brandOrange font-bold">✓</td>
                <td className="p-4 text-center text-brandOrange font-bold">✓</td>
              </tr>
              <tr>
                <td className="p-4 font-semibold">Gear Tuning & Alignment</td>
                <td className="p-4 text-center text-gray-400">Visual inspection only</td>
                <td className="p-4 text-center text-brandOrange font-bold">✓</td>
                <td className="p-4 text-center text-brandOrange font-bold">✓</td>
              </tr>
              <tr>
                <td className="p-4 font-semibold">Brake Adjustment & Caliper Centering</td>
                <td className="p-4 text-center text-gray-400">Visual inspection only</td>
                <td className="p-4 text-center text-brandOrange font-bold">✓</td>
                <td className="p-4 text-center text-brandOrange font-bold">✓</td>
              </tr>
              <tr>
                <td className="p-4 font-semibold">Wheel Truing (In Stand)</td>
                <td className="p-4 text-center text-gray-400">—</td>
                <td className="p-4 text-center text-gray-400">Minor Adjustments</td>
                <td className="p-4 text-center text-brandOrange font-bold">✓ Full Precision</td>
              </tr>
              <tr>
                <td className="p-4 font-semibold">Full Cable Replacement (Inner & Outer)</td>
                <td className="p-4 text-center text-gray-400">—</td>
                <td className="p-4 text-center text-gray-400">—</td>
                <td className="p-4 text-center text-brandOrange font-bold">✓ Included</td>
              </tr>
              <tr>
                <td className="p-4 font-semibold">Bearing Deep Clean & Re-grease</td>
                <td className="p-4 text-center text-gray-400">—</td>
                <td className="p-4 text-center text-gray-400">—</td>
                <td className="p-4 text-center text-brandOrange font-bold">✓ Headset & BB</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Individual Component / Repair Cost Matrix */}
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 md:p-8 mb-16">
          <h3 className="text-xl font-bold text-brandBlue mb-4 text-center md:text-left">A La Carte Repairs & Component Install Rates</h3>
          <p className="text-xs text-gray-500 mb-6 text-center md:text-left">*Excludes component part costs. Rates are for workshop labor time.</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-700">
            <div className="flex justify-between p-3 bg-white border border-gray-100 rounded">
              <span>Puncture Remediation (Tube Fitting)</span>
              <span className="font-bold text-brandBlue">£15</span>
            </div>
            <div className="flex justify-between p-3 bg-white border border-gray-100 rounded">
              <span>Hydraulic Brake Bleed (Per Wheel)</span>
              <span className="font-bold text-brandBlue">£25</span>
            </div>
            <div className="flex justify-between p-3 bg-white border border-gray-100 rounded">
              <span>Chain & Cassette Installation</span>
              <span className="font-bold text-brandBlue">£30</span>
            </div>
            <div className="flex justify-between p-3 bg-white border border-gray-100 rounded">
              <span>Bottom Bracket Fitting</span>
              <span className="font-bold text-brandBlue">£35</span>
            </div>
            <div className="flex justify-between p-3 bg-white border border-gray-100 rounded">
              <span>Spoke Replacement & Truing</span>
              <span className="font-bold text-brandBlue">From £25</span>
            </div>
            <div className="flex justify-between p-3 bg-white border border-gray-100 rounded">
              <span>Custom Component Component Installs</span>
              <span className="font-bold text-brandBlue">Quote Provided</span>
            </div>
          </div>
        </div>

        {/* Pricing Specific Micro-FAQ Section */}
        <div className="max-w-3xl mx-auto space-y-6">
          <h3 className="text-xl font-bold text-brandBlue text-center mb-6">Pricing & Parts Common Questions</h3>
          <div className="border-l-4 border-brandOrange pl-4">
            <h4 className="font-bold text-sm text-gray-900">Are replacement parts included in the tier prices?</h4>
            <p className="text-xs text-gray-600 mt-1">No, the tier rates cover workshop labor time only. Any needed parts like chains, cassettes, or brake pads are charged separately. If we find parts that need replacing during a service, we always contact you first before moving forward.</p>
          </div>
          <div className="border-l-4 border-brandOrange pl-4">
            <h4 className="font-bold text-sm text-gray-900">What happens if my bike needs extra repairs during a service?</h4>
            <p className="text-xs text-gray-600 mt-1">We won't just do the extra work and add it to your bill. We will call or text you with a clear explanation and an updated price quote so you can decide how you want to proceed.</p>
          </div>
        </div>

        <div className="text-center mt-12">
          <button 
            onClick={() => setActivePage('Contact')}
            className="bg-brandOrange hover:bg-brandOrange-dark text-white font-bold text-base px-8 py-4 rounded-md shadow-md"
          >
            Request a Clear Booking Quote
          </button>
        </div>
      </div>
    </div>
  );
}