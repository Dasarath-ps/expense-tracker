import React from "react";
import { Route, Routes, useNavigate } from "react-router-dom";

import Login from "./pages/Auth/Login.jsx";
import Register from "./pages/Auth/Register.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import { useEffect, useState } from "react";
import Income from "./pages/Income.jsx";
import Expenses from "./pages/Expenses.jsx";
import Logout from "./pages/Logout.jsx";
import NotFound from "./components/layout/NotFound.jsx";
import Demo from "./components/layout/Demo.jsx";
import useAuth from "./hooks/useAuth.js";
const App = () => {
  let [user, setUser] = useState({});

  useAuth(setUser);
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/" element={<Demo user={user} />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/income" element={<Income />} />
        <Route path="/expenses" element={<Expenses />} />
        <Route path="/logout" element={<Logout />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;
