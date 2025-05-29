import React from "react";
import "./Navbar.css";

const Navbar = () => {
  const title = "Nigeria is my country";
  console.log(title);

  return (
    <div>
      <h1 className="fh">Welcome to Nigeria</h1>
      <h2>{title}</h2>
      <p
        style={{
          color: "green",
          fontFamily: "sans-serif",
          fontStyle: "italic",
          backgroundColor: "lightskyblue",
          fontSize: "45px",
        }}
      >
        Welcome
      </p>
    </div>
  );
};

export default Navbar;
