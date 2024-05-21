import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function About() {
  return (
    <>
      <Navbar />
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div className="mt-28 items-center justify-center text-center">
          <h1 className="text-2xl md:text-4xl">
            About <span className="text-pink-500">ChowdhuryCookaries</span>
          </h1>
          <p className="mt-10">
            Welcome to ChowdhuryCookaries! We are a dedicated team passionate about bringing the best cooking appliances to your kitchen. Our journey started in 1992, and since then, we have been committed to providing innovative and reliable kitchen solutions to our customers.
          </p>
        </div>
        <div className="mt-12 text-center">
          <h2 className="text-xl font-bold mb-4">Our Mission and Values</h2>
          <p className="mb-4">
            Our mission is to empower home chefs and cooking enthusiasts with top-quality kitchen appliances that make cooking a delightful experience. We believe in innovation, quality, and customer satisfaction.
          </p>
          <p className="mb-4">
            Our values include:
          </p>
          <ul className="list-disc list-inside mb-6">
            <li>Innovation</li>
            <li>Quality</li>
            <li>Customer Satisfaction</li>
            <li>Sustainability</li>
            <li>Community</li>
          </ul>
        </div>
        <div className="mt-12 text-center">
          <h2 className="text-xl font-bold mb-4">Our Team</h2>
          <p className="mb-4">
            Meet the passionate team behind ChowdhuryCookaries. Our team consists of experienced professionals dedicated to bringing you the best kitchen appliances and ensuring your satisfaction.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-white shadow-md rounded-lg overflow-hidden">
              <div className="w-full h-96">
                <img src="/images/photo_2024-05-21_11-07-44.jpg" alt="Team Member 1" className="w-full h-full object-cover" />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-bold">Neloy Pramanik Supto</h3>
                <p className="text-gray-700">CEO & Founder</p>
              </div>
            </div>
            <div className="bg-white shadow-md rounded-lg overflow-hidden">
              <div className="w-full h-96">
                <img src="/images/raj.jpg" alt="Team Member 2" className="w-full h-full object-cover" />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-bold">Rajat Chowdhury</h3>
                <p className="text-gray-700">Chief Technology Officer</p>
              </div>
            </div>
            <div className="bg-white shadow-md rounded-lg overflow-hidden">
              <div className="w-full h-96">
                <img src="/images/sa.jpg" alt="Team Member 3" className="w-full h-full object-cover" />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-bold">Sazal Das Pritam</h3>
                <p className="text-gray-700">Head of Marketing</p>
              </div>
            </div>
            <div className="bg-white shadow-md rounded-lg overflow-hidden">
              <div className="w-full h-96">
                <img src="/images/saj.jpg" alt="Team Member 4" className="w-full h-full object-cover" />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-bold">Sajib Biswas</h3>
                <p className="text-gray-700">Chief Financial Officer</p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 text-center">
          <Link to="/contact">
            <button className="mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300">
              Contact Us
            </button>
          </Link>
        </div>
      </div>
      <Footer/>
    </>
  );
}

export default About;
