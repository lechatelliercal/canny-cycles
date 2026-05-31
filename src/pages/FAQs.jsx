import React from 'react';
import SEO from '../components/SEO';

export default function FAQs() {
  const faqData = [
    {
      q: "How often should I service my bike?",
      a: "For general hobby cyclists or commuters, a full service is recommended once a year, with a minor tune-up ahead of any increased summer use. If you ride frequently in wet Aberdeenshire conditions, you may need your drivetrain and brakes looked at every 3 to 6 months to prevent premature component wear."
    },
    {
      q: "How long does servicing typically take?",
      a: "Most standard safety checks and tune-ups are completed within 24 to 48 hours, depending on scheduling. Full overhauls can take longer if specialized replacement parts need to be ordered. We always give you a clear estimated turnaround time when you drop off your bike."
    },
    {
      q: "Do I need to book an appointment in advance?",
      a: "Yes, we work by appointment to make sure every bike gets dedicated time on the stand without long wait times. Please use our online contact form or call ahead to secure a drop-off time slot before bringing your bike to the workshop."
    },
    {
      q: "What types of bikes do you work on?",
      a: "We service almost all mechanical bikes. This includes modern drop-bar carbon road bikes, gravel bikes, hardtail and full-suspension mountain bikes, urban hybrids, rugged daily commuters, and children's family bikes."
    },
    {
      q: "Do you work on e-bikes?",
      a: "We offer full structural and mechanical servicing for e-bikes (including tires, brakes, chains, and gear adjustments). However, we do not service internal electrical drive units, battery cells, or firmware programming faults."
    },
    {
      q: "What happens if my bike requires unexpected extra repairs?",
      a: "If we find hidden issues while working on your bike, we stop and contact you immediately with a clear explanation and an updated cost estimate. We never perform extra paid work without your direct confirmation first."
    },
    {
      q: "Can you service multiple family bikes at the same time?",
      a: "Yes. We can schedule a single block drop-off for multiple family bikes. This is a practical way to get everyone's equipment safe and ready for the season in one go."
    },
    {
      q: "How much does a typical bike service cost?",
      a: "Our baseline labor rates start at £45 for a structural safety evaluation, up to £75 for standard tune-ups, and £145 for complete technical overhauls. Replacement parts are charged separately. You can find a full breakdown on our dedicated Pricing Page."
    },
    {
      q: "Where exactly are you located?",
      a: "Our workshop is conveniently located at Bridge of Canny, near Inchmarlo, just outside Banchory, Aberdeenshire. It's a straightforward, accessible countryside spot that makes dropping off and picking up your bike completely hassle-free."
    },
    {
      q: "What specific geographical areas do you serve?",
      a: "We primary serve riders across Banchory, Inchmarlo, Aboyne, Alford, Westhill, and the surrounding Deeside and Aberdeenshire valley communities."
    }
  ];

  // Map to structured FAQ Schema format for search engines
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqData.map(item => ({
      "@type": "Question",
      "name": item.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.a
      }
    }))
  };

  return (
    <div className="bg-white py-12 md:py-20">
      <SEO 
        title="Bike Servicing FAQs Aberdeenshire | Canny Cycle Services"
        description="Got questions about turnaround times, e-bikes, or repair costs? Get direct, upfront answers from your local Banchory bike mechanic."
        schema={faqSchema}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h1 className="text-3xl sm:text-4xl font-black text-brandBlue tracking-tight">Frequently Asked Questions</h1>
          <p className="text-gray-600 text-sm mt-2">
            Clear, honest answers about workshop operations, booking details, and pricing.
          </p>
        </div>

        <div className="space-y-6 divide-y divide-gray-200">
          {faqData.map((faq, index) => (
            <div key={index} className="pt-6 first:pt-0">
              <h3 className="text-base font-bold text-brandBlue flex items-start">
                <span className="text-brandOrange font-black mr-2">Q:</span>
                {faq.q}
              </h3>
              <p className="text-sm text-gray-600 mt-2 pl-6 leading-relaxed">
                {faq.a}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}