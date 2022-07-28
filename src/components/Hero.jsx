import React from "react";

const Hero = () => {
  return (
    <div className="max-w-[1640px] mx-auto p-4 ">
      {" "}
      {/* Since for big monitors we do not want the componenet to strect the whole width of screen */}
      <div className="max-h-[500px] relative ">
        {/* OverLay heading part */}
        <div className="absolute w-full h-full max-h-[500px] text-gray-200 bg-black/40 flex flex-col justify-center items-start ">
          <h1 className="px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold">
            The <span className="text-orange-500">Best</span>
          </h1>
          <h1 className="px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold">
            <span className="text-orange-500">Foods</span> Delivered{" "}
          </h1>
        </div>
        <img
          src="https://images.pexels.com/photos/1639562/pexels-photo-1639562.jpeg"
          alt="Food Image"
          className="w-full h-full object-cover max-h-[500px]"
        />
      </div>
    </div>
  );
};

export default Hero;
