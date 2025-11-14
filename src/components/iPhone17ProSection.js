import React from 'react';

const iPhone17ProSection = () => {
  return (
    <section className="product-section bg-black text-white">
      <div className="text-center">
        <h2 className="product-title">
          iPhone 17 Pro
        </h2>
        <p className="product-subtitle text-gray-300">
          All out Pro.
        </p>
        
        <div className="product-buttons">
          <button className="apple-button-primary">
            Learn more
          </button>
          <button className="apple-button-secondary border-white text-white hover:bg-white hover:text-black">
            Buy
          </button>
        </div>

        {/* iPhone Image */}
        <div className="relative max-w-4xl mx-auto">
          <div className="aspect-[4/3] bg-gradient-to-b from-orange-400 to-orange-600 rounded-3xl relative overflow-hidden">
            {/* Camera System */}
            <div className="absolute top-8 left-8 w-32 h-20 bg-orange-500 rounded-2xl">
              <div className="absolute top-2 left-2 w-8 h-8 bg-black rounded-full border-2 border-gray-700"></div>
              <div className="absolute top-2 right-2 w-8 h-8 bg-black rounded-full border-2 border-gray-700"></div>
              <div className="absolute bottom-2 left-2 w-8 h-8 bg-black rounded-full border-2 border-gray-700"></div>
              <div className="absolute bottom-2 right-8 w-4 h-4 bg-gray-300 rounded-full"></div>
              <div className="absolute bottom-2 right-2 w-4 h-4 bg-black rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default iPhone17ProSection;