import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProfileDetails = () => {
  const [viewResult, setViewResult] = useState<any>([]);
  const { id } = useParams();
  console.log(viewResult);
  console.log(id);
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const { data } = await axios.get(
          `https://fullstack-student-backend.onrender.com/api/auth/${id}`
        );
        console.log(data);

        setViewResult(data);
      } catch (error) {
        console.error("Result not Found:", error);
      }
    };

    fetchPosts();
  }, []);
  return (
    <div>
      <h1>Profile Details Screen</h1>
      <h2>{viewResult?.firstName}</h2>
      <h3>{viewResult?.lastName}</h3>
      <h4>{viewResult?.phoneNumber}</h4>
      <h5>{viewResult?.email}</h5>
    </div>
  );
};

export default ProfileDetails;
