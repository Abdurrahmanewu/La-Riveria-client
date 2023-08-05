import React from "react";
import img1 from "../../assets/Slider/slide-1.jpg";
import img2 from "../../assets/Slider/slide-2.jpg";
import img3 from "../../assets/Slider/slide-3.jpg";
import SliderItems from "./SliderItems";

const Slider = () => {
  const sliderData = [
    {
      image: img1,
      prev: 3,
      id: 1,
      next: 2,
    },
    {
      image: img2,
      prev: 1,
      id: 2,
      next: 3,
    },
    {
      image: img3,
      prev: 2,
      id: 3,
      next: 1,
    },
  ];
  return (
    <div className="carousel w-full">
      {sliderData.map((slide) => (
        <SliderItems key={slide.id} slide={slide}></SliderItems>
      ))}
      {/* <SliderItems image={img1}></SliderItems> */}
      {/* <div id="slide1" className="carousel-item relative w-full">
        <img src={img1} className="w-full carousel-img" alt="" />
        <div className="absolute flex justify-end transform -translate-y-1/2 text-center left-32 top-1/4">
          <h1 className="text-5xl font-bold text-white">
            Welcome To La Riveria <br />
            Resort & Park
          </h1>
        </div>
        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a href="#slide4" className="btn btn-circle mr-5">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div> */}
      {/* <div id="slide2" className="carousel-item relative w-full">
        <img src={img2} className="w-full" alt="" />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide1" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <img src={img3} className="w-full" alt="" />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide2" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div> */}
    </div>
  );
};

export default Slider;
