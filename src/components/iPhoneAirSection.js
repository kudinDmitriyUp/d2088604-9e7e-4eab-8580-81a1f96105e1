import React from 'react';

const iPhoneAirSection = () => {
  return (
    <section className="product-section bg-apple-light-gray text-apple-gray">
      <div className="text-center">
        <h2 className="product-title">
          iPhone Air
        </h2>
        <p className="product-subtitle text-apple-text-gray">
          The thinnest iPhone ever.<br />
          With the power of pro inside.
        </p>
        
        <div className="product-buttons">
          <button className="apple-button-primary">
            Learn more
          </button>
          <button className="apple-button-secondary">
            Buy
          </button>
        </div>

        {/* iPhone Air Image */}
        <div className="relative max-w-4xl mx-auto">
          <div className="relative">
            {/* Hand holding phone */}
            <div className="flex justify-center items-center">
              <div className="relative">
                {/* Phone */}
                <div className="w-64 h-4 bg-gray-300 rounded-full shadow-lg relative">
                  <div className="absolute left-2 top-1/2 transform -translate-y-1/2 w-1 h-1 bg-gray-400 rounded-full"></div>
                  <div className="absolute right-2 top-1/2 transform -translate-y-1/2 w-1 h-1 bg-gray-400 rounded-full"></div>
                </div>
                
                {/* Fingers */}
                <div className="absolute -bottom-8 right-0 transform translate-x-4">
                  <div className="flex space-x-1">
                    <div className="w-6 h-12 bg-amber-100 rounded-full transform rotate-12 shadow-md"></div>
                    <div className="w-6 h-14 bg-amber-100 rounded-full transform rotate-6 shadow-md"></div>
                    <div className="w-6 h-16 bg-amber-100 rounded-full shadow-md"></div>
                    <div className="w-6 h-14 bg-amber-100 rounded-full transform -rotate-6 shadow-md"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default iPhoneAirSection;