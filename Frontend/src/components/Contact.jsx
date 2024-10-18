import React from 'react';

const Contact = () => {
  return (
    <div className="min-h-screen bg-cyan-100 py-10 px-5">
      <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-3xl font-bold text-cyan-700 mb-6">Contact Us</h2>
        <p className="text-gray-600 mb-4">
          Have any questions, concerns, or feedback? We're here to help. Reach out to us using the form below, and we'll get back to you as soon as possible.
        </p>
        <form className="space-y-6">
          <div>
            <label className="block text-sm text-gray-700">Your Name</label>
            <input
              type="text"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
              placeholder="Enter your name"
              required
            />
          </div>
          <div>
            <label className="block text-sm text-gray-700">Email</label>
            <input
              type="email"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
              placeholder="Enter your email"
              required
            />
          </div>
          <div>
            <label className="block text-sm text-gray-700">Message</label>
            <textarea
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
              rows="4"
              placeholder="Your message here"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-cyan-600 text-white py-3 rounded-md hover:bg-cyan-700 transition-colors duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
