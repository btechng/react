import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const ProfileDetails: React.FC = () => {
  const [viewResult, setViewResult] = useState<any>(null);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const { data } = await axios.get(
          `https://fullstack-student-backend.onrender.com/api/auth/${id}`
        );
        setViewResult(data);
      } catch (error) {
        console.error("Result not Found:", error);
      }
    };

    fetchProfile();
  }, [id]);

  if (!viewResult) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <p className="text-gray-500">Loading profile...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 py-10">
      <div className="bg-white rounded-2xl shadow-lg p-8 max-w-md w-full">
        <div className="flex flex-col items-center">
          <div className="bg-gradient-to-tr from-orange-400 to-orange-600 rounded-full h-24 w-24 flex items-center justify-center text-white text-3xl font-bold">
            {viewResult.firstName?.charAt(0)}
            {viewResult.lastName?.charAt(0)}
          </div>
          <h1 className="text-2xl font-semibold text-gray-800 mt-4">
            {viewResult.firstName} {viewResult.lastName}
          </h1>
          <p className="text-gray-500 mt-1">{viewResult.email}</p>
          <p className="text-gray-500">{viewResult.phoneNumber}</p>
        </div>

        <div className="mt-8 space-y-2">
          <div className="bg-gray-50 rounded-lg p-4">
            <p className="text-sm text-gray-600">First Name</p>
            <p className="text-lg font-medium text-gray-800">
              {viewResult.firstName}
            </p>
          </div>
          <div className="bg-gray-50 rounded-lg p-4">
            <p className="text-sm text-gray-600">Last Name</p>
            <p className="text-lg font-medium text-gray-800">
              {viewResult.lastName}
            </p>
          </div>
          <div className="bg-gray-50 rounded-lg p-4">
            <p className="text-sm text-gray-600">Email</p>
            <p className="text-lg font-medium text-gray-800">
              {viewResult.email}
            </p>
          </div>
          <div className="bg-gray-50 rounded-lg p-4">
            <p className="text-sm text-gray-600">Phone Number</p>
            <p className="text-lg font-medium text-gray-800">
              {viewResult.phoneNumber}
            </p>
          </div>
        </div>

        <button
          onClick={() => navigate(`/update-profile/${id}`)}
          className="mt-6 w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 rounded-lg transition"
        >
          Update Profile
        </button>
      </div>
    </div>
  );
};

export default ProfileDetails;
