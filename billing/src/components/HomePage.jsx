import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/navbar';
import image from '../../public/finance.png';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gray-300 flex flex-col"> {/* Light Gray background */}
      <Navbar />
      <div className="flex flex-grow">
        {/* Left Side - Image */}
        <div className="w-1/2 flex justify-center items-center">
          <img src={image} alt="Finance" className="max-w-full h-auto" />
        </div>

        {/* Right Side - Button */}
        <div className="w-1/2 flex justify-center items-center">
          <Link to="/login">
            <button className="bg-gray-500 w-60 text-white p-5 rounded-lg shadow-lg hover:bg-gray-800 font-bold text-xl transition-opacity duration-300 hover:opacity-90">
              Add-Billing
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;



