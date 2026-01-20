import React from "react";
import { Link } from "react-router-dom";

const AppBar: React.FC = () => {
  return (
    <div className="flex justify-between items-center px-6 py-3 bg-white shadow-md">
      {/* Left Section: Logo & Text */}
      <div className="flex items-center space-x-2">
        {/* Logo (Placeholder for Medium-style logo) */}
        {/* <div className="w-8 h-8 bg-black rounded-full"></div> */}

        {/* Draft Label */}
        <span className="text-gray-900 font-medium">Anurag</span>

        {/* Saved Indicator */}
        <span className="text-gray-500 text-sm">Saved</span>
      </div>

      {/* Right Section: Actions */}
      <div className="flex items-center space-x-4">
        {/* Publish Button */}
        <Link to={"/publish"}>
        <button className="bg-green-600 text-white px-4 py-1 rounded-full text-sm hover:bg-green-700 cursor-pointer">
          Publish
        </button>
        </Link>

        {/* More Options (3 dots) */}
        <button className="text-gray-500 text-lg hover:text-gray-700">⋯</button>

        {/* Notification Icon (Bell) */}
        <button className="text-gray-500 text-lg hover:text-gray-700">🔔</button>

        {/* User Avatar (Placeholder) */}
        <div className="w-8 h-8 bg-gray-800 text-white rounded-full flex items-center justify-center">
          h
        </div>
      </div>
    </div>
  );
};

export default AppBar;
