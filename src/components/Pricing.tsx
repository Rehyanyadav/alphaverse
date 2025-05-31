import React, { useState } from 'react';
import { Check } from 'lucide-react';

interface PlanFeature {
  name: string;
  included: boolean;
}

interface Plan {
  name: string;
  price: string;
  description: string;
  features: PlanFeature[];
  popular?: boolean;
  buttonText: string;
}

const Pricing: React.FC = () => {
  const [isAnnual, setIsAnnual] = useState(true);
  
  const plans: Plan[] = [
    {
      name: "Starter",
      price: isAnnual ? "₹4,999" : "₹5,999",
      description: "Perfect for small businesses just getting started.",
      features: [
        { name: "Basic CRM functionality", included: true },
        { name: "Up to 5 user accounts", included: true },
        { name: "1,000 contacts", included: true },
        { name: "Email support", included: true },
        { name: "Basic reporting", included: true },
        { name: "API access", included: false },
        { name: "Advanced analytics", included: false },
        { name: "Custom integrations", included: false },
      ],
      buttonText: "Start Free Trial"
    },
    {
      name: "Professional",
      price: isAnnual ? "₹9,999" : "₹11,999",
      description: "Ideal for growing businesses with expanding needs.",
      features: [
        { name: "Full CRM functionality", included: true },
        { name: "Up to 25 user accounts", included: true },
        { name: "10,000 contacts", included: true },
        { name: "Priority email & phone support", included: true },
        { name: "Advanced reporting", included: true },
        { name: "API access", included: true },
        { name: "Advanced analytics", included: true },
        { name: "Custom integrations", included: false },
      ],
      popular: true,
      buttonText: "Start Free Trial"
    },
    {
      name: "Enterprise",
      price: isAnnual ? "₹24,999" : "₹29,999",
      description: "Comprehensive solution for large organizations.",
      features: [
        { name: "Full CRM functionality", included: true },
        { name: "Unlimited user accounts", included: true },
        { name: "Unlimited contacts", included: true },
        { name: "24/7 dedicated support", included: true },
        { name: "Custom reporting", included: true },
        { name: "API access", included: true },
        { name: "Advanced analytics", included: true },
        { name: "Custom integrations", included: true },
      ],
      buttonText: "Contact Sales"
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-white" id="pricing">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary-600 font-medium">Pricing</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-4">
            Flexible Plans for Your Business
          </h2>
          <p className="text-gray-600 mb-8">
            Choose the perfect plan that fits your business needs. All plans include a 14-day free trial.
          </p>
          
          <div className="flex items-center justify-center">
            <span className={`mr-3 ${isAnnual ? 'text-gray-500' : 'text-gray-900 font-medium'}`}>
              Monthly
            </span>
            <button 
              onClick={() => setIsAnnual(!isAnnual)}
              className="relative inline-flex h-6 w-12 items-center rounded-full bg-gray-200"
            >
              <span className="sr-only">Toggle billing frequency</span>
              <span 
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition ${isAnnual ? 'translate-x-6' : 'translate-x-1'}`}
              />
            </button>
            <span className={`ml-3 ${isAnnual ? 'text-gray-900 font-medium' : 'text-gray-500'}`}>
              Annually <span className="text-primary-600 text-sm">(Save 20%)</span>
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`relative rounded-xl overflow-hidden transition-all ${
                plan.popular 
                  ? 'bg-gradient-to-br from-primary-50 to-primary-100 border-2 border-primary-500 shadow-xl transform md:-translate-y-4' 
                  : 'bg-white border border-gray-200 hover:border-primary-300 hover:shadow-lg'
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0">
                  <div className="bg-primary-600 text-white text-xs font-bold px-3 py-1 transform rotate-45 translate-x-6 -translate-y-1">
                    POPULAR
                  </div>
                </div>
              )}
              
              <div className="p-6 md:p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <p className="text-gray-600 mb-6">{plan.description}</p>
                
                <div className="mb-6">
                  <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                  <span className="text-gray-600">/month</span>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <div className={`p-1 mt-0.5 rounded-full ${
                        feature.included 
                          ? 'bg-primary-100' 
                          : 'bg-gray-100'
                      }`}>
                        <Check className={`h-3 w-3 ${
                          feature.included 
                            ? 'text-primary-600' 
                            : 'text-gray-400'
                        }`} />
                      </div>
                      <span className={`ml-2 text-sm ${
                        feature.included 
                          ? 'text-gray-700' 
                          : 'text-gray-400'
                      }`}>{feature.name}</span>
                    </li>
                  ))}
                </ul>
                
                <button className={`w-full py-2 px-4 rounded-lg transition-all ${
                  plan.popular 
                    ? 'bg-primary-600 text-white hover:bg-primary-700' 
                    : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                } font-medium`}>
                  {plan.buttonText}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;