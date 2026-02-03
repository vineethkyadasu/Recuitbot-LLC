import React from 'react';
import { Helmet } from 'react-helmet-async';

const Privacy: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Privacy Policy | Recuitbot LLC</title>
        <meta 
          name="description" 
          content="Privacy Policy for Recuitbot LLC - IT staffing, development, and digital marketing services." 
        />
        <meta name="keywords" content="privacy policy, data protection, Recuitbot LLC" />
      </Helmet>

      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Privacy Policy</h1>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-600 mb-6">
                At Recuitbot LLC, we are committed to protecting your privacy and safeguarding your personal information. 
                This Privacy Policy outlines how we collect, use, store, and share information obtained through our website, 
                services, and communication campaigns. By using our services or submitting your information, you consent 
                to the practices described in this policy.
              </p>

              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">1. Information We Collect</h2>
              <p className="text-gray-600 mb-4">
                We may collect the following types of personal and usage data through our website forms, communications, 
                and service engagements:
              </p>
              <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
                <li><strong>Contact Information:</strong> Full name, email address, phone number, company name, job title, and mailing address.</li>
                <li><strong>Professional Information:</strong> Work experience, skills, qualifications, resume/CV data, and career preferences.</li>
                <li><strong>Business Information:</strong> Company details, project requirements, staffing needs, and service inquiries.</li>
                <li><strong>Usage Data:</strong> IP address, browser type, time of visit, pages visited, and referring URL.</li>
                <li><strong>Communication Data:</strong> Information provided through contact forms, email communications, and phone consultations.</li>
              </ul>

              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">2. How We Use Your Information</h2>
              <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
                <li>To respond to your inquiries and provide IT staffing, development, and digital marketing services</li>
                <li>To match qualified candidates with appropriate job opportunities</li>
                <li>To send service updates, project notifications, and business communications</li>
                <li>To improve our website's performance and user experience</li>
                <li>To analyze service effectiveness and client satisfaction</li>
                <li>To comply with legal obligations and protect our business interests</li>
                <li>To process payments and manage client relationships</li>
              </ul>

              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">3. How We Share Your Data</h2>
              <p className="text-gray-600 mb-4">
                We do not sell your personal information. We may share your data with:
              </p>
              <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
                <li><strong>Client Companies:</strong> For IT staffing placements, we share candidate information with potential employers</li>
                <li><strong>Service Providers:</strong> Partners who help us operate our website, deliver services, or process communications</li>
                <li><strong>Legal Authorities:</strong> Where required by law, subpoena, or to protect safety and integrity</li>
                <li><strong>Business Partners:</strong> Trusted partners involved in project delivery or service enhancement</li>
              </ul>

              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">4. Data Storage & Protection</h2>
              <p className="text-gray-600 mb-6">
                We maintain appropriate technical and organizational safeguards to secure your data against unauthorized 
                access, alteration, disclosure, or destruction. Your information is stored only as long as necessary to 
                fulfill the purposes outlined in this policy or as required by law.
              </p>

              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">5. Your Choices & Rights</h2>
              <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
                <li>Request access or correction to your personal data</li>
                <li>Request deletion of inaccurate or outdated information</li>
                <li>Withdraw consent for data processing</li>
                <li>Unsubscribe from marketing communications</li>
                <li>Opt out of candidate placement services</li>
              </ul>

              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">6. Cookies and Tracking Technologies</h2>
              <p className="text-gray-600 mb-6">
                We use cookies and similar tracking technologies to enhance user experience, analyze website traffic, 
                and improve our services. You may disable cookies in your browser settings, though this may affect 
                website functionality.
              </p>

              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">7. Links to Other Websites</h2>
              <p className="text-gray-600 mb-6">
                Our website may contain links to third-party websites. We are not responsible for the privacy practices 
                or content of these external sites. We encourage you to review their privacy policies before providing 
                any personal information.
              </p>

              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">8. Updates to This Policy</h2>
              <p className="text-gray-600 mb-6">
                This Privacy Policy may be updated periodically to reflect changes in our practices or legal requirements. 
                We will notify you of any material changes by posting the updated policy on our website. Your continued 
                use of our services after such changes constitutes acceptance of the updated policy.
              </p>

              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">9. Contact Information</h2>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="text-gray-600 mb-2"><strong>Recuitbot LLC</strong></p>
                <p className="text-gray-600 mb-2">237 South Street, Suite #108</p>
                <p className="text-gray-600 mb-2">Waukesha, WI 53186</p>
                <p className="text-gray-600 mb-2">Phone: <a href="tel:+12623361142" className="text-primary-600 hover:text-primary-700">(262) 336-1142</a></p>
                <p className="text-gray-600 mb-2">Email: <a href="mailto:team@recuitbot.com" className="text-primary-600 hover:text-primary-700">team@recuitbot.com</a></p>
                <p className="text-gray-600">Website: <a href="https://recuitbot.com" className="text-primary-600 hover:text-primary-700">https://recuitbot.com</a></p>
              </div>

              <p className="text-gray-500 text-sm mt-8">
                Last updated: {new Date().toLocaleDateString()}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Privacy;
