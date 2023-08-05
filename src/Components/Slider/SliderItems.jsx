import React from "react";
import "./SliderStyle.css";

const SliderItems = ({ slide }) => {
  const { id, image, prev, next } = slide;
  return (
    <div id={`slide${id}`} className="carousel-item relative w-full">
      <img src={image} className="w-full carousel-img" alt="" />
      <div className="absolute flex justify-end transform -translate-y-1/2 text-center left-32 top-1/4">
        <h1 className="text-5xl font-bold text-white">
          Welcome To La Riveria <br />
          Resort & Park
        </h1>
      </div>
      <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
        <a href={`#slide${prev}`} className="btn btn-circle mr-5">
          ❮
        </a>
        <a href={`#slide${next}`} className="btn btn-circle">
          ❯
        </a>
      </div>
    </div>
  );
};

export default SliderItems;
