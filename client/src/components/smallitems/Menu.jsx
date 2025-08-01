import React from "react";
import { LuMenu } from "react-icons/lu";

const Menu = ({ showSidebar, setShowSidebar }) => {
  return (
    <button onClick={() => setShowSidebar(true)}>
      <div className="bg-primary-alt rounded-xl w-12 h-12 flex justify-center items-center hover:bg-primary transition-all duration-300">
        <LuMenu className="text-3xl text-secondary" />
      </div>
    </button>
  );
};

export default Menu;
