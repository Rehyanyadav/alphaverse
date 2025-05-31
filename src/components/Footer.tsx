import React from 'react';
import { Facebook, Twitter, Linkedin, Instagram, ArrowRight } from 'lucide-react';
import Logo from './Logo';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="flex items-center mb-6">
              <Logo />
              <span className="ml-2 font-bold text-xl">Alpha Codes</span>
            </div>
            <p className="text-gray-400 mb-6">
              Delivering cutting-edge SAAS and CRM solutions to help businesses streamline operations and drive growth.
            </p>
            <div className="flex space-x-4">
              <SocialLink icon={<Facebook className="h-5 w-5" />} href="#" />
              <SocialLink icon={<Twitter className="h-5 w-5" />} href="#" />
              <SocialLink icon={<Linkedin className="h-5 w-5" />} href="#" />
              <SocialLink icon={<Instagram className="h-5 w-5" />} href="#" />
            </div>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-6">Solutions</h3>
            <ul className="space-y-3">
              <FooterLink text="SAAS Development" />
              <FooterLink text="CRM Systems" />
              <FooterLink text="Business Intelligence" />
              <FooterLink text="Digital Transformation" />
              <FooterLink text="Security Solutions" />
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-6">Company</h3>
            <ul className="space-y-3">
              <FooterLink text="About Us" />
              <FooterLink text="Careers" />
              <FooterLink text="Blog" />
              <FooterLink text="Press" />
              <FooterLink text="Contact" />
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-6">Subscribe</h3>
            <p className="text-gray-400 mb-4">
              Get the latest news and updates from Alpha Codes.
            </p>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Your email"
                className="px-4 py-2 bg-gray-800 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-primary-500 w-full"
              />
              <button className="bg-primary-600 hover:bg-primary-700 px-4 rounded-r-lg transition-all">
                <ArrowRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
        
        <hr className="border-gray-800 mb-8" />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Alpha Codes. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-500 hover:text-white text-sm transition-all">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-500 hover:text-white text-sm transition-all">
              Terms of Service
            </a>
            <a href="#" className="text-gray-500 hover:text-white text-sm transition-all">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

interface SocialLinkProps {
  icon: React.ReactNode;
  href: string;
}

const SocialLink: React.FC<SocialLinkProps> = ({ icon, href }) => {
  return (
    <a 
      href={href}
      className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary-600 transition-all"
    >
      {icon}
    </a>
  );
};

interface FooterLinkProps {
  text: string;
}

const FooterLink: React.FC<FooterLinkProps> = ({ text }) => {
  return (
    <li>
      <a href="#" className="text-gray-400 hover:text-white transition-all">
        {text}
      </a>
    </li>
  );
};

export default Footer;