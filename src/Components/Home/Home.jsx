import React, { useContext } from "react";
import Slider from "../Slider/Slider";
import Features from "../Features/Features";
import Packages from "../Packges/Packages";
import HalfPackges from "../HalfPackges/HalfPackges";
import { AuthContext } from "../../Contexts/AuthProvider/AuthProvider";

const Home = () => {
  
  return (
    <div className="mt-10">
      <Slider></Slider>
      <Features></Features>
      <HalfPackges></HalfPackges>
     
    </div>
  );
};

export default Home;
