import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  CheckCircleIcon, 
  ArrowRightIcon,
  UserGroupIcon,
  CodeBracketIcon,
  ChartBarIcon,
  ShieldCheckIcon,
  AcademicCapIcon
} from '@heroicons/react/24/outline';

const HeroBackgroundSlider: React.FC = () => {
  const images = [
    { src: '/images/staff.jpeg', alt: 'IT Staffing' },
    { src: '/images/development1.jpeg', alt: 'IT Development' },
    { src: '/images/digital1.jpg', alt: 'Digital Marketing' }
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(intervalId);
  }, [images.length]);

  return (
    <div className="absolute inset-0 z-0">
      {images.map((image, index) => (
        <img
          key={image.src}
          src={image.src}
          alt={image.alt}
          className={`absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-1000 ${index === currentIndex ? 'opacity-100' : 'opacity-0'}`}
          loading={index === 0 ? 'eager' : 'lazy'}
          decoding="async"
          sizes="100vw"
          // will-change hint to help with smoother opacity transitions
          style={{ willChange: 'opacity' }}
          // fetchpriority helps the first hero image load sharper/faster
          {...(index === 0 ? { fetchpriority: 'high' as any } : {})}
        />
      ))}
      
    </div>
  );
};

const Home: React.FC = () => {
  const valuePropositions = [
    {
      icon: UserGroupIcon,
      title: 'IT Staffing',
      description: 'Strategic IT staffing services that empower businesses to build and scale their technical teams with speed and precision. Whether you\'re expanding operations or launching new initiatives, our expertise ensures access to the right talent at the right time.',
      features: ['Consulting', 'Staffing', 'Training']
    },
    {
      icon: CodeBracketIcon,
      title: 'IT Development',
      description: 'Full-spectrum IT development services to help you innovate and accelerate digital transformation. We build scalable, secure, and user centric solutions that solve real business problems and drive measurable results.',
      features: ['App Development', 'Cybersecurity', 'Data Analytics', 'Web & Mobile Design']
    },
    {
      icon: ChartBarIcon,
      title: 'Digital Marketing',
      description: 'Digital marketing solutions crafted to amplify your online presence, attract targeted audiences, and convert interest into business success. We take a strategic approach to build brand recognition, boost traffic, and increase ROI.',
      features: ['Strategy Development', 'SEO Services', 'Campaign Management']
    }
  ];

  const industries = [
    { title: 'Information Technology', icon: CodeBracketIcon },
    { title: 'Finance & Insurance', icon: ChartBarIcon },
    { title: 'Retail', icon: CheckCircleIcon },
    { title: 'Telecommunication', icon: UserGroupIcon },
    { title: 'Network & Security', icon: ShieldCheckIcon },
    { title: 'Education', icon: AcademicCapIcon },
    { title: 'State & Federal Government', icon: ShieldCheckIcon },
    { title: 'Healthcare', icon: UserGroupIcon },
    { title: 'Transportation', icon: ChartBarIcon }
  ];

  // Split industries into two rows for a distinct two-row layout
  const industriesFirstRow = industries.slice(0, 5);
  const industriesSecondRow = industries.slice(5);

  const industryGradients = [
    'from-indigo-500 to-sky-500',
    'from-fuchsia-500 to-pink-500',
    'from-emerald-500 to-teal-600',
    'from-amber-500 to-orange-600',
    'from-rose-500 to-red-600',
    'from-violet-500 to-purple-600',
    'from-cyan-500 to-blue-600',
    'from-lime-500 to-green-600',
    'from-slate-500 to-gray-700'
  ];

  return (
    <>
      <Helmet>
        <title>Recuitbot - IT Staffing, Development & Digital Marketing Solutions</title>
        <meta 
          name="description" 
          content="Leading provider of IT staffing, development, and digital marketing services. Connect with top talent and grow your business with our expert solutions." 
        />
        <meta name="keywords" content="IT staffing, software development, digital marketing, talent acquisition, technology solutions" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative text-white">
        <HeroBackgroundSlider />
        {/* Dark overlay to improve text readability over images */}
        <div className="absolute inset-0 bg-black/50 z-[1]" />
        <div className="relative z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
            <h1 className="text-5xl md:text-7xl font-extrabold leading-tight tracking-tight mb-6 drop-shadow-[0_4px_12px_rgba(0,0,0,0.6)]">
              Strategic IT Solutions for
              <span className="block text-white md:bg-clip-text md:text-transparent md:bg-gradient-to-r from-primary-200 via-primary-400 to-primary-600">
                Modern Businesses
              </span>
            </h1>
            <p className="text-base md:text-lg text-white/90 leading-relaxed mb-8 max-w-4xl mx-auto drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)]">
              At Recuitbot, we believe that a strategic staffing plan is essential for driving your organization's vision and objectives forward. Our approach ensures optimal utilization of human resources by aligning the right talent with the right opportunities, precisely when needed.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-primary-50 active:scale-[0.99] transition-all duration-200 inline-flex items-center justify-center"
              >
                Get Started Today
                <ArrowRightIcon className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/services"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary-600 active:scale-[0.99] transition-all duration-200"
              >
                Explore Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Value Propositions */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900 mb-4">
              Our Core Services
            </h2>
            <div className="flex justify-center mb-5">
              <span className="h-1 w-24 bg-gradient-to-r from-primary-500 via-primary-600 to-primary-700 rounded-full" />
            </div>
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto">
              We provide comprehensive technology solutions across three key areas to drive your business forward.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {valuePropositions.map((proposition, index) => (
              <div
                key={index}
                className="group relative rounded-2xl p-[1px] bg-gradient-to-b from-gray-200 to-gray-100 hover:from-primary-200/60 hover:to-primary-100/60 transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="bg-white rounded-2xl p-8 h-full shadow-md hover:shadow-xl ring-1 ring-gray-100 hover:ring-primary-200 transition-all duration-300">
                  <div className="flex items-center mb-6">
                    <div className="bg-primary-100 group-hover:bg-primary-600 p-3 rounded-xl transition-colors duration-300">
                      <proposition.icon className="h-8 w-8 text-primary-600 group-hover:text-white transition-colors duration-300" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 ml-4 group-hover:text-primary-700 transition-colors duration-300">
                      {proposition.title}
                    </h3>
                  </div>
                  <p className="text-base text-gray-600 mb-6 group-hover:text-gray-700 transition-colors duration-300">
                    {proposition.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {proposition.features.map((feature, featureIndex) => (
                      <span
                        key={featureIndex}
                        className="inline-flex items-center px-3 py-1 rounded-full text-sm border border-gray-200 text-gray-700 bg-gray-50 group-hover:border-primary-200 group-hover:text-primary-700 group-hover:bg-primary-50 transition-colors duration-300"
                      >
                        <CheckCircleIcon className="h-4 w-4 mr-1 text-primary-600" />
                        {feature}
                      </span>
                    ))}
                  </div>
                  <div className="mt-8">
                    <Link
                      to="/services"
                      className="inline-flex items-center text-primary-700 hover:text-primary-800 font-semibold"
                    >
                      Learn more
                      <ArrowRightIcon className="h-5 w-5 ml-2" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Preview */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900 mb-4">
              Industries We Serve
            </h2>
            <div className="flex justify-center mb-5">
              <span className="h-1 w-24 bg-gradient-to-r from-primary-500 via-primary-600 to-primary-700 rounded-full" />
            </div>
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto">
              Our expertise spans across multiple industries, providing tailored solutions for each sector's unique challenges.
            </p>
          </div>

          {/* Row 1 - 5 items, gradient border style */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-8 mb-8">
            {industriesFirstRow.map((industry, index) => (
              <div key={index} className={`rounded-2xl p-[1px] bg-gradient-to-br ${industryGradients[index % industryGradients.length]} transition-all duration-300 hover:-translate-y-1`}>
                <div className="bg-white rounded-2xl p-6 text-center h-full shadow-sm hover:shadow-xl transition-shadow duration-300">
                  <div className={`mx-auto mb-3 w-12 h-12 rounded-xl text-white flex items-center justify-center bg-gradient-to-br ${industryGradients[index % industryGradients.length]}`}>
                    {React.createElement(industry.icon, { className: 'h-6 w-6' })}
                  </div>
                  <span className="text-gray-900 font-medium text-sm md:text-base">{industry.title}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Row 2 - 4 items, outlined tile style */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mb-12">
            {industriesSecondRow.map((industry, index) => (
              <div
                key={index}
                className="group rounded-2xl border border-gray-200 bg-white p-6 text-center hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
              >
                <div
                  className={`mx-auto mb-4 w-14 h-14 rounded-2xl text-white flex items-center justify-center bg-gradient-to-br ${industryGradients[(index + industriesFirstRow.length) % industryGradients.length]}`}
                >
                  {React.createElement(industry.icon, { className: 'h-7 w-7' })}
                </div>
                <span className="block text-gray-900 font-semibold text-sm md:text-base group-hover:text-primary-700">
                  {industry.title}
                </span>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              to="/industries"
              className="bg-primary-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors duration-200 inline-flex items-center"
            >
              View All Industries
              <ArrowRightIcon className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      

      {/* CTA Section */}
      <section className="py-20 bg-primary-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Let's discuss how our IT staffing, development, and digital marketing services can help you achieve your goals.
          </p>
          <Link
            to="/contact"
            className="bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-primary-50 transition-colors duration-200 inline-flex items-center"
          >
            Contact Us Today
            <ArrowRightIcon className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </>
  );
};

export default Home;
