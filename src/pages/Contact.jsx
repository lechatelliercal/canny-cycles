import React, { useState } from 'react';
import SEO from '../components/SEO';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', bikeType: 'Road', serviceRequired: 'Tune-Up', message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // In production, this maps to your backend or email provider API endpoint
    console.log('Booking Request Transmitted:', formData);
    setSubmitted(true);
  };

  return (
    <div className="bg-white py-12 md:py-20">
      <SEO 
        title="Book Bike Service Banchory | Contact Canny Cycle Services"
        description="Book your bike repair or servicing online. Located at Bridge of Canny, Inchmarlo. Easy drop-off and professional local turnaround."
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Contact Form Container Section */}
        <div className="bg-brandOff border border-gray-200 p-6 md:p-8 rounded-lg shadow-sm">
          <h1 className="text-2xl font-black text-brandBlue mb-2">Request A Service Appointment</h1>
          <p className="text-xs text-gray-600 mb-6">Fill out your details below, and Callum will get back to you promptly to confirm a drop-off time slot.</p>
          
          {submitted ? (
            <div className="bg-green-50 border-2 border-green-500 p-6 rounded text-center">
              <h3 className="font-bold text-green-900 text-lg">Thank You For Your Booking Enquiry</h3>
              <p className="text-xs text-green-700 mt-1">Callum will review your request and contact you shortly via phone or email to coordinate your drop-off.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 text-sm">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1">Full Name</label>
                <input required type="text" className="w-full border border-gray-300 rounded p-2.5 focus:outline-brandBlue" 
                  value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1">Email Address</label>
                  <input required type="email" className="w-full border border-gray-300 rounded p-2.5 focus:outline-brandBlue" 
                    value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1">Phone Number</label>
                  <input required type="tel" className="w-full border border-gray-300 rounded p-2.5 focus:outline-brandBlue" 
                    value={formData.phone} onChange={(e) => setFormData({...formData, phone: e.target.value})} />
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1">Bicycle Profile Type</label>
                  <select className="w-full border border-gray-300 rounded bg-white p-2.5 focus:outline-brandBlue"
                    value={formData.bikeType} onChange={(e) => setFormData({...formData, bikeType: e.target.value})}>
                    <option>Road Bike</option><option>Mountain Bike</option><option>Gravel Bike</option>
                    <option>Commuter / Hybrid</option><option>Family / Kids Bike</option><option>E-Bike</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1">Service Tier Required</label>
                  <select className="w-full border border-gray-300 rounded bg-white p-2.5 focus:outline-brandBlue"
                    value={formData.serviceRequired} onChange={(e) => setFormData({...formData, serviceRequired: e.target.value})}>
                    <option>Structural Safety Check (£45)</option>
                    <option>Standard Tune-Up (£75)</option>
                    <option>Full Overhaul Service (£145)</option>
                    <option>Custom Specific Mechanical Repair</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1">Notes / Desired Repairs Description</label>
                <textarea rows={4} className="w-full border border-gray-300 rounded p-2.5 focus:outline-brandBlue" placeholder="Please mention any specific issues here (e.g., gears skipping, brakes making noise, bike has been sitting in a shed for two years)..."
                  value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})} />
              </div>
              <button type="submit" className="w-full bg-brandOrange hover:bg-brandOrange-dark text-white font-bold p-3.5 rounded transition-all shadow">
                Submit Secure Workshop Booking Request
              </button>
            </form>
          )}
        </div>

        {/* Location / Meta Details Section */}
        <div className="space-y-8 flex flex-col justify-between">
          <div className="space-y-4">
            <h2 className="text-2xl font-black text-brandBlue">Workshop Contact Info</h2>
            <p className="text-gray-700 text-sm leading-relaxed">
              We are located in a convenient countryside setting at Bridge of Canny, near Inchmarlo. This makes dropping off your bike simple and completely stress-free, with no town center parking or traffic to worry about.
            </p>
            
            <div className="border-t border-gray-200 pt-4 space-y-2 text-sm text-gray-800 font-medium">
              <p><span className="text-brandOrange font-bold mr-2">📍 Address:</span> Bridge of Canny, Inchmarlo, near Banchory, AB31</p>
              <p><span className="text-brandOrange font-bold mr-2">📞 Phone:</span> +44 1330 82XXXX (Call or Text Callum)</p>
              <p><span className="text-brandOrange font-bold mr-2">✉ Email:</span> callum@cannycycles.com</p>
            </div>
          </div>

          <div className="bg-gray-50 border border-gray-200 p-6 rounded-lg">
            <h3 className="font-bold text-brandBlue text-sm uppercase tracking-wide mb-2">Standard Opening Hours</h3>
            <div className="text-xs text-gray-600 space-y-1">
              <p className="flex justify-between"><span>Monday - Friday</span> <span className="font-bold text-gray-900">08:30 - 17:30</span></p>
              <p className="flex justify-between"><span>Saturday</span> <span className="font-bold text-gray-900">09:00 - 13:00</span></p>
              <p className="flex justify-between text-brandOrange font-bold"><span>Sunday</span> <span>Closed Workshop</span></p>
            </div>
          </div>

          {/* Interactive Graphic Vector Map Placeholder */}
          <div className="bg-slate-100 border border-gray-300 h-48 rounded-lg flex items-center justify-center p-4 text-center">
            <div className="text-xs text-gray-500">
              <span className="block font-bold text-brandBlue text-sm mb-1">🗺️ Map & Service Area Vector View</span>
              Active Coverage Zone: Banchory, Inchmarlo, Kincardine O'Neil, Aboyne, and surrounding Deeside areas.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}