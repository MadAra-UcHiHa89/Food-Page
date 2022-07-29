import React from "react";

const HeadlineCard = () => {
  return (
    <div className="max-w-[1640px] mx-auto p-4 py-12 grid  md:grid-cols-3 gap-6 ">
      {/* Card */}
      <div className="  relative rounded-xl ">
        {/* OverLay */}
        <div className="absolute bg-black/50 w-full h-full rounded-xl text-white">
          <p className="text-2xl font-bold px-3 pt-5 text-clip whitespace-nowrap text-ellipsis ">
            Sun's Out, Bun's Out
          </p>
          <p className=" px-3 ">Through 12</p>
          <button className="border-white bg-white text-black absolute bottom-4  mx-3">
            Order Now
          </button>
        </div>
        <img
          className="max-h-[160px] md:max-h-[200px] w-full  object-cover rounded-xl "
          src="https://images.pexels.com/photos/551991/pexels-photo-551991.jpeg"
          alt="Food"
        />
      </div>
      {/* Card */}
      <div className="  relative rounded-xl ">
        {/* OverLay */}
        <div className="absolute bg-black/50 w-full h-full rounded-xl text-white">
          <p className="text-2xl font-bold px-3 pt-5 text-clip whitespace-nowrap text-ellipsis ">
            Sun's Out, Bun's Out
          </p>
          <p className=" px-3 ">Through 12</p>
          <button className="border-white bg-white text-black absolute bottom-4  mx-3">
            Order Now
          </button>
        </div>
        <img
          className="max-h-[160px] md:max-h-[200px] w-full  object-cover rounded-xl "
          src="https://images.pexels.com/photos/551991/pexels-photo-551991.jpeg"
          alt="Food"
        />
      </div>
      {/* Card */}
      <div className="  relative rounded-xl ">
        {/* OverLay */}
        <div className="absolute bg-black/50 w-full h-full rounded-xl text-white">
          <p className="text-2xl font-bold px-3 pt-5  whitespace-nowrap text-ellipsis ">
            Sun's Out, Bun's Out
          </p>
          <p className=" px-3 ">Through 12</p>
          <button className="border-white bg-white text-black absolute bottom-4  mx-3">
            Order Now
          </button>
        </div>
        <img
          className="max-h-[160px] md:max-h-[200px] w-full  object-cover rounded-xl "
          src="https://images.pexels.com/photos/551991/pexels-photo-551991.jpeg"
          alt="Food"
        />
      </div>
    </div>
  );
};

export default HeadlineCard;
