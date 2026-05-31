import React from 'react';
import SEO from '../components/SEO';

export default function About() {
  return (
    <div className="bg-white py-12 md:py-20">
      <SEO 
        title="About Callum | Independent Bike Mechanic Banchory"
        description="Meet Callum, the independent mechanic behind Canny Cycle Services. Practical, honest advice and quality bike servicing across Deeside."
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Section 1: Business Philosophy */}
        <section className="space-y-4">
          <h1 className="text-3xl sm:text-4xl font-black text-brandBlue tracking-tight">About Canny Cycle Services</h1>
          <p className="text-gray-700 text-base leading-relaxed">
            Canny Cycle Services was started to provide high-quality, reliable bicycle maintenance for riders across Banchory, Deeside, and the wider Aberdeenshire area. We focus on clear communication, thorough workmanship, and keeping your bike working exactly as it should.
          </p>
          <p className="text-gray-700 text-base leading-relaxed">
            The word <strong>'Canny'</strong> represents how we do business: practical, careful, and focused on sensible, cost-effective solutions. We don't push flashy upgrades or replace parts that still have plenty of miles left in them. Instead, we offer direct feedback and steady technical care to make sure your bike is safe and dependable to ride.
          </p>
        </section>

        {/* Section 2: Owner profile */}
        <section className="bg-brandOff border border-gray-200 p-6 md:p-10 rounded-lg flex flex-col md:flex-row gap-8 items-center">
          <div className="w-24 h-24 md:w-32 md:h-32 bg-brandBlue text-white rounded-full flex items-center justify-center font-black text-2xl shrink-0 border-2 border-brandOrange">
            Callum
          </div>
          <div className="space-y-3">
            <h2 className="text-2xl font-bold text-brandBlue">Meet Callum</h2>
            <p className="text-xs font-bold text-brandOrange uppercase tracking-wide">Owner & Dedicated Mechanic</p>
            <p className="text-gray-700 text-sm leading-relaxed">
              I handle every single bike that comes through the door at Canny Cycle Services. As a long-time rider myself, I know how frustrating it is when gears skip, brakes rub, or you just don't feel fully confident in your bike's safety.
            </p>
            <p className="text-gray-700 text-sm leading-relaxed">
              My background is grounded in practical mechanical work. I don't use over-the-top marketing pitch lines or generic retail fluff. My goal is simple: to keep you moving safely. Whether you are prepping for a local road race, tuning up a trail bike for weekend singletrack, or sorting out your family's everyday bikes, you can count on honest advice and precise, focused attention on the tools.
            </p>
            <div className="pt-2">
              <blockquote className="border-l-4 border-brandBlue pl-3 italic text-xs text-gray-600">
                "I believe in fixing things right the first time. When you drop your bike off, you’ll talk directly to me, and you’ll know exactly what you’re paying for."
              </blockquote>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}