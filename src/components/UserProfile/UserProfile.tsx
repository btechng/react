import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const UserProfile = () => {
  const [viewResult, setViewResult] = useState([]);
  console.log(viewResult);
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const { data } = await axios.get(
          "https://fullstack-student-backend.onrender.com/api/auth"
        );
        console.log(data);

        setViewResult(data);
      } catch (error) {
        console.error("Result not Found:", error);
      }
    };

    fetchPosts();
  }, []);
  const navigate = useNavigate();
  const handleNavigate = (id: any) => {
    navigate(`/auth/${id}`);
  };
  return (
    <div>
      <h1>User Profiles</h1>
      <div>
        {viewResult.map((items: any) => (
          <>
            <div>
              <div
                className="card"
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "10px",
                  justifyContent: "space-evenly",
                }}
                onClick={() => handleNavigate(items._id)}
              >
                {/* <img src="..." class="card-img-top" alt="..."> */}
                <div className="card-body">
                  <h5 className="card-title">
                    {items.firstName}
                    {items.lastName}
                  </h5>
                  <h5>{items.email}</h5>
                  <p className="card-text"></p>
                  <a href="#" className="btn btn-primary">
                    Check Full Profile
                  </a>
                </div>
              </div>
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

export default UserProfile;
