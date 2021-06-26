import React from "react";
import HeroSection from "src/components/hero";
import NoLayout from "src/components/layout/NoLayout";
import NavBar from "src/components/navbar";
import FacilitiesSection from 'src/components/facilities'

const Home = () => {

  return (
    <div>
      <NavBar transparent={false}/>
      <HeroSection />
      <FacilitiesSection />
    </div>
  );
};

Home.Layout = NoLayout;
export default Home;
