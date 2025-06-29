import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductDetail = () => {
  const [viewResult, setViewResult] = useState<any>({});
  const { id } = useParams();
  console.log(viewResult);
  console.log(id);
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const { data } = await axios.get(
          `https://fullstack-student-backend.onrender.com/api/products/${id}`
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
      <div>
        {viewResult?.products?.images?.map((items: any) => (
          <>
            <img src={items?.url} />
          </>
        ))}
      </div>
      <p>Product Details Screen</p>
      <h1>{viewResult.products?.name}</h1>
      <h1>{viewResult.products?.brand}</h1>
      <h2>{viewResult.products?.price}</h2>,
    </div>
  );
};

export default ProductDetail;
