import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Server, Brain, Target, PenTool as Tool, Lock } from 'lucide-react';
import Button from '../components/ui/Button';

const HomePage: React.FC = () => {
  const cyberDefensePoints = [
    'Cyber Security & IT Essentials',
    'Artificial Intelligence',
    'Threat hunting, digital forensics & Incident Responses',
    'Offensive operations, Pen Testing & Red Teaming'
  ];

  const cyberResearchPoints = [
    'Essential Cyber Security Principles',
    'Data Protection & Security',
    'GRC – Global Risk & Compliance',
    'BCDR – Protecting Data, Ensuring Business Continuity & Compliance'
  ];

  const cyberOperationsPoints = {
    prevention: [
      'Strong Passwords and MFA',
      'Software Updates',
      'Firewalls (Network & WAF)',
      'Antivirus/Anti-Malware deployment',
      'Network Monitoring'
    ],
    detection: [
      'Security Information and Event Management (SIEM)',
      'Vulnerability Scanning',
      'Penetration Testing',
      'Incident Response'
    ],
    access: [
      'Principle of Least Privilege',
      'Access Control (ACLs)',
      'Data Encryption',
      'Data Loss Prevention (DLP)',
      'Security Awareness Training'
    ]
  };

  const industries = [
    'Telecommunications',
    'Healthcare',
    'Manufacturing',
    'Logistics & Transportation',
    'Information Technology',
    'Oil & Gas',
    'Consumer Electronics & Equipment Manufacturers',
    'Utilities'
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-primary-900 to-primary-800 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              The Center of AI Research & Excellence in Cyber Security
            </h1>
            <p className="text-xl md:text-2xl text-primary-100 mb-8">
              Empowering organizations with advanced cybersecurity solutions and AI-driven protection
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="primary" 
                size="lg"
                as={Link}
                to="/contact"
                className="bg-white text-primary-700 hover:bg-gray-100"
              >
                Speak to our expert
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                as={Link}
                to="/security-audit"
                className="bg-transparent border-white text-white hover:bg-primary-700"
              >
                Get a free Security Audit
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Core Services Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Cyber Defense Card */}
            <div className="bg-gray-50 rounded-xl p-8 border border-gray-200 hover:shadow-lg transition-shadow">
              <Shield className="w-12 h-12 text-primary-600 mb-6" />
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Cyber Defense</h3>
              <ul className="space-y-3">
                {cyberDefensePoints.map((point, index) => (
                  <li key={index} className="flex items-start text-gray-600">
                    <span className="mr-2">•</span>
                    {point}
                  </li>
                ))}
              </ul>
            </div>

            {/* Cyber Research Card */}
            <div className="bg-gray-50 rounded-xl p-8 border border-gray-200 hover:shadow-lg transition-shadow">
              <Brain className="w-12 h-12 text-primary-600 mb-6" />
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Cyber Research</h3>
              <ul className="space-y-3">
                {cyberResearchPoints.map((point, index) => (
                  <li key={index} className="flex items-start text-gray-600">
                    <span className="mr-2">•</span>
                    {point}
                  </li>
                ))}
              </ul>
            </div>

            {/* Cyber Operations Card */}
            <div className="bg-gray-50 rounded-xl p-8 border border-gray-200 hover:shadow-lg transition-shadow">
              <Server className="w-12 h-12 text-primary-600 mb-6" />
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Cyber Operations</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Prevention and Protection:</h4>
                  <ul className="space-y-2">
                    {cyberOperationsPoints.prevention.map((point, index) => (
                      <li key={index} className="flex items-start text-gray-600">
                        <span className="mr-2">•</span>
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Threat Detection and Response:</h4>
                  <ul className="space-y-2">
                    {cyberOperationsPoints.detection.map((point, index) => (
                      <li key={index} className="flex items-start text-gray-600">
                        <span className="mr-2">•</span>
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Access Control and Security:</h4>
                  <ul className="space-y-2">
                    {cyberOperationsPoints.access.map((point, index) => (
                      <li key={index} className="flex items-start text-gray-600">
                        <span className="mr-2">•</span>
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Served Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            Industries Served
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {industries.map((industry, index) => (
              <div key={index} className="bg-white rounded-lg p-6 text-center border border-gray-200 hover:shadow-md transition-shadow">
                <p className="text-gray-700">{industry}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            Our Partners
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-2 gap-8 items-center justify-items-center">
            <div className="w-48 h-24 bg-gray-100 rounded-lg flex items-center justify-center">
              <p className="text-gray-600 font-medium">Stormwall</p>
            </div>
            <div className="w-48 h-24 bg-gray-100 rounded-lg flex items-center justify-center">
              <p className="text-gray-600 font-medium">AWS</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-primary-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to secure your organization?
            </h2>
            <p className="text-lg text-primary-100 mb-8">
              Get in touch with our experts to discuss your cybersecurity needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="outline" 
                size="lg"
                as={Link}
                to="/contact"
                className="bg-transparent border-white text-white hover:bg-primary-700"
              >
                Contact Us
              </Button>
              <Button 
                variant="primary" 
                size="lg"
                as={Link}
                to="/security-audit"
                className="bg-white text-primary-600 hover:bg-gray-100"
              >
                Free Security Audit
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;