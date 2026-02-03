import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  ChevronDownIcon, 
  ChevronUpIcon,
  CheckCircleIcon,
  ArrowRightIcon,
  UserGroupIcon,
  CodeBracketIcon,
  ChartBarIcon
} from '@heroicons/react/24/outline';

const Services: React.FC = () => {
  const [expandedService, setExpandedService] = useState<string | null>(null);

  const services = {
    'IT Staffing': {
      icon: UserGroupIcon,
      description: 'Strategic IT staffing services that empower businesses to build and scale their technical teams with speed and precision. Whether you\'re expanding operations or launching new initiatives, our expertise ensures access to the right talent at the right time.',
      subcategories: [
        {
          name: 'Consulting',
          description: 'Our IT consulting services help you assess, plan, and implement technology strategies that align with your business goals. We provide expert guidance to optimize your workforce, streamline processes, and future-proof your operations.',
          features: [
            'Technology Assessment',
            'Digital Strategy Planning',
            'IT Architecture Design',
            'Process Optimization',
            'Risk Management'
          ]
        },
        {
          name: 'Staffing',
          description: 'We connect you with highly skilled professionals through flexible staffing models contract, contract to hire, and permanent placement tailored to your project demands and organizational culture.',
          features: [
            'Candidate Sourcing',
            'Technical Screening',
            'Cultural Fit Assessment',
            'Contract Management',
            'Ongoing Support'
          ]
        },
        {
          name: 'Training',
          description: 'Upskill your teams with customized training programs designed to meet evolving industry standards. Our training solutions ensure your workforce remains current, competitive, and prepared for tomorrow\'s challenges.',
          features: [
            'Technical Skills Training',
            'Soft Skills Development',
            'Certification Programs',
            'Mentorship Programs',
            'Custom Curriculum Design'
          ]
        }
      ]
    },
    'IT Development': {
      icon: CodeBracketIcon,
      description: 'Full-spectrum IT development services to help you innovate and accelerate digital transformation. We build scalable, secure, and user centric solutions that solve real business problems and drive measurable results.',
      subcategories: [
        {
          name: 'App Development',
          description: 'We design and develop powerful mobile and web applications that deliver seamless user experiences across platforms, boosting productivity and customer engagement.',
          features: [
            'iOS & Android Development',
            'React Native Apps',
            'Flutter Applications',
            'Progressive Web Apps',
            'App Store Optimization'
          ]
        },
        {
          name: 'Cybersecurity',
          description: 'Our cybersecurity services safeguard your digital assets with proactive threat detection, risk assessment, and end-to-end security frameworks tailored to your infrastructure.',
          features: [
            'Security Audits',
            'Penetration Testing',
            'Vulnerability Assessment',
            'Security Implementation',
            'Compliance Consulting'
          ]
        },
        {
          name: 'Technology Innovation',
          description: 'We foster innovation by leveraging emerging technologies such as AI, machine learning, and cloud solutions to create transformative products and services for your business.',
          features: [
            'AI & Machine Learning',
            'Cloud Solutions',
            'IoT Integration',
            'Blockchain Technology',
            'Emerging Tech Consulting'
          ]
        },
        {
          name: 'Data Analytics',
          description: 'Our data analytics solutions turn raw data into actionable insights, empowering smarter decision-making and improved business performance.',
          features: [
            'Data Pipeline Development',
            'Machine Learning Models',
            'Business Intelligence',
            'Real-time Dashboards',
            'Predictive Analytics'
          ]
        },
        {
          name: 'Web Development',
          description: 'From dynamic websites to complex portals, our web development team creates responsive, high-performance solutions that align with your brand and business objectives.',
          features: [
            'Dynamic Websites',
            'E-commerce Platforms',
            'Web Portals',
            'API Development',
            'Performance Optimization'
          ]
        },
        {
          name: 'Mobile Applications',
          description: 'We develop intuitive and robust mobile apps for iOS and Android platforms, engineered to deliver top notch performance and user satisfaction.',
          features: [
            'Native iOS Apps',
            'Native Android Apps',
            'Cross-platform Solutions',
            'App Store Optimization',
            'Performance Tuning'
          ]
        },
        {
          name: 'Web Design',
          description: 'Our creative team blends aesthetics with functionality to deliver visually compelling and user-friendly web designs that strengthen your brand identity and user engagement.',
          features: [
            'UI/UX Design',
            'Responsive Web Design',
            'Mobile-First Design',
            'Prototyping',
            'Design Systems'
          ]
        }
      ]
    },
    'Digital Marketing': {
      icon: ChartBarIcon,
      description: 'Digital marketing solutions crafted to amplify your online presence, attract targeted audiences, and convert interest into business success. We take a strategic approach to build brand recognition, boost traffic, and increase ROI.',
      subcategories: [
        {
          name: 'Strategy Development',
          description: 'Comprehensive digital marketing strategies tailored to your business goals and target audience.',
          features: [
            'Market Research',
            'Competitor Analysis',
            'Content Strategy',
            'Channel Planning',
            'ROI Optimization'
          ]
        },
        {
          name: 'SEO Services',
          description: 'Search engine optimization to improve your visibility and drive organic traffic to your website.',
          features: [
            'Keyword Research',
            'On-Page Optimization',
            'Technical SEO',
            'Link Building',
            'Local SEO'
          ]
        },
        {
          name: 'Campaign Management',
          description: 'End-to-end management of your digital marketing campaigns across multiple channels.',
          features: [
            'Social Media Marketing',
            'Pay-Per-Click Advertising',
            'Email Marketing',
            'Content Marketing',
            'Performance Tracking'
          ]
        }
      ]
    }
  };

  const toggleService = (serviceName: string) => {
    setExpandedService(expandedService === serviceName ? null : serviceName);
  };

  return (
    <>
      <Helmet>
        <title>Our Solutions - IT Staffing, Development & Digital Marketing | Recuitbot</title>
        <meta 
          name="description" 
          content="Explore our solutions: IT Staffing, IT Development, and Digital Marketing. Expert, outcome-driven services tailored to your business needs." 
        />
        <meta name="keywords" content="IT solutions, IT staffing, IT development, digital marketing, technology consulting" />
      </Helmet>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Our Solutions
            </h1>
            <p className="text-xl text-primary-100 max-w-3xl mx-auto">
              We provide comprehensive technology solutions across three key areas to help your business thrive in the digital age.
            </p>
          </div>
        </div>
      </section>

      {/* Our Solutions Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Comprehensive Technology Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our expertise spans across IT Staffing, IT Development, and Digital Marketing, providing end to end solutions for your business needs.
            </p>
          </div>

          <div className="space-y-8">
            {Object.entries(services).map(([serviceName, serviceData]) => (
              <div key={serviceName} className="bg-gray-50 rounded-xl overflow-hidden">
                <button
                  onClick={() => toggleService(serviceName)}
                  className="w-full p-8 text-left hover:bg-gray-100 transition-colors duration-200"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="bg-primary-100 p-3 rounded-lg mr-6">
                        <serviceData.icon className="h-8 w-8 text-primary-600" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">
                          {serviceName}
                        </h3>
                        <p className="text-gray-600">
                          {serviceData.description}
                        </p>
                      </div>
                    </div>
                    {expandedService === serviceName ? (
                      <ChevronUpIcon className="h-6 w-6 text-gray-500" />
                    ) : (
                      <ChevronDownIcon className="h-6 w-6 text-gray-500" />
                    )}
                  </div>
                </button>

                {expandedService === serviceName && (
                  <div className="px-8 pb-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {serviceData.subcategories.map((subcategory, index) => (
                        <div key={index} className="bg-white rounded-lg p-6 shadow-sm">
                          <h4 className="text-lg font-semibold text-gray-900 mb-3">
                            {subcategory.name}
                          </h4>
                          <p className="text-gray-600 mb-4 text-sm">
                            {subcategory.description}
                          </p>
                          <ul className="space-y-2">
                            {subcategory.features.map((feature, featureIndex) => (
                              <li key={featureIndex} className="flex items-center text-sm text-gray-700">
                                <CheckCircleIcon className="h-4 w-4 text-primary-600 mr-2 flex-shrink-0" />
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We follow a proven methodology to ensure successful project delivery and client satisfaction.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Discovery',
                description: 'We start by understanding your business goals, challenges, and requirements.'
              },
              {
                step: '02',
                title: 'Planning',
                description: 'Our team creates a detailed project plan with timelines and milestones.'
              },
              {
                step: '03',
                title: 'Execution',
                description: 'We implement the solution with regular updates and quality checks.'
              },
              {
                step: '04',
                title: 'Support',
                description: 'Ongoing support and maintenance to ensure longterm success.'
              }
            ].map((step, index) => (
              <div key={index} className="text-center">
                <div className="bg-primary-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-600">
                  {step.description}
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
            Ready to Get Started?
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Let's discuss your project requirements and how we can help you achieve your goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-primary-50 transition-colors duration-200 inline-flex items-center justify-center"
            >
              Get a Quote
              <ArrowRightIcon className="ml-2 h-5 w-5" />
            </Link>
            <Link
              to="/industries"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary-600 transition-colors duration-200"
            >
              View Industries
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
