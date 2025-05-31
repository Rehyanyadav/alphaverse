import React from 'react';
import { BarChart3, Users } from 'lucide-react';
import ServiceCard from './ServiceCard';

const Services: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-gray-50" id="services">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary-600 font-medium">Our Offerings</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-4">
            Comprehensive Business Solutions
          </h2>
          <p className="text-gray-600">
            From powerful SAAS applications to intelligent CRM systems, Alpha Verse delivers cutting-edge technology solutions that drive business growth and operational excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <ServiceCard 
            title="Enterprise SAAS"
            description="Cloud-based software solutions that streamline business operations and enhance productivity."
            icon={<BarChart3 className="h-6 w-6 text-primary-600" />}
            features={[
              "Custom web application development",
              "Cloud infrastructure setup",
              "API integration and development",
              "Scalable architecture",
              "Real-time data processing"
            ]}
          />
          
          <ServiceCard 
            title="Advanced CRM"
            description="Comprehensive customer relationship management systems designed to nurture and grow your customer base."
            icon={<Users className="h-6 w-6 text-white" />}
            features={[
              "Customer data management",
              "Sales automation and tracking",
              "Marketing campaign integration",
              "Customer service tools",
              "Analytics and reporting"
            ]}
            primary
          />
        </div>
      </div>
    </section>
  );
};

export default Services