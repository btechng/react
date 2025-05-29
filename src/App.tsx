import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import HeroSection from "./components/Hero/Hero";
import Header from "./components/Navbar/Header/header";
import Rough from "./components/Rough/Rough";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        {/* <Navbar /> */}
        {/* <HeroSection /> */}
        <Header/>
     <Rough/>
      </div>
    </>
  );
}

export default App;
