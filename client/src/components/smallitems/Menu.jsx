import React from "react";
import { LuMenu } from "react-icons/lu";

const Menu = ({ showSidebar, setShowSidebar, user }) => {
  return (
    <div className="flex justify-between mt-2">
      <div
        className="bg-primary-alt rounded-xl w-12 h-12 flex justify-center items-center hover:bg-primary transition-all duration-300"
        onClick={() => setShowSidebar(true)}
      >
        <LuMenu className="text-3xl text-secondary" />
      </div>
      <div className="">
        <img
          src={user.user ? user.user.profilePicture : null}
          alt=""
          className="w-12 h-12 rounded-full object-cover border-2 border-secondary
          "
        />
      </div>
    </div>
  );
};

export default Menu;
