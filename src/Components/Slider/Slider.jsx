import React from "react";
import img1 from "../../assets/Slider/slide-1.jpg";
import img2 from "../../assets/Slider/slide-2.jpg";
import img3 from "../../assets/Slider/slide-3.jpg";

const Slider = () => {
  const sliderData = [
    {
      img: img1,
      prev: 3,
      id: 1,
      next: 2,
    },
    {
      img: img2,
      prev: 1,
      id: 2,
      next: 3,
    },
    {
      img: img3,
      prev: 1,
      id: 3,
      next: 2,
    },
  ];
  return (
    <div className="carousel w-full">
      <h1>This is slider</h1>
      {sliderData.map((slide) => (
        <p></p>
      ))}
    </div>
  );
};

export default Slider;
