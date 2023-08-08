import React, { useEffect, useState } from "react";
import HalfPackagesCard from "./HalfPackagesCard";
import { Link } from "react-router-dom";

const HalfPackges = () => {
  const [packages3, setPackages3] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5005/packagesof3")
      .then((res) => res.json())
      .then((data) => {
        setPackages3(data);
      });
  }, []);
  return (
    <div>
      <div className="text-center">
        <h2 className="text-5xl font-bold text-orange-600 pb-5">Our Packges</h2>
      </div>
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {packages3.map((card3) => (
          <HalfPackagesCard key={card3._id} card3={card3}></HalfPackagesCard>
        ))}
      </div>
      <div className="mt-20 flex justify-center items-start">
        <Link to="/packges">
          <button className="btn btn-warning">See All Packages</button>
        </Link>
      </div>
    </div>
  );
};

export default HalfPackges;
