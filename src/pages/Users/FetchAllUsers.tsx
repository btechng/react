import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { MdDeleteForever } from "react-icons/md";

interface User {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
}

const AllUsers: React.FC = () => {
  const [viewResult, setViewResult] = useState<User[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const { data } = await axios.get(
          "https://fullstack-student-backend.onrender.com/api/auth"
        );
        setViewResult(data);
      } catch (error) {
        console.error("Result not Found:", error);
      }
    };

    fetchPosts();
  }, []);

  const handleNavigate = (id: string) => {
    navigate(`/auth/${id}`);
  };

  const handleDelete = async (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    try {
      await axios.delete(
        `https://fullstack-student-backend.onrender.com/api/auth/delete/${id}`
      );
      alert("User Data Deleted Successfully");
      setViewResult(viewResult.filter((user) => user._id !== id));
    } catch (error) {
      console.error("Error Deleting User Data", error);
      alert("Failed to delete User data");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4 sm:px-8">
      <div className="max-w-5xl mx-auto bg-white p-6 rounded-2xl shadow-md">
        <h1 className="text-2xl font-semibold text-center text-gray-800 mb-6">
          User Profiles
        </h1>

        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-200 divide-y divide-gray-200">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">
                  #
                </th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">
                  First Name
                </th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">
                  Last Name
                </th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">
                  Email
                </th>
                <th className="px-4 py-3 text-center text-sm font-semibold text-gray-700">
                  Action
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 bg-white">
              {viewResult.map((user, index) => (
                <tr
                  key={user._id}
                  onClick={() => handleNavigate(user._id)}
                  className="hover:bg-gray-50 cursor-pointer transition"
                >
                  <td className="px-4 py-3 text-sm text-gray-600">
                    {index + 1}
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-800">
                    {user.firstName}
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-800">
                    {user.lastName}
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-800">
                    {user.email}
                  </td>
                  <td className="px-4 py-3 text-center">
                    <button
                      onClick={(e) => handleDelete(user._id, e)}
                      className="text-red-500 hover:text-red-600 transition"
                    >
                      <MdDeleteForever size={20} />
                    </button>
                  </td>
                </tr>
              ))}
              {viewResult.length === 0 && (
                <tr>
                  <td
                    colSpan={5}
                    className="px-4 py-6 text-center text-gray-500 text-sm"
                  >
                    No users found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AllUsers;
