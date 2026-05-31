import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Services from './pages/Services';
import Pricing from './pages/Pricing';
import About from './pages/About';
import FAQs from './pages/FAQs';
import Contact from './pages/Contact';

export default function App() {
  const [activePage, setActivePage] = useState('Home');

  const renderActivePage = () => {
    switch (activePage) {
      case 'Home': return <Home setActivePage={setActivePage} />;
      case 'Services': return <Services setActivePage={setActivePage} />;
      case 'Pricing': return <Pricing setActivePage={setActivePage} />;
      case 'About': return <About setActivePage={setActivePage} />;
      case 'FAQs': return <FAQs />;
      case 'Contact': return <Contact />;
      default: return <Home setActivePage={setActivePage} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white antialiased text-slate-900">
      <Navbar activePage={activePage} setActivePage={setActivePage} />
      <main className="flex-grow">
        {renderActivePage()}
      </main>
      <Footer setActivePage={setActivePage} />
    </div>
  );
}