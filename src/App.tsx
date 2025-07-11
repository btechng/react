import { useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import WelcomePrompt from "./components/WelcomePrompt";
import HomePage from "./pages/HomePage";

import ProfileDetails from "./pages/ProfileDetails/ProfileDetails";
import Signup from "./pages/SignUpPage/Signup";

import Terms from "./pages/PolicyLinks6ixStores/Terms";
import Support from "./pages/PolicyLinks6ixStores/Support";
import Privacy from "./pages/PolicyLinks6ixStores/Privacy";
import Login33 from "./pages/Login/SignIn";
import SignIn from "./pages/Login/SignIn";
import AllUsers from "./pages/Users/FetchAllUsers";
import AooConcept from "./pages/AooConcept";
import UpdateProfile from "./pages/Users/UpdateProfile";
// import Test from "./components/Test/Test";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <WelcomePrompt />
        <Routes>
          <Route path="/" element={<HomePage />} />

          <Route path="/Signin" element={<SignIn />} />
          <Route path="/AllUsers" element={<AllUsers />} />

          <Route path="/auth/:id" element={<ProfileDetails />} />
          <Route path="/update-profile/:id" element={<UpdateProfile />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/Aooconcept" element={<AooConcept />} />
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
