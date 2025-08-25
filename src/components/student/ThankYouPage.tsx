import React from "react";
import { CheckCircle, Home, Mail, Phone } from "lucide-react";

const ThankYouPage = () => {
  const handleBackHome = () => {
    window.location.href = "/";
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4 font-bangla">
      <div className="max-w-md w-full bg-white rounded-xl shadow-lg p-6 lg:p-8 text-center">
        {/* Success Icon */}
        <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle className="w-10 h-10 text-white" />
        </div>

        {/* Thank You Message */}
        <h1 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
          Thank You!
        </h1>

        <p className="text-gray-600 text-base lg:text-lg mb-6 leading-relaxed">
          Your documents have been successfully uploaded. Our team will contact
          you soon.
        </p>

        {/* Status Info */}
        <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
          <div className="flex items-center justify-center mb-2">
            <CheckCircle className="w-5 h-5 text-green-600 mr-2" />
            <span className="text-green-800 font-medium">Completed</span>
          </div>
          <p className="text-green-700 text-sm">
            Your application is under process.
          </p>
        </div>

        {/* Next Steps */}
        <div className="text-left mb-6">
          <h3 className="font-semibold text-gray-900 mb-3">Next Steps:</h3>
          <ul className="space-y-2 text-sm text-gray-600">
            <li className="flex items-start">
              <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
              Our team will verify your documents within 24 hours.
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
              You will be contacted if additional information is required.
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
              You will receive updates regarding the application process.
            </li>
          </ul>
        </div>

        {/* Action Buttons */}
        <div className="space-y-3">
          <button
            onClick={handleBackHome}
            className="w-full bg-primary text-white py-3 rounded-lg hover:bg-primary/90 font-medium transition-colors flex items-center justify-center"
          >
            <Home className="w-4 h-4 mr-2" />
            Return to Homepage
          </button>
        </div>

        {/* Contact Info */}
        <div className="mt-6 pt-6 border-t border-gray-200">
          <p className="text-sm text-gray-600 mb-3">
            Contact us if you have any questions:
          </p>
          <div className="flex flex-col sm:flex-row gap-2 text-sm">
            <a
              href="mailto:support@beglbd.com"
              className="flex items-center justify-center text-primary hover:underline"
            >
              <Mail className="w-4 h-4 mr-1" />
              support@beglbd.com
            </a>
            <a
              href="tel:+880 1712-345678"
              className="flex items-center justify-center text-primary hover:underline"
            >
              <Phone className="w-4 h-4 mr-1" />
              +880 1712-345678
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThankYouPage;
