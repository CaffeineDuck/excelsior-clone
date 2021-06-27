import React from "react";
import HeroSection from "src/components/hero";
import NoLayout from "src/components/layout/NoLayout";
import NavBar from "src/components/navbar";
import FacilitiesSection from "src/components/facilities";

const Home = () => {
  const activities = [
    { name: "training", ImageSrc: "assets/facilities/training.jpg" },
    { name: "swimming", ImageSrc: "assets/facilities/swimming.jpg" },
    { name: "football", ImageSrc: "assets/facilities/football.jpg" },
    {
      name: "basketball",
      ImageSrc: "assets/facilities/basketball.jpg",
    },
  ];

  return (
    <div>
      <NavBar transparent={false} />
      <HeroSection />
      <FacilitiesSection activities={activities} />
    </div>
  );
};

Home.Layout = NoLayout;
export default Home;
