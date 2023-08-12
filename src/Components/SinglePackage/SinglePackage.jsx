import React from "react";
import { useLoaderData } from "react-router-dom";
import DummyReviews from "../DummyReviews/DummyReviews";

const SinglePackage = () => {
  const { _id, description, img, price, title } = useLoaderData();

  return (
    <div className="mt-20">
      <div>
        <h1 className="text-5xl mb-10">{title}</h1>
        <p className="text-2xl mb-6">
          Package Parice:
          <span className="text-orange-600 text-2xl">৳ {price}</span>
        </p>
        <img
          alt=""
          src={img}
          className="object-cover mb-6 object-center w-1/2 rounded-md h-72 dark:bg-gray-500"
        />
        <div>
          <p className="text-2xl">{description}</p>
        </div>
        <DummyReviews></DummyReviews>
      </div>
    </div>
  );
};

export default SinglePackage;
