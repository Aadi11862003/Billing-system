import React from 'react';
import { Link } from 'react-router-dom';

const SignupCard = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-200" style={{ backgroundColor: '#e0e0e0' }}>
      <div className="max-w-md w-full p-8 rounded-[2.12rem] shadow-custom-top-bottom font-bold-roboto-condensed" >
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Boardify</h2>
        <form>
          <div className="mb-4">
            <label htmlFor="first-name" className="block text-gray-700">Name:</label>
            <input
              type="text"
              id="first-name"
              className="w-full px-4 py-2 mt-2 bg-gray-300 border border-gray-400 rounded-[2.12rem] shadow-inner focus:outline-none focus:ring-2 focus:ring-gray-500 focus:bg-white"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700">Email:</label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-2 mt-2 bg-gray-300 border border-gray-400 rounded-[2.12rem] shadow-inner focus:outline-none focus:ring-2 focus:ring-gray-500 focus:bg-white"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700">Password:</label>
            <input
              type="password"
              id="password"
              className="w-full px-4 py-2 mt-2 bg-gray-300 border border-gray-400 rounded-[2.12rem] shadow-inner focus:outline-none focus:ring-2 focus:ring-gray-500 focus:bg-white"
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="pet-name" className="block text-gray-700">Pet Name (if you forget your password):</label>
            <input
              type="text"
              id="pet-name"
              className="w-full px-4 py-2 mt-2 bg-gray-300 border border-gray-400 rounded-[2.12rem] shadow-inner focus:outline-none focus:ring-2 focus:ring-gray-500 focus:bg-white"
              required
            />
          </div>
          <div className="flex justify-center">
            <button className="overflow-hidden w-48 p-2 h-12 bg-black text-white border-2 border-black rounded-[2.12rem] text-xl font-bold cursor-pointer relative z-10 group">
              Sign Up
              <span className="absolute w-48 h-48 -top-12 -left-4 bg-white rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-1000 origin-left"></span>
              <span className="absolute w-48 h-48 -top-12 -left-4 bg-purple-400 rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left"></span>
              <span className="absolute w-48 h-48 -top-12 -left-4 bg-purple-600 rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></span>
              <span className="group-hover:opacity-100 duration-1000 opacity-0 absolute top-2 left-10 z-10">
                Loading...
              </span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignupCard;