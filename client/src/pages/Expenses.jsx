import React, { useState } from "react";
import Sidebar from "../components/layout/Sidebar";
import Menu from "../components/smallitems/Menu";
export const Expenses = () => {
  const [showSidebar, setShowSidebar] = useState(true);

  return (
    <div className="grid grid-cols-[300px_1fr]">
      <Sidebar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
      <Menu showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
    </div>
  );
};
export default Expenses;
