import React from "react";
import HeroSection from "src/components/home/hero";
import NoLayout from "src/components/layout/NoLayout";
import NavBar from "src/components/navbar";
import FacilitiesSection from "src/components/home/facilities";
import { ActivityProps, HeroSlideProps } from "src/utils/types";

const Home = () => {
  const activities: ActivityProps[] = [
    { name: "training", imageSrc: "assets/facilities/training.jpg" },
    { name: "swimming", imageSrc: "assets/facilities/swimming.jpg" },
    { name: "football", imageSrc: "assets/facilities/football.jpg" },
    {
      name: "basketball",
      imageSrc: "assets/facilities/basketball.jpg",
    },
  ];

  const slideShowData: HeroSlideProps[] = [
    { imageSrc: "/assets/hero/0.jpg", animationDelay: 0 },
    { imageSrc: "/assets/hero/1.jpg", animationDelay: 4 },
    { imageSrc: "/assets/hero/2.jpg", animationDelay: 8 },
    { imageSrc: "/assets/hero/3.jpg", animationDelay: 12 },
    { imageSrc: "/assets/hero/4.jpg", animationDelay: 18 },
  ];

  return (
    <div>
      <NavBar transparent={false} />
      <HeroSection slideShowData={slideShowData} slideShowAnimationTime={22} />
      <FacilitiesSection activities={activities} />
    </div>
  );
};

Home.Layout = NoLayout;
export default Home;
