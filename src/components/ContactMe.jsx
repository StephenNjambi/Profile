import React from 'react';

const ContactMe = () => {
  return (
    <div className="bg-gray-100 py-12">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Contact Me</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div className="bg-white shadow-md rounded-md p-6">
            <h3 className="text-xl font-semibold mb-4">Send me a message:</h3>
            {/* Add your contact form component here */}
            <form>
              {/* Your form fields here */}
            </form>
          </div>
          {/* Contact Information */}
          <div className="bg-white shadow-md rounded-md p-6">
            <h3 className="text-xl font-semibold mb-4">Other ways to reach me:</h3>
            <ul className="space-y-2">
              <li>
                <span className="text-gray-600 font-semibold">Email:</span> your.email@example.com
              </li>
              <li>
                <span className="text-gray-600 font-semibold">Phone:</span> +1 (123) 456-7890
              </li>
              <li>
                <span className="text-gray-600 font-semibold">Social Media:</span> @yourusername
              </li>
              {/* Add more contact methods as needed */}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
