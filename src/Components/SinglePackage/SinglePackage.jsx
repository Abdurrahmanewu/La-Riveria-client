import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import DummyReviews from "../DummyReviews/DummyReviews";
import UserRiview from "../UserRiveiw/UserRiview";
import { AuthContext } from "../../Contexts/AuthProvider/AuthProvider";


const SinglePackage = () => {
  const { user } = useContext(AuthContext);
  const singlePackageData = useLoaderData();
  const { _id, description, img, price, title } = singlePackageData;
  // console.log(singlePackageData);

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
        <div className="mt-10">
          {user?.email ? (
            <UserRiview singlePackageData={singlePackageData}></UserRiview>
          ) : (
            <h2>Please login to add a review</h2>
          )}
        </div>
      </div>
    </div>
  );
};

export default SinglePackage;
