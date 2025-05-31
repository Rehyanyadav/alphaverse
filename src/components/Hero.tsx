import React, { useEffect, useRef } from 'react';

const Hero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!heroRef.current) return;
      const scrollY = window.scrollY;
      const opacity = Math.max(1 - scrollY / 500, 0);
      const transform = `translateY(${scrollY * 0.3}px)`;
      
      heroRef.current.style.opacity = opacity.toString();
      heroRef.current.style.transform = transform;
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700 flex items-center overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute h-96 w-96 rounded-full bg-white/20 -top-20 -left-20 blur-3xl"></div>
        <div className="absolute h-96 w-96 rounded-full bg-white/20 top-1/2 left-1/2 blur-3xl"></div>
        <div className="absolute h-96 w-96 rounded-full bg-secondary-500/20 bottom-0 right-0 blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-24 md:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div 
            ref={heroRef} 
            className="text-center lg:text-left transition-all duration-300"
          >
            <span className="inline-block px-4 py-1 rounded-full bg-white/10 backdrop-blur-sm text-primary-100 font-medium mb-5">
              Transform Your Business Today
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Powerful SAAS & CRM <span className="text-accent-400">Solutions</span> for Modern Businesses
            </h1>
            <p className="text-lg md:text-xl text-primary-100 mb-8 max-w-2xl mx-auto lg:mx-0">
              Alpha Codes delivers cutting-edge software solutions designed to streamline operations, enhance customer relationships, and drive growth for businesses of all sizes.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
              <button className="px-6 py-3 rounded-lg bg-white text-primary-900 font-medium hover:bg-primary-50 transition-all transform hover:scale-105 shadow-lg w-full sm:w-auto">
                Explore Services
              </button>
              <button className="px-6 py-3 rounded-lg bg-transparent border border-white/30 text-white font-medium hover:bg-white/10 transition-all w-full sm:w-auto">
                Book a Demo
              </button>
            </div>
          </div>
          <div className="hidden lg:block">
            <div className="relative">
              <div className="absolute -inset-4 bg-white/5 backdrop-blur-xl rounded-2xl shadow-2xl"></div>
              <div className="relative p-6 bg-white/10 backdrop-blur-xl rounded-xl shadow-lg overflow-hidden">
                <div className="aspect-video bg-gradient-to-br from-gray-900 to-gray-800 rounded-lg overflow-hidden relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="mb-3 w-16 h-16 rounded-full bg-white/10 flex items-center justify-center mx-auto">
                        <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
                          <div className="w-0 h-0 border-t-8 border-t-transparent border-l-12 border-l-white border-b-8 border-b-transparent ml-1"></div>
                        </div>
                      </div>
                      <p className="text-white font-medium">Watch Demo</p>
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-black/50 to-transparent"></div>
                </div>
                <div className="mt-6 space-y-4">
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-lg bg-accent-500/20 flex items-center justify-center">
                      <div className="w-5 h-5 rounded-full bg-accent-500"></div>
                    </div>
                    <div className="ml-4">
                      <p className="text-white text-sm font-medium">Real-time Analytics</p>
                      <div className="h-1 mt-1 bg-white/10 rounded-full overflow-hidden">
                        <div className="h-full w-3/4 bg-accent-500 rounded-full"></div>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-lg bg-secondary-500/20 flex items-center justify-center">
                      <div className="w-5 h-5 rounded-full bg-secondary-500"></div>
                    </div>
                    <div className="ml-4">
                      <p className="text-white text-sm font-medium">Customer Management</p>
                      <div className="h-1 mt-1 bg-white/10 rounded-full overflow-hidden">
                        <div className="h-full w-4/5 bg-secondary-500 rounded-full"></div>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-lg bg-primary-300/20 flex items-center justify-center">
                      <div className="w-5 h-5 rounded-full bg-primary-300"></div>
                    </div>
                    <div className="ml-4">
                      <p className="text-white text-sm font-medium">Automation</p>
                      <div className="h-1 mt-1 bg-white/10 rounded-full overflow-hidden">
                        <div className="h-full w-2/3 bg-primary-300 rounded-full"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;