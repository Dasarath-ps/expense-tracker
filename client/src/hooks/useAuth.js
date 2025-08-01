import React, { useState } from "react";
import { useEffect } from "react";
import { userLoggedIn } from "../utils/helper.js";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import axios from "axios";
const useAuth = (setUser) => {
  const navigator = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!userLoggedIn()) {
      navigator("/login");
    }
    if (token) {
      const decoded = jwtDecode(token);
      if (decoded.exp * 1000 < Date.now()) {
        localStorage.removeItem("token");
        navigator("/login");
      } else {
        axios
          .get("http://localhost:8000/auth/login", {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          })
          .then((res) => {
            setUser(res.data);
            //console.log(res.data);
          })
          .catch((err) => {
            console.log("Error", err.data);
          });
      }
    }
  }, [navigator, setUser]);
};

export default useAuth;
