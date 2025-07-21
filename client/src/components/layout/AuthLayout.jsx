import React from "react";
import image from "../../assets/images/login_image.png";
const AuthLayout = ({ children }) => {
  return (
    <div className="flex w-full bg-primary">
      <div className="w-[60vw] h-screen">
        <div className="flex justify-center items-center h-[30vh]">
          <h2
            className="text-6xl font-bold text-tertiary"
            style={{
              WebkitTextStroke: "2px #1ce480",
              WebkitTextFillColor: "transparent",
            }}
          >
            Expenses Tracker
          </h2>
        </div>
        {children}
      </div>
      <div className="w-[40vw] h-screen flex justify-center items-center">
        <div className="">
          <img src={image} alt="Loading..." />
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
