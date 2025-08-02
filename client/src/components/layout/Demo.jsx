import React from "react";
import { Outlet } from "react-router-dom";
import { useState } from "react";
import Sidebar from "./Sidebar";
import Menu from "../smallitems/Menu";
import useAuth from "../../hooks/useAuth.js";
const Demo = () => {
  const [showSidebar, setShowSidebar] = useState(true);
  let [user, setUser] = useState({});

  useAuth(setUser);
  return (
    <div className="grid grid-cols-[300px_1fr] ">
      <Sidebar
        showSidebar={showSidebar}
        setShowSidebar={setShowSidebar}
        user={user}
      />
      <Menu showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
      <Outlet />
    </div>
  );
};

export default Demo;
