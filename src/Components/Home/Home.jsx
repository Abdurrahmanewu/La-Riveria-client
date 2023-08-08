import React from "react";
import Slider from "../Slider/Slider";
import Features from "../Features/Features";
import Packages from "../Packges/Packages";
import HalfPackges from "../HalfPackges/HalfPackges";

const Home = () => {
  return (
    <div className="mt-10">
      <Slider></Slider>
      <Features></Features>
      <Packages></Packages>
      <HalfPackges></HalfPackges>
    </div>
  );
};

export default Home;
