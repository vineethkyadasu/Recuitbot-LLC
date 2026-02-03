import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  MagnifyingGlassIcon,
  ArrowRightIcon,
  BuildingOfficeIcon,
  CurrencyDollarIcon,
  ShoppingBagIcon,
  PhoneIcon,
  ShieldCheckIcon,
  AcademicCapIcon,
  BuildingLibraryIcon,
  HeartIcon,
  TruckIcon
} from '@heroicons/react/24/outline';

const Industries: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const industries = [
    {
      name: 'Information Technology',
      icon: BuildingOfficeIcon,
      description: 'Recuitbot powers IT organizations with skilled talent and modern development solutions. From infrastructure support to custom software and application development, we help technology driven companies accelerate innovation, enhance agility, and stay ahead in a constantly evolving digital landscape.',
      services: ['Software Development', 'Cloud Migration', 'DevOps Implementation', 'AI and ML Solutions'],
      color: 'bg-blue-100 text-blue-600'
    },
    {
      name: 'Finance & Insurance',
      icon: CurrencyDollarIcon,
      description: 'We support financial and insurance institutions with secure, compliant, and scalable staffing and IT solutions. Recuitbot helps streamline operations, modernize legacy systems, and ensure regulatory adherence while connecting firms with finance savvy tech talent to drive digital transformation.',
      services: ['Fintech Development', 'Compliance Solutions', 'Risk Management', 'Digital Banking'],
      color: 'bg-blue-100 text-blue-600'
    },
    {
      name: 'Retail',
      icon: ShoppingBagIcon,
      description: 'In the fast paced retail sector, Recuitbot empowers businesses with ecommerce ready technology, customer centric applications, and marketing solutions that elevate the shopping experience. From POS integration to supply chain analytics, we help retailers optimize performance and meet changing consumer demands.',
      services: ['Ecommerce Development', 'Inventory Management', 'Customer Analytics', 'Mobile Commerce'],
      color: 'bg-purple-100 text-purple-600'
    },
    {
      name: 'Telecommunications',
      icon: PhoneIcon,
      description: 'Recuitbot provides telecom companies with specialized IT staffing, network solutions, and digital innovation to enhance connectivity and performance. Whether it\'s 5G deployment, customer management platforms, or cybersecurity, we ensure seamless operations and scalable support.',
      services: ['Network Design', '5G Implementation', 'IoT Solutions', 'Telecom Software'],
      color: 'bg-indigo-100 text-indigo-600'
    },
    {
      name: 'Network & Security',
      icon: ShieldCheckIcon,
      description: 'We deliver robust network architecture and advanced cybersecurity solutions to protect your critical infrastructure. Recuitbot\'s experts build and maintain secure environments, implementing proactive strategies to minimize risk and ensure business continuity in an increasingly complex threat landscape.',
      services: ['Cybersecurity', 'Network Security', 'Penetration Testing', 'Security Audits'],
      color: 'bg-red-100 text-red-600'
    },
    {
      name: 'Education',
      icon: AcademicCapIcon,
      description: 'Recuitbot partners with educational institutions to implement modern digital tools and learning platforms that enhance teaching, streamline administration, and support remote learning. Our staffing and tech services are tailored to drive accessibility, efficiency, and innovation in education.',
      services: ['Learning Management Systems', 'Educational Apps', 'Student Portals', 'Online Assessment'],
      color: 'bg-yellow-100 text-yellow-600'
    },
    {
      name: 'State & Federal Government',
      icon: BuildingLibraryIcon,
      description: 'We understand the unique challenges of public sector organizations. Recuitbot provides secure, compliant, and mission-critical solutions for state and federal agencies offering workforce augmentation, IT modernization, and digital infrastructure services that ensure transparency, efficiency, and impact.',
      services: ['Citizen Portals', 'Digital Services', 'Data Management', 'Compliance Solutions'],
      color: 'bg-gray-100 text-gray-600'
    },
    {
      name: 'Healthcare',
      icon: HeartIcon,
      description: 'Recuitbot delivers secure, reliable, and HIPAA compliant IT and staffing services to healthcare organizations. From EHR integration and telehealth platforms to specialized healthcare IT professionals, we enable providers to enhance patient care through efficient, data driven systems.',
      services: ['Electronic Health Records', 'Telemedicine Platforms', 'Health Analytics', 'Patient Portals'],
      color: 'bg-pink-100 text-pink-600'
    },
    {
      name: 'Transportation',
      icon: TruckIcon,
      description: 'In the transportation sector, Recuitbot offers scalable IT solutions and workforce support to optimize logistics, fleet management, and smart mobility systems. We help businesses adapt to dynamic supply chains with innovative technology and skilled professionals to keep things moving.',
      services: ['Fleet Management', 'Route Optimization', 'Supply Chain Solutions', 'Transportation Apps'],
      color: 'bg-orange-100 text-orange-600'
    }
  ];

  const filteredIndustries = industries.filter(industry =>
    industry.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    industry.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    industry.services.some(service => 
      service.toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  return (
    <>
      <Helmet>
        <title>Industries We Serve - IT Solutions Across Multiple Sectors | Recuitbot</title>
        <meta 
          name="description" 
          content="We provide IT staffing, development, and digital marketing solutions across various industries including finance, healthcare, retail, and more." 
        />
        <meta name="keywords" content="IT solutions by industry, healthcare IT, fintech, retail technology, government IT, education technology" />
      </Helmet>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Industries We Serve
            </h1>
            <p className="text-xl text-primary-100 max-w-3xl mx-auto">
              Our expertise spans across multiple industries, providing tailored IT solutions that address the unique challenges and requirements of each sector.
            </p>
          </div>
        </div>
      </section>

      {/* Search Section */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search industries or services..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-primary-500 focus:border-primary-500"
            />
          </div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {searchTerm ? `Search Results (${filteredIndustries.length})` : 'Our Industry Expertise'}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {searchTerm 
                ? `Found ${filteredIndustries.length} industries matching "${searchTerm}"`
                : 'We understand the unique challenges and opportunities in each industry we serve.'
              }
            </p>
          </div>

          {filteredIndustries.length === 0 ? (
            <div className="text-center py-12">
              <div className="bg-white rounded-lg p-8 max-w-md mx-auto">
                <MagnifyingGlassIcon className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">No results found</h3>
                <p className="text-gray-600 mb-4">
                  Try adjusting your search terms or browse all industries.
                </p>
                <button
                  onClick={() => setSearchTerm('')}
                  className="text-primary-600 hover:text-primary-700 font-medium"
                >
                  Clear search
                </button>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredIndustries.map((industry, index) => (
                <div key={index} className="bg-white rounded-xl p-8 hover:shadow-lg transition-shadow duration-300">
                  <div className="flex items-center mb-6">
                    <div className={`p-3 rounded-lg ${industry.color}`}>
                      <industry.icon className="h-8 w-8" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 ml-4">
                      {industry.name}
                    </h3>
                  </div>
                  
                  <p className="text-gray-600 mb-6">
                    {industry.description}
                  </p>

                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-900 mb-3 uppercase tracking-wide">
                      Our Services
                    </h4>
                    <ul className="space-y-2">
                      {industry.services.map((service, serviceIndex) => (
                        <li key={serviceIndex} className="text-sm text-gray-700 flex items-center">
                          <div className="w-1.5 h-1.5 bg-primary-600 rounded-full mr-2 flex-shrink-0"></div>
                          {service}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link
                    to="/contact"
                    className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium text-sm"
                  >
                    Learn More
                    <ArrowRightIcon className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Recuitbot?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We bring industry-specific expertise and proven methodologies to every project.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Industry Expertise',
                description: 'Deep understanding of sector-specific challenges, regulations, and best practices.'
              },
              {
                title: 'Proven Track Record',
                description: 'Successful project delivery across multiple industries with measurable results.'
              },
              {
                title: 'Scalable Solutions',
                description: 'Flexible solutions that grow with your business and adapt to changing needs.'
              }
            ].map((feature, index) => (
              <div key={index} className="text-center">
                <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="w-8 h-8 bg-primary-600 rounded-full"></div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Transform Your Industry?
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Let's discuss how our industry-specific solutions can help your organization thrive.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-primary-50 transition-colors duration-200 inline-flex items-center justify-center"
            >
              Get Started
              <ArrowRightIcon className="ml-2 h-5 w-5" />
            </Link>
            <Link
              to="/services"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary-600 transition-colors duration-200"
            >
              View Our Services
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Industries;
