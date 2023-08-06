import React from "react";
import Slider from "../Slider/Slider";
import Features from "../Features/Features";
import Packages from "../Packges/Packages";

const Home = () => {
  return (
    <div className="mt-10">
      <Slider></Slider>
      <Features></Features>
      <Packages></Packages>
    </div>
  );
};

export default Home;
