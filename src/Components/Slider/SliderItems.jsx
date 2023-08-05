import React from "react";
import "./SliderItems.css";

const SliderItems = ({ slide }) => {
  const { id, img, prev, next } = slide;
  return (
    <div>
      <div id={`slide${id}`} className="carousel-item relative w-full">
        <div className="carousel-img">
          <img src={img} className="w-full rounded-xl" alt="" />
        </div>
        <div className=" absolute  transform -translate-y-1/2 left-24 top-1/4">
          <h1 className="text-6xl font-bold text-white">
            Affordable <br />
            Price for car <br />
            Servicing
          </h1>
        </div>
        <div className=" absolute  transform -translate-y-1/2 left-24 top-1/2">
          <p className="text-xl text-white">
            There are many variations of passages of available, but <br />
            the majority have suffered alteration in some form
          </p>
        </div>
        <div className=" absolute  transform -translate-y-1/2 left-24 top-3/4">
          <button className="btn btn-warning mr-5">Discover More</button>
          <button className="btn btn-outline btn-warning">
            Latest Projects
          </button>
        </div>
        <div className=" absolute flex transform -translate-y-1/2 right-5 bottom-0">
          <a href={`#slide${prev}`} className="btn btn-circle mr-5">
            ❮
          </a>
          <a href={`#slide${next}`} className="btn btn-circle ">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default SliderItems;
