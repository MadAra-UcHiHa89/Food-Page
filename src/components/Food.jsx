import React, { useState } from "react";
import { data } from "../Data/Data";

const Food = () => {
  const [filteredFood, setFilteredFood] = useState(data);
  const [price, setPrice] = useState("All");
  const [category, setCategory] = useState("All");

  const setPriceHandler = (selectedPrice) => {
    let newFilteredFood;
    if (selectedPrice === "All") {
      //   Checking if category is All
      if (category === "All") {
        newFilteredFood = data;
      } else {
        newFilteredFood = data.filter((data) => {
          return data.category === category;
        });
      }

      setPrice(selectedPrice);
      setFilteredFood(newFilteredFood);
    } else {
      //   Checking if category is All
      if (category === "All") {
        newFilteredFood = data.filter((food) => {
          return food.price === selectedPrice;
        });
      } else {
        newFilteredFood = data.filter((food) => {
          return food.price === selectedPrice && food.category === category;
        });
      }
      setPrice(selectedPrice);
      setFilteredFood(newFilteredFood);
    }
  };

  const setCategoryHandler = (selectedCategory) => {
    let newFilteredFood;
    if (selectedCategory === "All") {
      if (price === "All") {
        newFilteredFood = data;
      } else {
        newFilteredFood = data.filter((food) => {
          return food.price === price;
        });
      }
      console.log(newFilteredFood);
      setCategory("All");
      setFilteredFood([...newFilteredFood]);
    } else {
      // Checking if price is ALL
      if (price === "All") {
        newFilteredFood = data.filter((data) => {
          return data.category === selectedCategory;
        });
      } else {
        newFilteredFood = data.filter((data) => {
          return data.category === selectedCategory && data.price === price;
        });
      }
      setCategory(selectedCategory);
      setFilteredFood([...newFilteredFood]);
    }
  };
  return (
    <div className="max-w-[1640px] mx-auto px-4 py-12 ">
      <h1 className="font-bold text-4xl text-orange-600 text-center">
        Top Rated Menu Items
      </h1>
      {/* Filter List */}
      <div className="flex flex-col  lg:flex-row justify-between ">
        {/* Filter 1 */}
        <div>
          <p className="text-gray-700 font-bold">Filter Type</p>
          <div className="flex justify-between flex-wrap  max-w-[490px] w-full">
            <button
              onClick={() => {
                setCategoryHandler("All");
              }}
              className="border-orange-600 bg-white text-orange-600 px-4 py1 m-2 hover:bg-orange-600 hover:border-white hover:text-white "
            >
              ALL
            </button>
            <button
              onClick={() => {
                setCategoryHandler("burger");
              }}
              className="border-orange-600 bg-white text-orange-600 px-4 py1 m-2 hover:bg-orange-600 hover:border-white hover:text-white "
            >
              Burgers
            </button>
            <button
              onClick={() => {
                setCategoryHandler("pizza");
              }}
              className="border-orange-600 bg-white text-orange-600 px-4 py1 m-2 hover:bg-orange-600 hover:border-white hover:text-white "
            >
              Pizza
            </button>
            <button
              onClick={() => {
                setCategoryHandler("salad");
              }}
              className="border-orange-600 bg-white text-orange-600 px-4 py1 m-2 hover:bg-orange-600 hover:border-white hover:text-white "
            >
              Salads
            </button>
            <button
              onClick={() => {
                setCategoryHandler("chicken");
              }}
              className="border-orange-600 bg-white text-orange-600 px-4 py1 m-2 hover:bg-orange-600 hover:border-white hover:text-white "
            >
              Chicken
            </button>
          </div>
        </div>
        {/* Filter 2 */}
        <div className="flex flex-col">
          <p className=" text-gray-700 font-bold">Filter Price</p>
          <div className="flex justify-between flex-wrap max-w-[390px] w-full">
            <button
              onClick={() => {
                setPriceHandler("All");
              }}
              className="border-orange-600 bg-white text-orange-600 px-4 py1 m-2 hover:bg-orange-600 hover:border-white hover:text-white "
            >
              All
            </button>
            <button
              onClick={() => {
                setPriceHandler("$");
              }}
              className="border-orange-600 bg-white text-orange-600 px-4 py1 m-2 hover:bg-orange-600 hover:border-white hover:text-white "
            >
              $
            </button>
            <button
              onClick={() => {
                setPriceHandler("$$");
              }}
              className="border-orange-600 bg-white text-orange-600 px-4 py1 m-2 hover:bg-orange-600 hover:border-white hover:text-white "
            >
              $$
            </button>
            <button
              onClick={() => {
                setPriceHandler("$$$");
              }}
              className="border-orange-600 bg-white text-orange-600 px-4 py1 m-2 hover:bg-orange-600 hover:border-white hover:text-white "
            >
              $$$
            </button>
            <button
              onClick={() => {
                setPriceHandler("$$$$");
              }}
              className="border-orange-600 bg-white text-orange-600 px-4 py1 m-2 hover:bg-orange-600 hover:border-white hover:text-white "
            >
              $$$$
            </button>
          </div>
        </div>
      </div>

      {/* Displaying Foods  */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
        {filteredFood.map((food, index) => {
          return (
            <div
              key={index}
              className="border shadow-lg hover:scale-[105%] duration-500 rounded-xl"
            >
              <img
                src={food.image}
                alt={food.name}
                className="w-full h-[200px] object-cover rounded-t-xl"
              />
              <div className="rounded-b-xl flex justify-between px-3 py-3 ">
                <p className="text-md font-bold">{food.name}</p>
                <p>
                  {" "}
                  <span className="bg-orange-600 text-white rounded-lg px-1 py-1">
                    {food.price}
                  </span>{" "}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Food;
