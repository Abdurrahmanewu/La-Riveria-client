import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Contexts/AuthProvider/AuthProvider";
import OrderRow from "./OrderRow";
import { paste } from "@testing-library/user-event/dist/paste";
import { json } from "react-router-dom";
import useTitle from "../../hooks/useTitle";

const Orders = () => {
  const { user } = useContext(AuthContext);
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    fetch(`https://la-riveria-server.vercel.app/orders?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, [user?.email]);
  console.log(orders);
  const handleDelete = (id) => {
    const confirmation = window.confirm("Sure want to delete this item?");
    if (confirmation) {
      fetch(`https://la-riveria-server.vercel.app/orders/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount > 0) {
            alert("This package deleted successfully");
            const remaining = orders.filter((ord) => ord._id !== id);
            setOrders(remaining);
          }
        });
    }
  };
  const handleStatusUpdate = (id) => {
    fetch(`https://la-riveria-server.vercel.app/orders/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ status: "Package Updated" }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          const remaining = orders.filter((ord) => ord._id !== id);
          const approvedPackage = orders.find((ord) => ord._id == id);
          approvedPackage.status = "Package Updated";
          // ata holo spa er jonno.
          const newOrders = [approvedPackage, ...remaining];
          setOrders(newOrders);
        }
      })
      .catch((e) => console.error(e));
  };
  useTitle("My Orders");
  return (
    <div>
      {orders.length < 1 ? (
        <p className="text-5xl mt-10 text-center">There are no orders</p>
      ) : (
        <div>
          <h2 className="text-4xl text-center my-10">My Ordered Packages</h2>
          <div className="overflow-x-auto">
            <table className="table">
              <thead>
                <tr className="flex justify-evenly text-xl">
                  {/* <th className="w-2"></th> */}
                  <th className="pr-56">Name</th>
                  <th className="pr-52">Package name & Price</th>
                  <th>Update package info</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {orders.map((order) => (
                  <OrderRow
                    key={order._id}
                    order={order}
                    handleDelete={handleDelete}
                    handleStatusUpdate={handleStatusUpdate}
                  ></OrderRow>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

export default Orders;
