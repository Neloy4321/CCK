import React, { useState } from 'react';
import { Link } from "react-router-dom";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, message } = formData;

    try {
      const response = await fetch('http://localhost:4001/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, email, message })
      });

      const result = await response.json();
      if (response.ok) {
        alert('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' }); // Clear form
      } else {
        alert('Error: ' + result.msg);
      }
    } catch (error) {
      alert('Error: ' + error.message);
    }
  };

  return (
    <>
      <Navbar />
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div className="mt-28 items-center justify-center text-center">
          <h1 className="text-2xl md:text-4xl">
            Get in Touch with <span className="text-pink-500">ChowdhuryCookaries</span>
          </h1>
          <p className="mt-10">
            We're here to help! Whether you have a question about our products, need assistance with your order, or just want to give feedback, we're all ears. Fill out the form below, and our team will get back to you as soon as possible.
          </p>
        </div>
        <div className="mt-12 flex justify-center">
          <form className="w-full max-w-lg" onSubmit={handleSubmit}>
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                Name
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                required
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                Email
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                required
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
                Message
              </label>
              <textarea
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                required
              ></textarea>
            </div>
            <div className="flex items-center justify-between">
              <button
                className="bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
        <div className="mt-12 text-center">
          <h2 className="text-xl font-bold mb-4">Contact Information</h2>
          <p className="mb-2">Email: support@chowdhurycookaries.com</p>
          <p className="mb-2">Phone: 01795302949</p>
          <p>Address: 123 Cook Street, Dhaka City, CCK 12345</p>
        </div>
        <div className="mt-12 flex justify-center">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.0860362094524!2d144.95605431531876!3d-37.8136279797519!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0x5045675218ce6e0!2sVictoria%2C%20Australia!5e0!3m2!1sen!2sus!4v1633007612959!5m2!1sen!2sus"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            title="Google Map"
          ></iframe>
        </div>
      </div>
      <Footer/>
    </>
  );
}

export default Contact;