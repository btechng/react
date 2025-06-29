import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const FetchAllData = () => {
  const [viewResult, setViewResult] = useState([]);
  console.log(viewResult);
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const { data } = await axios.get(
          "https://fullstack-student-backend.onrender.com/api/products"
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
    navigate(`/details/${id}`);
  };
  return (
    <div className="DisplayData">
      <h1>Display Data Screen</h1>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "10px",
          justifyContent: "space-evenly",
        }}
      >
        {viewResult.map((items: any) => (
          <>
            <div
              className="card"
              style={{ width: "18rem", cursor: "pointer" }}
              onClick={() => handleNavigate(items._id)}
            >
              {/* Using Anchor(a-tag) */}
              {/* <a href={`/productdetails/${items._id}`} style={{color:"initial"}}> </a> */}

              <div>
                {items.images.map((items: any) => (
                  <>
                    <img src={items.url} className="card-img-top" />
                  </>
                ))}
              </div>
              <div className="card-body">
                <h5 className="card-title">{items.name}</h5>
                <p className="card-text">{items.category}</p>
                <p className="card-text">{items.price}</p>
                <p className="card-text">{items.brand}</p>

                <a href="#" className="btn btn-primary">
                  Add to Cart
                </a>
              </div>
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

export default FetchAllData;
