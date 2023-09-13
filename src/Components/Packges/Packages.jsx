import React, { useContext, useEffect, useState } from "react";
import PackgeCard from "./PackgeCard";
import useTitle from "../../hooks/useTitle";
import { AuthContext } from "../../Contexts/AuthProvider/AuthProvider";

const Packages = () => {
  const { loading } = useContext(AuthContext);
  // if (loading) {
  //   //  <span className="loading loading-spinner text-warning"></span>;
  //   <div>
  //     <h1 className="text-5xl">Loadding</h1>
  //   </div>;
  // }

  const [packages, setPackages] = useState([]);
  useEffect(() => {
    fetch("https://la-riveria-server.vercel.app/packages")
      .then((res) => res.json())
      .then((data) => {
        setPackages(data);
      });
  }, []);
  useTitle("Packages");

  return (
    <div>
      {loading && (
        <span className="flex items-center justify-center loading loading-spinner text-warning loading-lg "></span>
      )}
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
