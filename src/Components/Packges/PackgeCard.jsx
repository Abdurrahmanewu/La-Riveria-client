import React from "react";
import { Link } from "react-router-dom";

const PackgeCard = ({ card }) => {
  const { _id, title, img, price } = card;
  return (
    <div>
      <div className="card card-compact w-96 bg-base-100 shadow-xl">
        <figure>
          <img src={img} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p className="text-orange-600 text-xl font-bold">Price: ৳{price}</p>
          <div className="card-actions justify-end">
            <Link>
              <button className="btn btn-primary">Buy Now</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PackgeCard;
