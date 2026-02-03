import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  ArrowRightIcon,
  CheckCircleIcon,
  UserGroupIcon,
  CodeBracketIcon,
  ChartBarIcon,
  LightBulbIcon,
  HeartIcon,
  ShieldCheckIcon
} from '@heroicons/react/24/outline';

const About: React.FC = () => {
  const values = [
    {
      icon: LightBulbIcon,
      title: 'Innovation',
      description: 'We embrace cutting-edge technologies and innovative approaches to solve complex business challenges.'
    },
    {
      icon: HeartIcon,
      title: 'Integrity',
      description: 'We maintain the highest ethical standards and build trust through transparent communication and honest practices.'
    },
    {
      icon: UserGroupIcon,
      title: 'Collaboration',
      description: 'We believe in the power of teamwork and work closely with our clients to achieve shared success.'
    },
    {
      icon: ShieldCheckIcon,
      title: 'Quality',
      description: 'We are committed to delivering exceptional results that exceed expectations and drive measurable value.'
    }
  ];

  const stats = [
    { number: '500+', label: 'Projects Completed' },
    { number: '200+', label: 'Happy Clients' },
    { number: '50+', label: 'Team Members' },
    { number: '5+', label: 'Years Experience' }
  ];


  return (
    <>
      <Helmet>
        <title>About Us - Our Mission & Vision | Recuitbot</title>
        <meta 
          name="description" 
          content="Learn about Recuitbot's mission to provide exceptional IT staffing, development, and digital marketing solutions."
        />
        <meta name="keywords" content="about recuitbot, company mission, IT staffing company, technology solutions" />
      </Helmet>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              About Recuitbot LLC
            </h1>
            <p className="text-xl text-primary-100 max-w-3xl mx-auto">
              We are a leading technology solutions provider dedicated to helping businesses thrive in the digital age through innovative IT staffing, development, and digital marketing services.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Our Mission
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Our mission at Recuitbot LLC is to provide adaptable and high-quality IT and staffing solutions that empower businesses to be more agile, competitive, and efficient. We are dedicated to understanding each client's unique needs and delivering innovative services that enhance operational performance while fostering growth and opportunity for both clients and employees.
            </p>
            <p className="text-lg text-gray-600">
              Finding the right staffing agency for your company can often feel overwhelming but not when you partner with Recuitbot LLC. We simplify the entire process by offering strategic workforce solutions that provide flexibility, reduce administrative burdens, and connect you with top tier talent.
            </p>
            </div>
            <div className="bg-primary-50 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Our Vision
              </h3>
              <p className="text-lg text-gray-600">
                Our vision is to become a leading force in talent and digital transformation by combining the power of people, technology, and strategy. We strive to set the benchmark in recruitment and IT services through excellence, integrity, and continuous innovation ultimately helping our clients build resilient, future-ready businesses.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Impact
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Numbers that reflect our commitment to excellence and client success.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-primary-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-lg text-gray-600">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we do and shape our company culture.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="h-8 w-8 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What We Do
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our comprehensive suite of services addresses every aspect of your technology needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: UserGroupIcon,
                title: 'IT Staffing',
                description: 'Connect with top tier IT professionals through our extensive network and rigorous vetting process.',
                features: ['Expert Consulting', 'Talent Placement', 'Training Programs']
              },
              {
                icon: CodeBracketIcon,
                title: 'IT Development',
                description: 'Custom software solutions and development services tailored to your specific business requirements.',
                features: ['App Development', 'Cybersecurity', 'Data Analytics', 'Web & Mobile Design']
              },
              {
                icon: ChartBarIcon,
                title: 'Digital Marketing',
                description: 'Strategic digital marketing campaigns and SEO optimization to boost your online presence.',
                features: ['Strategy Development', 'SEO Services', 'Campaign Management']
              }
            ].map((service, index) => (
              <div key={index} className="bg-white rounded-xl p-8 hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center mb-6">
                  <div className="bg-primary-100 p-3 rounded-lg">
                    <service.icon className="h-8 w-8 text-primary-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 ml-4">
                    {service.title}
                  </h3>
                </div>
                <p className="text-gray-600 mb-6">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-700">
                      <CheckCircleIcon className="h-5 w-5 text-primary-600 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      

      {/* CTA Section */}
      <section className="py-20 bg-primary-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Work With Us?
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Let's discuss how our team can help you achieve your technology goals and drive business success.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-primary-50 transition-colors duration-200 inline-flex items-center justify-center"
            >
              Get in Touch
              <ArrowRightIcon className="ml-2 h-5 w-5" />
            </Link>
            <Link
              to="/services"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary-600 transition-colors duration-200"
            >
              Explore Services
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
