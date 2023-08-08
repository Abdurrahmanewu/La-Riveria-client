import React from "react";
import { Link } from "react-router-dom";

const HalfPackagesCard = ({ card3 }) => {
  const { _id, title, img, price, description } = card3;
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
              {/* You can open the modal using ID.showModal() method */}
              <button
                className="btn"
                onClick={() => window.my_modal_3.showModal()}
              >
                Details
              </button>
              <dialog id="my_modal_3" className="modal">
                <form method="dialog" className="modal-box">
                  <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                    ✕
                  </button>
                  <h3 className="font-bold text-lg">Hello!</h3>
                  <p className="py-4">
                    Press ESC key or click on ✕ button to close
                  </p>
                </form>
              </dialog>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HalfPackagesCard;
