import React, { useState } from "react";
import { Link } from "react-router-dom";

const HalfPackagesCard = ({ card3 }) => {
  const { _id, title, img, price, description } = card3;
  // const [isModalOpen, setIsModalOpen] = useState(false);
  // const toggleModal = (id) => {
  //   setIsModalOpen(!isModalOpen);
  // };
  return (
    <div>
      <div className="card card-compact w-96 bg-base-100 shadow-xl">
        <figure>
          <img src={img} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p className="text-orange-600 text-xl font-bold">Price: ৳{price}</p>
          <div className="card-actions justify-between">
            <Link>
              <button className="btn btn-primary">Buy Now</button>
            </Link>
            <div>
              <Link to={`/singlepackage/${_id}`}>
                <button className="btn btn-active btn-ghost">
                  View Details
                </button>
              </Link>
              {/* {isModalOpen && (
                <div className=" flex items-center justify-center">
                  <div className="modal modal-open">
                    <div className="modal-box">
                      <h2 className="text-xl font-semibold mb-4">{title}</h2>
                      <p>{description}</p>
                      <div className="modal-action">
                        <button className="btn" onClick={toggleModal}>
                          Close
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )} */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HalfPackagesCard;
