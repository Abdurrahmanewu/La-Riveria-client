import React, { useEffect, useState } from "react";
import PackgeCard from "./PackgeCard";

const Packages = () => {
  const [packages, setPackages] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5005/packages")
      .then((res) => res.json())
      .then((data) => {
        setPackages(data);
        console.log(data);
      });
  }, []);
  return (
    <div>
      <div className="text-center">
        <h2 className="text-5xl font-bold text-orange-600 pb-5">Our Packges</h2>
      </div>
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {packages.map((card) => (
          <PackgeCard key={card._id} card={card}></PackgeCard>
        ))}
      </div>
    </div>
  );
};

export default Packages;
