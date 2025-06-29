import { useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Login from "./pages/Login/Login2";
import ProductDetails from "./pages/ProductDetails/ProductDetails";
import ProfileDetails from "./pages/ProfileDetails/ProfileDetails";
import SignUp from "./components/SignUp/SignUp";
import Signup from "./pages/SignUpPage/Signup";
import Login2 from "./pages/Login/Login2";
import Terms from "./pages/PolicyLinks6ixStores/Terms";
import Support from "./pages/PolicyLinks6ixStores/Support";
import Privacy from "./pages/PolicyLinks6ixStores/Privacy";
// import Test from "./components/Test/Test";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/Login2" element={<Login2 />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/details/:id" element={<ProductDetails />} />
          <Route path="/auth/:id" element={<ProfileDetails />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/terms-conditions" element={<Terms />} />
          <Route path="/support-policy" element={<Support />} />
          <Route path="/privacy-policy" element={<Privacy />} />

          {/* <Route path="/" element={<Test />} /> */}
        </Routes>
        {/* <Test /> */}
      </div>
    </>
  );
}

export default App;
