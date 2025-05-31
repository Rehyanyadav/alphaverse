import React from 'react';
import { Check } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  features: string[];
  primary?: boolean;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ 
  title, 
  description, 
  icon, 
  features,
  primary = false
}) => {
  return (
    <div 
      className={`group relative overflow-hidden rounded-xl transition-all duration-300 transform hover:-translate-y-2 ${
        primary 
          ? 'bg-gradient-to-br from-primary-600 to-primary-800 text-white' 
          : 'bg-white text-gray-800'
      } shadow-lg hover:shadow-xl`}
    >
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10 transition-opacity group-hover:opacity-20">
        <div className="absolute h-64 w-64 rounded-full bg-white -top-20 -right-20 blur-3xl"></div>
        <div className="absolute h-64 w-64 rounded-full bg-white bottom-0 left-0 blur-3xl"></div>
      </div>

      <div className="relative p-6 md:p-8">
        <div className="mb-4">
          <div className={`p-3 rounded-lg inline-flex ${
            primary ? 'bg-white/10' : 'bg-primary-100'
          }`}>
            {icon}
          </div>
        </div>
        <h3 className="text-xl md:text-2xl font-bold mb-3">{title}</h3>
        <p className={`mb-6 ${primary ? 'text-primary-100' : 'text-gray-600'}`}>{description}</p>
        
        <ul className="space-y-3 mb-8">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <div className={`p-1 mt-0.5 rounded-full ${
                primary ? 'bg-white/20' : 'bg-primary-100'
              }`}>
                <Check className={`h-3 w-3 ${
                  primary ? 'text-white' : 'text-primary-600'
                }`} />
              </div>
              <span className={`ml-2 text-sm ${
                primary ? 'text-primary-100' : 'text-gray-600'
              }`}>{feature}</span>
            </li>
          ))}
        </ul>
        
        <button className={`w-full py-2 px-4 rounded-lg transition-all ${
          primary 
            ? 'bg-white text-primary-700 hover:bg-primary-100' 
            : 'bg-primary-600 text-white hover:bg-primary-700'
        } font-medium`}>
          Learn More
        </button>
      </div>
    </div>
  );
};

export default ServiceCard;