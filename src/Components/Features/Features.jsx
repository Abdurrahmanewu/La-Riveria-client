import React from "react";
import feature1 from "../../assets/features/River view pool.jpg";
import feature2 from "../../assets/features/River view cottage.jpg";
import feature3 from "../../assets/features/River view restaurent.jpg";

const Features = () => {
  return (
    <div>
      <section className="p-4 lg:p-8 dark:bg-gray-800 dark:text-gray-100">
        <div className="m-10">
          <h1 className="text-5xl text-center">Speaciality of La Riveria</h1>
        </div>
        <div className="container mx-auto space-y-12">
          <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row">
            <img
              src={feature2}
              alt=""
              className="h-80 rounded-xl dark:bg-gray-500 aspect-video"
            />
            <div className="flex flex-col justify-center flex-1 p-6 dark:bg-gray-900">
              <h3 className="text-3xl font-bold">Rierview Wooden Cottage</h3>
              <p className="my-6 dark:text-gray-400 text-xl">
                Enjoy your holiday in our gorgeous wooden cottage with river
                view.
              </p>
            </div>
          </div>
          <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row-reverse">
            <img
              src={feature1}
              alt=""
              className="h-80 rounded-xl dark:bg-gray-500 aspect-video"
            />
            <div className="flex flex-col justify-center flex-1 p-6 dark:bg-gray-900">
              <h3 className="text-3xl font-bold">
                Riverside Pool with Horizontal River View
              </h3>
              <p className="my-6 dark:text-gray-400 text-xl">
                Have a parallel view of river while swiming in our pool. It will
                give you a fell river swiming.
              </p>
            </div>
          </div>
          <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row">
            <img
              src={feature3}
              alt=""
              className="h-80 rounded-xl dark:bg-gray-500 aspect-video"
            />
            <div className="flex flex-col justify-center flex-1 p-6 dark:bg-gray-900">
              <h3 className="text-3xl font-bold">
                Open Dining Space with River View
              </h3>
              <p className="my-6 dark:text-gray-400 text-xl">
                Enjoy our delicious meal while enjoying river view.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Features;
