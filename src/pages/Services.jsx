import React from 'react';
import SEO from '../components/SEO';

export default function Services({ setActivePage }) {
  const customServices = [
    {
      id: "safety-check",
      title: "01 / Structural Safety Check",
      desc: "A systematic baseline safety verification process. We visually inspect the structural frameset for stress fractures, verify critical fastener torque specifications across all components, and evaluate brake pad fatigue alongside tire wear profiles.",
      benefit: "Provides absolute peace of mind for older bikes or family gear that has been sitting unused in storage.",
      ideal: "Casual cyclists, parents checking children's bikes, or riders returning to the sport after a winter break."
    },
    {
      id: "tune-up",
      title: "02 / Tune-Up Service",
      desc: "Our standard maintenance package built to maintain component performance. Includes comprehensive gear alignment, precise brake pad adjustment, tire inflation profiling, chain lubrication, and overall drivetrain alignment verification.",
      benefit: "Eliminates annoying gear skips, resolves noisy brake systems, and improves pedaling efficiency.",
      ideal: "Daily commuters and active weekend club riders looking to maintain smooth mechanical operation."
    },
    {
      id: "full-service",
      title: "03 / Full Service Overhaul",
      desc: "A meticulous mechanical reset. The bike is completely stripped to the frame. Headset and bottom bracket bearings are fully inspected, cleaned, and re-greased. All inner and outer cables are completely replaced with premium variants, and wheels are trued in the stand.",
      benefit: "Restores your bike back to a crisp, near-factory feel while preventing high-cost component wear down.",
      ideal: "Dedicated road cyclists, gravel explorers, and mountain bikers tackling high mileage across Deeside."
    },
    {
      id: "repairs",
      title: "04 / Component Specific Repairs",
      desc: "Targeted troubleshooting for isolated mechanical faults. This covers everything from diagnosing bottom bracket creaks to replacing broken spokes, installing fresh headsets, or sorting out persistent frame issues.",
      benefit: "Saves you money by fixing only the specific broken element instead of forcing a full service tier.",
      ideal: "Riders who keep their gear well-maintained but face an unexpected structural or mechanical failure."
    },
    {
      id: "drivetrain",
      title: "05 / Deep Drivetrain Servicing",
      desc: "Complete removal of the chain, cassette, chainrings, and derailleurs. Components are placed into an ultra-clean degreasing bath to remove built-up grit, then reinstalled, adjusted, and lubricated with premium, weather-specific lubricants.",
      benefit: "Reduces friction to save your energy and significantly extends the life of your expensive gears.",
      ideal: "Mountain bikers and gravel riders dealing with wet Aberdeenshire mud and trail grit."
    },
    {
      id: "brakes",
      title: "06 / Advanced Brake Calibration",
      desc: "Covers mechanical cable replacement and hydraulic system bleeding. We purge contaminated fluid lines, push fresh oil through, resurface glazed pads, and realign calipers to stop any rotor rubbing.",
      benefit: "Provides strong, predictable stopping power under any weather conditions on steep descents.",
      ideal: "Mountain bikers and road riders who want responsive, reliable braking performance."
    },
    {
      id: "gears",
      title: "07 / Precision Gear Indexing",
      desc: "Straightening the rear derailleur hanger with alignment tools, cleaning shifting internals, and setting derailleurs and tension limits for crisp shifting.",
      benefit: "No more ghost shifting, dropped chains, or rattling gears when climbing steep hills.",
      ideal: "Riders experiencing gear skipping under load or delayed shifts across the cassette range."
    },
    {
      id: "wheel-truing",
      title: "08 / Wheel Truing & Spoke Tensioning",
      desc: "Mounting wheels in a precision truing stand to correct lateral and radial wobbles. Spoke tensions are carefully balanced to create a strong, round, and durable wheel structure.",
      benefit: "Eliminates wheel wobble, prevents spoke failure, and stops rim brakes from rubbing.",
      ideal: "Cyclists who have hit potholes or ridden rough tracks that knocked their wheels out of line."
    },
    {
      id: "refurbishment",
      title: "09 / Full Bike Refurbishment",
      desc: "A complete mechanical rebuild tailored for premium vintage steel or long-neglected frames. We strip everything down, treat the interior with rust inhibitors where possible, and replace every worn bearing, cable, bolt, and component.",
      benefit: "Breathes fresh life into a cherished older bicycle, making it ride safely and smoothly once again.",
      ideal: "Riders looking to restore a classic bike or bring a high-quality frame out of long-term retirement."
    },
    {
      id: "family-bikes",
      title: "10 / Family Bike Multi-Pack Servicing",
      desc: "An organized block service for multiple family bikes dropped off at once. We work efficiently through the fleet, checking brake clearances, safety bolt setups, and tire pressures across all family gear.",
      benefit: "Keeps the kids' bikes safe and sound while saving you multiple trips to the workshop.",
      ideal: "Parents looking for a practical, efficient way to get everyone's bikes sorted out for the season."
    }
  ];

  return (
    <div className="bg-white py-12 md:py-20">
      <SEO 
        title="Bike Repairs & Specialist Servicing Aberdeenshire"
        description="From wheel truing to full bike refurbishment in Aberdeenshire. Expert repairs for road, mountain, gravel, commuter, and family bikes."
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h1 className="text-3xl sm:text-4xl font-black text-brandBlue tracking-tight">Expert Mechanical Care Blueprint</h1>
          <p className="text-gray-600 text-base mt-3">
            Every bike is carefully inspected on its own merits. No shortcuts, no unnecessary upsells. Just transparent local workmanship designed to keep you riding safely.
          </p>
        </div>

        <div className="space-y-12">
          {customServices.map((service) => (
            <div key={service.id} className="border border-gray-200 bg-brandOff p-6 md:p-8 rounded-lg shadow-sm flex flex-col md:flex-row md:items-start justify-between gap-6">
              <div className="md:w-3/4 space-y-3">
                <h3 className="text-xl font-bold text-brandBlue">{service.title}</h3>
                <p className="text-sm text-gray-700 leading-relaxed">{service.desc}</p>
                
                <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  <div className="bg-white p-3 border border-gray-100 rounded">
                    <span className="block font-bold text-brandOrange uppercase tracking-wide">Key Benefit</span>
                    <span className="text-gray-600 block mt-0.5">{service.benefit}</span>
                  </div>
                  <div className="bg-white p-3 border border-gray-100 rounded">
                    <span className="block font-bold text-brandBlue uppercase tracking-wide">Ideal For</span>
                    <span className="text-gray-600 block mt-0.5">{service.ideal}</span>
                  </div>
                </div>
              </div>

              <div className="md:w-1/4 md:pt-2 flex items-center md:justify-end">
                <button 
                  onClick={() => setActivePage('Contact')}
                  className="w-full md:w-auto bg-brandBlue hover:bg-brandBlue-dark text-white font-bold text-xs uppercase tracking-wider px-5 py-3 rounded text-center transition-all shadow-sm"
                >
                  Book Service
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}