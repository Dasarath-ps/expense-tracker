import React, { useState } from "react";
import { LuLayoutDashboard, LuLogOut } from "react-icons/lu";
import { RiMoneyRupeeCircleFill } from "react-icons/ri";
import { TbPigMoney } from "react-icons/tb";
import { NavLink } from "react-router-dom";
import { FaChevronCircleLeft } from "react-icons/fa";
const Sidebar = ({ showSidebar, setShowSidebar, user }) => {
  //const [profilePicture, setProfilePicture] = useState(null);
  return (
    <div
      className={
        `bg-primary flex border-2 border-r-tertiary flex-col gap-[20px] w-[300px]  h-screen transition-all duration-500  `
        //   ${
        //    showSidebar ? "left-[0]" : "left-[-300px]"
        // }
      }
    >
      <div className="flex flex-col items-end text-secondary ">
        <button onClick={() => setShowSidebar(false)}>
          <div className="py-3 px-3 bg-primary hover:bg-primary-alt rounded-full">
            <FaChevronCircleLeft className="text-3xl" />
          </div>
        </button>
      </div>
      <div className="flex justify-center items-center flex-col gap-3">
        <label className="text-secondary font-bold" htmlFor="username">
          {user.user ? user.user.fullName : ""}
        </label>
        <img
          className="w-20 h-20 rounded-full object-cover border-2 border-tertiary"
          src={user.user ? user.user.profilePicture : null}
          alt="Profile"
        />
      </div>
      <NavLink to={"/dashboard"}>
        {({ isActive }) => {
          return (
            <Title
              value={"Dashboard"}
              icon={<LuLayoutDashboard />}
              active={isActive ? "text-tertiary text-2xl" : ""}
            />
          );
        }}
      </NavLink>
      <NavLink to={"/income"}>
        {({ isActive }) => {
          return (
            <Title
              value={"Income"}
              icon={<TbPigMoney />}
              active={isActive ? "text-tertiary text-2xl" : ""}
            />
          );
        }}
      </NavLink>
      <NavLink to={"/expenses"}>
        {({ isActive }) => {
          return (
            <Title
              value={"Expenses"}
              icon={<RiMoneyRupeeCircleFill />}
              active={isActive ? "text-tertiary text-2xl" : ""}
            />
          );
        }}
      </NavLink>
      <NavLink to={"/logout"}>
        {({ isActive }) => {
          return (
            <Title
              value={"Logout"}
              icon={<LuLogOut />}
              active={isActive ? "text-tertiary text-2xl" : ""}
            />
          );
        }}
      </NavLink>
    </div>
  );
};

export default Sidebar;

const Title = ({ value, icon, active }) => {
  return (
    <div
      className={`flex justify-center items-center gap-4 text-xl text-secondary bg-primary rounded-3xl font-semibold py-8 hover:bg-primary-alt hover:text-2xl hover:text-tertiary transition-all duration-500 ${active}`}
    >
      {value}
      {icon}
    </div>
  );
};

const image = ({ imageUrl }) => {
  <div
    className={`flex justify-center items-center gap-4 text-xl text-secondary bg-primary rounded-3xl font-semibold py-8 hover:bg-primary-alt hover:text-2xl hover:text-tertiary transition-all duration-500 ${active}`}
  >
    <img src={imageUrl} alt="" />
  </div>;
};
