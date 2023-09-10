import React, { useContext, useState } from "react";
import { AuthContext } from "../../Contexts/AuthProvider/AuthProvider";
import Orders from "../Orders/Orders";

const MyReviewCard = ({
  data,
  handleDeletereview,
  setUserReviews,
  userReviews,
}) => {
  const { guestName, packageName, message, rating, _id } = data;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };
  const { user } = useContext(AuthContext);
  const handleUpdateReview = (event) => {
    event.preventDefault();
    const form = event.target;
    const message = form.message.value;
    console.log(message);
    fetch(`https://la-riveria-server.vercel.app/reviews/${_id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ message: message }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        const updated = userReviews.find((review) => review._id == _id);
        updated.message = message;
        const reamaining = userReviews.filter((review) => review._id !== _id);
        const newUpdate = [updated, ...reamaining];
        setUserReviews(newUpdate);
        toggleModal();
      })
      .catch((e) => console.log(e));
  };
  return (
    <div>
      <div className="container flex flex-col w-full max-w-lg p-6 mx-auto divide-y rounded-md divide-gray-900 bg-slate-100 text-gray-950">
        <div className="flex justify-between p-4">
          <div className="flex space-x-4">
            <div>
              <img
                src=""
                alt=""
                className="object-cover w-12 h-12 rounded-full bg-gray-500"
              />
            </div>
            <div>
              <h4 className="font-bold">{guestName}</h4>
              <span className="text-base text-black font-bold">
                {packageName}
              </span>
            </div>
          </div>
          <div className="flex items-center space-x-2 text-yellow-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              className="w-5 h-5 fill-current"
            >
              <path d="M494,198.671a40.536,40.536,0,0,0-32.174-27.592L345.917,152.242,292.185,47.828a40.7,40.7,0,0,0-72.37,0L166.083,152.242,50.176,171.079a40.7,40.7,0,0,0-22.364,68.827l82.7,83.368-17.9,116.055a40.672,40.672,0,0,0,58.548,42.538L256,428.977l104.843,52.89a40.69,40.69,0,0,0,58.548-42.538l-17.9-116.055,82.7-83.368A40.538,40.538,0,0,0,494,198.671Zm-32.53,18.7L367.4,312.2l20.364,132.01a8.671,8.671,0,0,1-12.509,9.088L256,393.136,136.744,453.3a8.671,8.671,0,0,1-12.509-9.088L144.6,312.2,50.531,217.37a8.7,8.7,0,0,1,4.778-14.706L187.15,181.238,248.269,62.471a8.694,8.694,0,0,1,15.462,0L324.85,181.238l131.841,21.426A8.7,8.7,0,0,1,461.469,217.37Z"></path>
            </svg>
            <span className="text-xl font-bold">{rating}</span>
          </div>
        </div>
        <div className="p-4 space-y-2 text-sm text-gray-900">
          <p>{message}</p>
        </div>
        <div className="mt-10 flex justify-between pt-5 ">
          <button
            onClick={() => handleDeletereview(_id)}
            className="btn btn-warning text-xs"
          >
            Delete Review
          </button>
          <button onClick={toggleModal} className="btn btn-success text-xs">
            Update Review
          </button>
          {isModalOpen && (
            <div className=" flex items-center justify-center">
              <div className="modal modal-open">
                <div className="modal-box">
                  <h2 className="text-xl font-semibold mb-4">
                    Update your review
                  </h2>
                  <form onSubmit={handleUpdateReview}>
                    <textarea
                      name="message"
                      className="textarea textarea-bordered h-24 w-full mt-5"
                      placeholder="Your Message"
                      required
                    ></textarea>
                    <input
                      className="btn mt-5"
                      type="submit"
                      value="Update review"
                      // onClick={toggleModal}
                    />
                  </form>
                  <div className="modal-action">
                    <button className="btn" onClick={toggleModal}>
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MyReviewCard;
