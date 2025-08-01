import React from "react";
import image from "../../assets/images/404.png";
const NotFound = () => {
  return (
    <div className="bg-primary flex flex-col justify-center items-center h-screen w-full">
      <label className="text-3xl text-secondary " htmlFor="404">
        404 Not Found
      </label>
      <img className="w-40 h-40 rounded-2xl" src={image} alt="" />
    </div>
  );
};

export default NotFound;
