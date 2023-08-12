import React from "react";
import { useLoaderData } from "react-router-dom";

const SinglePackage = () => {
  const { _id, description, img, price, title } = useLoaderData();
  
  return (
    <div>
      <h1>This is package no: </h1>
    </div>
  );
};

export default SinglePackage;
