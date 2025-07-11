import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const WelcomePrompt: React.FC = () => {
  const [showModal, setShowModal] = useState(true);
  const navigate = useNavigate();

  const handleNavigate = (path: string) => {
    setShowModal(false);
    navigate(path);
  };

  if (!showModal) return null; // Hides everything else while modal not visible

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl shadow-xl p-8 max-w-md w-full transform transition-all">
        <h2 className="text-2xl font-bold text-center mb-4">Welcome!</h2>
        <p className="text-center text-gray-600 mb-6">
          Thank you for visiting! We’re excited to have you onboard.
        </p>

        <div className="space-y-3">
          <button
            onClick={() => handleNavigate("/signup")}
            className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 rounded-full transition"
          >
            Sign Up
          </button>
          <button
            onClick={() => handleNavigate("/signin")}
            className="w-full bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-3 rounded-full transition"
          >
            Sign In
          </button>
          <button
            onClick={() => handleNavigate("/AllUsers")}
            className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-3 rounded-full transition"
          >
            Meet Our Users
          </button>
          <button
            onClick={() => handleNavigate("/AooConcept")}
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 rounded-full transition"
          >
            Contact Portfolio
          </button>
          <button
            onClick={() => handleNavigate("/")}
            className="w-full bg-gray-500 hover:bg-gray-600 text-white font-semibold py-3 rounded-full transition"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default WelcomePrompt;
