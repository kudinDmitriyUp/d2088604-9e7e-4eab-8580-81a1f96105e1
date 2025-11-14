import React from 'react';

const HeroSection = () => {
  return (
    <section className="product-section bg-apple-light-gray text-apple-gray">
      <div className="text-center">
        {/* Apple Logo with Gift Ribbon */}
        <div className="mb-12">
          <div className="relative inline-block">
            <svg className="w-32 h-32 mx-auto" viewBox="0 0 100 100">
              {/* Apple Logo with Gradient */}
              <defs>
                <linearGradient id="appleGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#007AFF" />
                  <stop offset="50%" stopColor="#FFD60A" />
                  <stop offset="100%" stopColor="#FF6900" />
                </linearGradient>
              </defs>
              <path
                fill="url(#appleGradient)"
                d="M74.84 47.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C60.38 45 59.07 40.45 60.83 37.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M69.13 31.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"
                transform="scale(0.8) translate(12.5, 12.5)"
              />
              {/* Gift Ribbon */}
              <rect x="45" y="10" width="10" height="80" fill="white" opacity="0.9" />
              <rect x="10" y="45" width="80" height="10" fill="white" opacity="0.9" />
              <polygon points="50,5 45,15 55,15" fill="white" opacity="0.9" />
              <polygon points="50,95 45,85 55,85" fill="white" opacity="0.9" />
              <polygon points="5,50 15,45 15,55" fill="white" opacity="0.9" />
              <polygon points="95,50 85,45 85,55" fill="white" opacity="0.9" />
            </svg>
          </div>
        </div>

        <h1 className="product-title text-apple-gray">
          Give something special.
        </h1>
        <p className="product-subtitle text-apple-text-gray">
          Find what they've been waiting for all year.
        </p>
        
        <div className="product-buttons">
          <button className="apple-button-primary">
            Shop gifts
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;