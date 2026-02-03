import React from 'react';
import { Helmet } from 'react-helmet-async';

const Terms: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Terms & Conditions | Recuitbot LLC</title>
        <meta 
          name="description" 
          content="Terms and Conditions for Recuitbot LLC - IT staffing, development, and digital marketing services." 
        />
        <meta name="keywords" content="terms and conditions, legal terms, Recuitbot LLC" />
      </Helmet>

      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Terms & Conditions</h1>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-600 mb-6">
                Welcome to the website of Recuitbot LLC ("Company," "we," "our," or "us"). These Terms and Conditions 
                ("Terms") govern your access to and use of our website, services, and communication platforms. By using 
                this website or submitting your information to us, you agree to be bound by these Terms. If you do not 
                agree to these Terms, please do not use our site or services.
              </p>

              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">1. Use of Website</h2>
              <p className="text-gray-600 mb-4">
                You agree to use this website solely for lawful purposes and in accordance with all applicable laws 
                and regulations. You are responsible for any activity conducted through your access and usage of this site. 
                You agree not to:
              </p>
              <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
                <li>Violate any applicable federal, state, or international law</li>
                <li>Attempt to gain unauthorized access to systems or data</li>
                <li>Distribute malware, viruses, or other harmful software</li>
                <li>Use our site to send unsolicited marketing or spam</li>
                <li>Impersonate another individual or company</li>
                <li>Interfere with the website's functionality or security</li>
                <li>Submit false or misleading information in job applications or service inquiries</li>
              </ul>

              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">2. Intellectual Property Rights</h2>
              <p className="text-gray-600 mb-6">
                All content on this website—including text, graphics, logos, images, and software—is the exclusive 
                property of Recuitbot LLC and is protected by applicable copyright, trademark, and intellectual property 
                laws. You may not use, reproduce, or distribute any materials from our site without express written 
                permission. Our services, methodologies, and proprietary processes are confidential and protected.
              </p>

              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">3. Service Terms</h2>
              <p className="text-gray-600 mb-4">
                Our services include IT staffing, software development, and digital marketing solutions. By engaging 
                our services, you agree to:
              </p>
              <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
                <li>Provide accurate and complete information for service delivery</li>
                <li>Comply with all applicable employment laws and regulations</li>
                <li>Respect confidentiality agreements for placed candidates</li>
                <li>Pay all fees and charges according to agreed terms</li>
                <li>Provide timely feedback and communication during project execution</li>
                <li>Maintain professional standards in all interactions</li>
              </ul>

              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">4. User Submissions</h2>
              <p className="text-gray-600 mb-4">
                Any content, feedback, resumes, or materials you submit to Recuitbot LLC through the website 
                (excluding personal information governed by our Privacy Policy) becomes our property. By submitting 
                content, you grant us a worldwide, non-exclusive, royalty-free license to use, reproduce, and display 
                such content for business purposes, including candidate placement and service delivery.
              </p>

              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">5. Third-Party Links</h2>
              <p className="text-gray-600 mb-6">
                Our website may include links to external websites not controlled by Recuitbot LLC. We are not 
                responsible for the content, terms, or privacy policies of third-party websites. Visiting those sites 
                is at your own risk. We do not endorse or guarantee the accuracy of information on linked sites.
              </p>

              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">6. Disclaimers & Limitations of Liability</h2>
              <p className="text-gray-600 mb-6">
                The information on this site is provided "as is" without warranties of any kind, either expressed or 
                implied. Recuitbot LLC does not warrant that the website will be error-free, secure, or uninterrupted; 
                that the information provided is complete, accurate, or up-to-date; or that the site or its server is 
                free of viruses or other harmful components. To the fullest extent permitted by law, Recuitbot LLC 
                shall not be liable for any indirect, incidental, special, or consequential damages arising out of or 
                related to your use of this website or services.
              </p>

              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">7. Indemnification</h2>
              <p className="text-gray-600 mb-6">
                You agree to indemnify, defend, and hold harmless Recuitbot LLC and its employees, contractors, 
                officers, and agents from any claims, liabilities, losses, damages, and expenses arising from your 
                use of the website or violation of these Terms, including any false information provided or misuse 
                of our services.
              </p>

              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">8. Termination</h2>
              <p className="text-gray-600 mb-6">
                We reserve the right to terminate or suspend access to our site or services at our sole discretion, 
                without notice, for any conduct that we determine violates these Terms or is otherwise harmful to 
                our operations or users. This includes misuse of our staffing services or providing false information.
              </p>

              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">9. Changes to Terms</h2>
              <p className="text-gray-600 mb-6">
                Recuitbot LLC may update or revise these Terms at any time. Continued use of the site after changes 
                have been posted constitutes your acceptance of the revised Terms. We recommend checking this page 
                periodically for updates, especially if you are actively using our services.
              </p>

              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">10. Governing Law</h2>
              <p className="text-gray-600 mb-6">
                These Terms are governed by the laws of the State of Wisconsin, without regard to its conflict of 
                law principles. Any disputes shall be resolved in courts located in Wisconsin, USA.
              </p>

              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">11. Contact Us</h2>
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

export default Terms;
