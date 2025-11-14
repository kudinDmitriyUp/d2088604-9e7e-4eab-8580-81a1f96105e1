import React from 'react';

const ProductGrid = () => {
  return (
    <section className="py-16 bg-apple-light-gray">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {/* AirPods Pro 3 */}
          <div className="bg-white rounded-3xl p-12 text-center min-h-[500px] flex flex-col justify-center">
            <h3 className="text-3xl md:text-4xl font-semibold text-apple-gray mb-2">
              AirPods Pro 3
            </h3>
            <p className="text-lg text-apple-text-gray mb-8">
              The world's best in-ear<br />
              Active Noise Cancellation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 items-center justify-center mb-8">
              <button className="apple-button-primary">
                Learn more
              </button>
              <button className="apple-button-secondary">
                Buy
              </button>
            </div>
            {/* AirPods Image */}
            <div className="flex justify-center">
              <div className="relative">
                <div className="w-16 h-20 bg-white rounded-full shadow-lg border border-gray-200 relative">
                  <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-2 h-6 bg-gray-300 rounded-full"></div>
                </div>
                <div className="w-16 h-20 bg-white rounded-full shadow-lg border border-gray-200 relative ml-8">
                  <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-2 h-6 bg-gray-300 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>

          {/* iPad Air */}
          <div className="bg-gradient-to-br from-blue-100 to-blue-200 rounded-3xl p-12 text-center min-h-[500px] flex flex-col justify-center">
            <h3 className="text-3xl md:text-4xl font-semibold text-apple-gray mb-2">
              iPad Air
            </h3>
            <p className="text-lg text-apple-text-gray mb-8">
              Now supercharged by the M4 chip.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 items-center justify-center mb-8">
              <button className="apple-button-primary">
                Learn more
              </button>
              <button className="apple-button-secondary">
                Buy
              </button>
            </div>
            {/* iPad Image */}
            <div className="flex justify-center">
              <div className="w-48 h-64 bg-white rounded-2xl shadow-xl border border-gray-200 relative">
                <div className="absolute inset-2 bg-blue-50 rounded-xl"></div>
              </div>
            </div>
          </div>

          {/* Apple Watch Series 11 */}
          <div className="bg-white rounded-3xl p-12 text-center min-h-[500px] flex flex-col justify-center">
            <div className="mb-4">
              <svg className="w-8 h-8 mx-auto fill-current text-apple-gray" viewBox="0 0 24 24">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
              </svg>
              <span className="text-sm font-medium text-apple-gray">WATCH SERIES 11</span>
            </div>
            <h3 className="text-2xl md:text-3xl font-semibold text-apple-gray mb-2">
              The ultimate device to start your fitness.
            </h3>
            <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
              <button className="apple-button-primary">
                Learn more
              </button>
              <button className="apple-button-secondary">
                Buy
              </button>
            </div>
          </div>

          {/* iPad */}
          <div className="bg-white rounded-3xl p-12 text-center min-h-[500px] flex flex-col justify-center">
            <h3 className="text-3xl md:text-4xl font-semibold text-apple-gray mb-2">
              iPad
            </h3>
            <p className="text-lg text-apple-text-gray mb-8">
              Now with the speed of the A18 chip<br />
              and double the starting storage.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
              <button className="apple-button-primary">
                Learn more
              </button>
              <button className="apple-button-secondary">
                Buy
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;