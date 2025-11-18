import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    company: [
      { name: 'About Us', href: '/about' },
      { name: 'Industries', href: '/industries' },
      { name: 'Contact', href: '/contact' },
    ],
    services: [
      { name: 'IT Staffing', href: '/services#it-staffing' },
      { name: 'IT Development', href: '/services#it-development' },
      { name: 'Digital Marketing', href: '/services#digital-marketing' },
    
    ],
  };

  return (
    <footer className="bg-gray-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-5">
              <img
                className="h-10 w-auto md:h-12"
                src="/images/IMG_7671.PNG"
                alt="Recuitbot LLC"
              />
              <span className="ml-2 text-base md:text-lg font-bold tracking-tight text-primary-400">RECUITBOT LLC</span>
            </div>
            <p className="text-gray-300 text-sm leading-6 mb-4 max-w-xs">
              Your trusted partner for IT staffing, development, and digital marketing solutions. We connect talent with opportunity across industries.
            </p>
            
          </div>

          {/* Company */}
          <div>
            <h3 className="text-base font-semibold text-white mb-4">
              Company
            </h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-gray-300 hover:text-white transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Services */}
          <div>
            <h3 className="text-base font-semibold text-white mb-4">
              Our Services
            </h3>
            <ul className="space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-gray-300 hover:text-white transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h3 className="text-base font-semibold text-white mb-4">
              Contact Us
            </h3>
            <div className="space-y-3">
              <div className="flex items-start">
                <svg className="h-4 w-4 text-primary-400 mt-0.5 mr-3 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M12 2C8.14 2 5 5.14 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.86-3.14-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z"/>
                </svg>
                <span className="text-gray-300 text-sm">237 South Street, Suite #108, Waukesha, WI 53186</span>
              </div>
              <div className="flex items-center">
                <svg className="h-4 w-4 text-primary-400 mr-3 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.11.37 2.3.57 3.58.57a1 1 0 011 1V21a1 1 0 01-1 1C10.85 22 2 13.15 2 2a1 1 0 011-1h3.5a1 1 0 011 1c0 1.28.2 2.47.57 3.58a1 1 0 01-.24 1.01l-2.21 2.2z"/>
                </svg>
                <a href="tel:+12623361142" className="text-gray-300 hover:text-white transition-colors duration-200 text-sm">(262) 336-1142</a>
              </div>
              <div className="flex items-center">
                <svg className="h-4 w-4 text-primary-400 mr-3 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M20 4H4a2 2 0 00-2 2v12a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2zm-1.4 3L12 12 5.4 7h13.2z"/>
                </svg>
                <a href="mailto:team@recuitbot.com" className="text-gray-300 hover:text-white transition-colors duration-200 text-sm">team@recuitbot.com</a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-4 pt-4 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-3">
            <p className="text-gray-400 text-sm">
  © {currentYear} Recuitbot LLC. All rights reserved. | Designed & Developed by{" "}
  <a
    href="https://www.vikrin.com/"
    target="_blank"
    rel="noopener noreferrer"
    className="hover:text-white transition-colors duration-200"
  >
    Vikrin
  </a>
</p>

            <div className="flex items-center space-x-4 text-gray-400 text-sm">
              <a href="/privacy" className="hover:text-white transition-colors duration-200">Privacy Policy</a>
              <a href="/terms" className="hover:text-white transition-colors duration-200">Terms of Service</a>
              

            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
