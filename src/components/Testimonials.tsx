import React, { useState, useEffect, useRef } from 'react';
import { ArrowLeft, ArrowRight, Quote } from 'lucide-react';

interface Testimonial {
  quote: string;
  author: string;
  position: string;
  company: string;
  avatar: string;
}

const Testimonials: React.FC = () => {
  const testimonials: Testimonial[] = [
    {
      quote: "Alpha Codes' CRM system has completely transformed how we manage customer relationships. The intuitive interface and powerful analytics have helped us increase customer satisfaction by 35%.",
      author: "Sarah Johnson",
      position: "COO",
      company: "TechSolutions Inc.",
      avatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150"
    },
    {
      quote: "Implementing Alpha Codes' SAAS solution was one of the best business decisions we've made. The platform is scalable, secure, and has streamlined our operations beyond expectation.",
      author: "Michael Chen",
      position: "CTO",
      company: "Innovate Partners",
      avatar: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=150"
    },
    {
      quote: "The team at Alpha Codes delivered a custom solution that perfectly addressed our unique business challenges. Their expertise and support throughout the process were exceptional.",
      author: "Elena Rodriguez",
      position: "Director of Operations",
      company: "Global Commerce",
      avatar: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const slideRef = useRef<HTMLDivElement>(null);

  const goToNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const goToPrev = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    if (slideRef.current) {
      slideRef.current.addEventListener('animationend', () => {
        setIsAnimating(false);
      });
    }
    
    const interval = setInterval(() => {
      goToNext();
    }, 8000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-16 md:py-24 bg-gray-50 overflow-hidden" id="testimonials">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary-600 font-medium">Client Success</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-gray-600">
            Discover how our solutions have helped businesses like yours achieve their goals.
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative">
          <div 
            ref={slideRef}
            className={`bg-white rounded-2xl shadow-xl p-8 md:p-12 ${isAnimating ? 'animate-fade' : ''}`}
          >
            <div className="absolute -top-6 left-8 text-primary-600">
              <Quote className="h-12 w-12 opacity-20" />
            </div>
            
            <div className="text-lg md:text-xl text-gray-700 mb-8 relative z-10">
              "{testimonials[currentIndex].quote}"
            </div>
            
            <div className="flex items-center">
              <img 
                src={testimonials[currentIndex].avatar} 
                alt={testimonials[currentIndex].author} 
                className="w-12 h-12 rounded-full object-cover"
              />
              <div className="ml-4">
                <h4 className="font-bold text-gray-900">{testimonials[currentIndex].author}</h4>
                <p className="text-gray-600 text-sm">
                  {testimonials[currentIndex].position}, {testimonials[currentIndex].company}
                </p>
              </div>
            </div>
          </div>
          
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2.5 h-2.5 rounded-full transition-all ${
                  index === currentIndex ? 'bg-primary-600 w-8' : 'bg-gray-300'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
          
          <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 flex justify-between pointer-events-none">
            <button 
              onClick={goToPrev}
              className="w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center text-gray-700 hover:text-primary-600 transition-all transform -translate-x-1/2 pointer-events-auto focus:outline-none"
              aria-label="Previous testimonial"
            >
              <ArrowLeft className="h-5 w-5" />
            </button>
            <button 
              onClick={goToNext}
              className="w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center text-gray-700 hover:text-primary-600 transition-all transform translate-x-1/2 pointer-events-auto focus:outline-none"
              aria-label="Next testimonial"
            >
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;