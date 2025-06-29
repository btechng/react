// import Navbar from "../components/Navbar/Navbar";
// import Hero from "../components/Hero/Hero";
// import Header from "../components/Rough/Header/Header";
// import Events from "../components/Rough/Header/Events";
// import Rough from "../components/Rough/Rough";
// import SignUp from "../components/SignUp/SignUp";
// import SignIn from "../components/SignIn/SignIn";
// import FetchAllData from "../components/FetchAllData/FetchAllData";
// import UserProfile from "../components/UserProfile/UserProfile";
import Navbar6ix from "../components/Navbar6ixStores/Navbar6ix";
import Product6ixStores from "../components/Product6ixStores_Section/Product6ixStores";
import Featured6ixStores from "../components/Featured6ixStores_Section/Featured6ixStores";
import ElectricalHomeApp6ixStores from "../components/ElectricalHomeAppliance_Section/ElectricalHomeApp6ixStores";
import Clothes6ixStores from "../components/Clothes6ixStores_Section/Clothes6ixStores";
import Top10brands6ixStores from "../components/Footer6ixStores_Section/Top10brands6ixStores";
import SocialsSubscribe6ixStores from "../components/Footer6ixStores_Section/SocialsSubscribe6ixStores";
import PolicyLinksDemo from "../components/Policy6ixStores_Section/Policy6ixStores";
import HomeDeco6ixStores from "../components/HomeDeco6ixStores_Section/HomeDeco6ixStores";
import FootMat6ixStores from "../components/FootMat6ixStores_Section/FootMat6ixStores";

// import Mynavbar from "../components/Navbar/Navbar";
// import Login from "./Login/Login";
const HomePage = () => {
  return (
    <div>
      {/* <Navbar /> */}
      {/* <Hero /> */}
      {/* <Header /> */}
      {/* <Rough /> */}
      {/* <Events /> */}
      {/* <Mynavbar /> */}
      {/* <Login /> */}
      {/* <SignUp /> */}
      {/* <SignIn /> */}
      {/* <FetchAllData /> */}
      {/* <UserProfile /> */}
      <Navbar6ix />
      <Product6ixStores />
      <Featured6ixStores />
      <ElectricalHomeApp6ixStores />
      <Clothes6ixStores />
      <HomeDeco6ixStores />
      <FootMat6ixStores />
      <Top10brands6ixStores />
      <PolicyLinksDemo />
      <SocialsSubscribe6ixStores />
    </div>
  );
};

export default HomePage;
