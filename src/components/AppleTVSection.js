import React from 'react';

const AppleTVSection = () => {
  return (
    <section className="py-16 bg-apple-light-gray">
      <div className="max-w-7xl mx-auto px-4">
        {/* Apple TV+ Hero */}
        <div className="bg-yellow-400 rounded-3xl overflow-hidden mb-4 relative min-h-[500px]">
          <div className="absolute top-8 right-8">
            <div className="text-black text-2xl font-bold">tv</div>
          </div>
          <div className="absolute bottom-8 left-8">
            <h2 className="text-6xl font-bold text-black mb-4">PLURIBUS</h2>
            <div className="flex gap-4">
              <button className="bg-white text-black px-6 py-2 rounded-full text-sm font-medium">
                Watch now
              </button>
            </div>
          </div>
          {/* Character Image Placeholder */}
          <div className="absolute right-0 top-0 w-1/2 h-full bg-gradient-to-l from-yellow-300 to-transparent">
            <div className="w-full h-full bg-yellow-300 opacity-50"></div>
          </div>
        </div>

        {/* TV Shows Grid */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          <div className="bg-green-500 rounded-2xl aspect-video relative">
            <div className="absolute bottom-4 left-4 text-white text-sm font-medium">
              <div>$4.99/mo</div>
            </div>
          </div>
          <div className="bg-gray-900 rounded-2xl aspect-video relative">
            <div className="absolute bottom-4 left-4 text-white text-sm font-medium">
              <div>$4.99/mo</div>
            </div>
          </div>
          <div className="bg-gray-800 rounded-2xl aspect-video relative">
            <div className="absolute bottom-4 left-4 text-white text-sm font-medium">
              <div>$4.99/mo</div>
            </div>
          </div>
          <div className="bg-gray-900 rounded-2xl aspect-video relative">
            <div className="absolute bottom-4 left-4 text-white text-sm font-medium">
              <div>$4.99/mo</div>
            </div>
          </div>
          <div className="bg-pink-500 rounded-2xl aspect-video relative">
            <div className="absolute bottom-4 left-4 text-white text-sm font-medium">
              <div>$4.99/mo</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppleTVSection;