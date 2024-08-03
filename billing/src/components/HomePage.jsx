import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/navbar';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gray-500"> {/* Light Gray background */}
      <Navbar />
      <div className="flex flex-col items-center justify-center h-screen space-y-4">
        <Link to="/login">
          <button className="bg-gray-800 w-60 text-white p-5 rounded-lg shadow-lg hover:bg-gray-300 font-bold text-xl transition-opacity duration-300 hover:opacity-90">
            Add-Billing
          </button>
        </Link>
      </div>
    </div>
  );
};

export default HomePage;


