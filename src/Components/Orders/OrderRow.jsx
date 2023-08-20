import React, { useEffect, useState } from "react";

const OrderRow = ({ order, handleDelete, handleStatusUpdate }) => {
  const { _id, packageName, packageId, price, customer, phone, status } = order;
  // console.log(order);
  const [orderedPackage, setOrderedPackage] = useState({});
  useEffect(() => {
    fetch(`http://localhost:5005/packages/${packageId}`)
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setOrderedPackage(data);
      });
  }, [packageId]);
  const { img } = orderedPackage;
  return (
    <div>
      <tr>
        <th>
          <label>
            <button
              onClick={() => handleDelete(_id)}
              className="btn btn-circle btn-outline"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </label>
        </th>
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask mask-squircle w-24 h-24">
                {orderedPackage?.img && (
                  <img src={img} alt="Avatar Tailwind CSS Component" />
                )}
              </div>
            </div>
            <div>
              <div className="font-bold">{customer}</div>
              <div className="text-sm opacity-50">{phone}</div>
            </div>
          </div>
        </td>
        <td className="text-lg pl-40">
          {packageName}
          <br />
          <span className="badge badge-ghost badge-lg">৳{price}</span>
        </td>
        {/* <td>Purple</td> */}
        <th className="pl-72">
          <button onClick={()=>handleStatusUpdate(_id)} className="btn btn-ghost btn-lg text-slate-600 text-lg font-bold  ">
            {status ? status : "Pending"}
          </button>
        </th>
      </tr>
    </div>
  );
};

export default OrderRow;
