import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Building2, Hammer, HardHat, Phone, Mail, MapPin, ArrowRight } from 'lucide-react';

const LandingPage = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  
  const handleLogin = () => {
    try {
      setIsLoading(true);
      setError(null);
      navigate('/dashboard');
    } catch (err) {
      console.error('Navigation error:', err);
      setError(err.message);
    }
  };

  const services = [
    {
      title: 'Commercial Construction',
      description: 'State-of-the-art commercial buildings and office spaces',
      icon: <Building2 className="h-8 w-8 text-blue-600" />
    },
    {
      title: 'Residential Projects',
      description: 'Custom homes and residential developments',
      icon: <Hammer className="h-8 w-8 text-blue-600" />
    },
    {
      title: 'Renovation & Remodeling',
      description: 'Transform existing spaces with modern designs',
      icon: <HardHat className="h-8 w-8 text-blue-600" />
    }
  ];

  const projects = [
    {
      title: 'High-Rise Office Building',
      location: 'Downtown Business District',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
    },
    {
      title: 'Waterfront Residential Complex',
      location: 'Harbor View District',
      image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
    },
    {
      title: 'Shopping Mall Renovation',
      location: 'Central Business Park',
      image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-gray-900">
        <div className="absolute inset-0">
          <img
            className="w-full h-full object-cover opacity-30"
            src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
            alt="Construction site"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold text-white sm:text-5xl md:text-6xl">
              Building Excellence in Construction
            </h1>
            <p className="mt-3 max-w-md mx-auto text-base text-gray-300 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
              Professional construction services with a focus on quality, safety, and innovation
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={handleLogin}
                disabled={isLoading}
                className={`inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white 
                  ${isLoading ? 'bg-blue-400' : 'bg-blue-600 hover:bg-blue-700'} 
                  md:py-4 md:text-lg md:px-10`}
              >
                {isLoading ? 'Loading...' : 'Client Portal'}
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-blue-700 bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10">
                Contact Us
                <Phone className="ml-2 h-5 w-5" />
              </button>
            </div>
            {error && <p className="mt-2 text-red-500">{error}</p>}
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Our Services
            </h2>
            <p className="mt-4 text-lg text-gray-500">
              Comprehensive construction solutions for every project
            </p>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {services.map((service, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-100 mx-auto">
                  {service.icon}
                </div>
                <h3 className="mt-4 text-lg font-medium text-gray-900 text-center">{service.title}</h3>
                <p className="mt-2 text-base text-gray-500 text-center">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Featured Projects */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Featured Projects
            </h2>
            <p className="mt-4 text-lg text-gray-500">
              Showcasing our most impressive work
            </p>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {projects.map((project, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                <img
                  className="w-full h-48 object-cover"
                  src={project.image}
                  alt={project.title}
                />
                <div className="p-6">
                  <h3 className="text-lg font-medium text-gray-900">{project.title}</h3>
                  <p className="mt-2 text-sm text-gray-500">{project.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Get in Touch
            </h2>
            <p className="mt-4 text-lg text-gray-500">
              Ready to start your next construction project?
            </p>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            <div className="flex items-center justify-center">
              <Phone className="h-6 w-6 text-blue-600" />
              <span className="ml-3 text-base text-gray-500">(555) 123-4567</span>
            </div>
            <div className="flex items-center justify-center">
              <Mail className="h-6 w-6 text-blue-600" />
              <span className="ml-3 text-base text-gray-500">contact@tomsconstruction.com</span>
            </div>
            <div className="flex items-center justify-center">
              <MapPin className="h-6 w-6 text-blue-600" />
              <span className="ml-3 text-base text-gray-500">123 Construction Ave, City, State</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;