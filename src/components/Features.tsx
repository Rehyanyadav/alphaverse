import React, { useEffect, useRef } from 'react';
import { BarChart3, Users, LineChart, Smartphone, Globe, Shield } from 'lucide-react';

const Features: React.FC = () => {
  const featureRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    
    featureRefs.current.forEach(ref => {
      if (ref) observer.observe(ref);
    });

    return () => {
      featureRefs.current.forEach(ref => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  const features = [
    {
      icon: <BarChart3 className="h-6 w-6 text-white" />,
      title: "Advanced Analytics",
      description: "Gain valuable insights with our powerful analytics tools. Track performance, identify trends, and make data-driven decisions."
    },
    {
      icon: <Users className="h-6 w-6 text-white" />,
      title: "Customer Management",
      description: "Manage your customer relationships effectively with our comprehensive CRM tools designed for businesses of all sizes."
    },
    {
      icon: <LineChart className="h-6 w-6 text-white" />,
      title: "Business Intelligence",
      description: "Transform raw data into actionable insights with customizable dashboards and reporting tools."
    },
    {
      icon: <Smartphone className="h-6 w-6 text-white" />,
      title: "Mobile Integration",
      description: "Access your business data anytime, anywhere with our mobile-friendly solutions and dedicated apps."
    },
    {
      icon: <Globe className="h-6 w-6 text-white" />,
      title: "Cloud Solutions",
      description: "Leverage the power of cloud computing for scalable, reliable, and secure business operations."
    },
    {
      icon: <Shield className="h-6 w-6 text-white" />,
      title: "Enterprise Security",
      description: "Protect your business data with our advanced security features, including encryption and access controls."
    }
  ];

  return (
    <section className="py-16 md:py-24 relative overflow-hidden" id="features">
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-primary-900 to-primary-800"></div>
      
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#ffffff33_1px,transparent_1px)] [background-size:20px_20px]"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary-300 font-medium">Why Choose Us</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-2 mb-4">
            Powerful Features for Modern Businesses
          </h2>
          <p className="text-primary-100">
            Our solutions are packed with innovative features designed to help your business thrive in today's competitive landscape.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              ref={el => featureRefs.current[index] = el}
              className="bg-white/5 backdrop-blur-sm rounded-xl p-6 opacity-0 transition-all duration-700 ease-out transform translate-y-8"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="p-3 bg-gradient-to-br from-primary-600 to-primary-800 rounded-lg">
                    {feature.icon}
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                  <p className="text-primary-100">{feature.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;