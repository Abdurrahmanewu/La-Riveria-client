import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Contexts/AuthProvider/AuthProvider";
import OrderRow from "./OrderRow";

const Orders = () => {
  const { user } = useContext(AuthContext);
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5005/orders?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, [user?.email]);
  console.log(orders);
  return (
    <div>
      <h1>This is order section {orders.length}</h1>
      <h2 className="text-4xl text-center mb-10">My Ordered Packages</h2>
      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr className="flex justify-evenly text-xl">
              {/* <th className="w-2"></th> */}
              <th className="pr-56">Name</th>
              <th className="pr-52">Package name & Price</th>
              <th>Favorite Color</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <OrderRow key={order._id} order={order}></OrderRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Orders;
