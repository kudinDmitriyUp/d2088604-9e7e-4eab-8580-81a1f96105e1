import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import iPhone17ProSection from './components/iPhone17ProSection';
import iPhoneAirSection from './components/iPhoneAirSection';
import ProductGrid from './components/ProductGrid';
import TradeInSection from './components/TradeInSection';
import AppleCardSection from './components/AppleCardSection';
import AppleTVSection from './components/AppleTVSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <HeroSection />
        <iPhone17ProSection />
        <iPhoneAirSection />
        <ProductGrid />
        <TradeInSection />
        <AppleCardSection />
        <AppleTVSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;