import React, { useState } from "react";
import HeroSection from "src/components/hero";
import NoLayout from "src/components/layout/NoLayout";
import NavBar from "src/components/navbar";

const Home = () => {
  const [transparent, setTransparent] = useState(true);
  return (
    <>
      <NavBar transparent={transparent} />
      <HeroSection />
    </>
  );
};

Home.Layout = NoLayout;
export default Home;
