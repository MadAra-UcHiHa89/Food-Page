import React from "react";
import { categories } from "../Data/Data";
const Category = () => {
  return (
    <div className="max-w-[1640px] mx-auto px-6 pt-8">
      <h1 className="text-3xl text-orange-600 font-bold text-center">
        Top Rated Menu Items{" "}
      </h1>
      <div className="grid  sm:grid-cols-2 lg:grid-cols-4 gap-6 py-8">
        {/* Cards */}
        {categories.map((category, index) => {
          return (
            <div
              key={index}
              className="w-full h-max-[200px] bg-gray-100 flex justify-around items-center rounded-xl px-2 hover:scale-105 duration-300 shadow-sm "
            >
              <p className="font-bold">{category.name}</p>
              <img src={category.image} alt={category.name} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Category;
