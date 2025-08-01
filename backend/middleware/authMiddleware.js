import { json } from "express";
import jsonwebtoken from "jsonwebtoken";
import userModel from "../model/User.js";

export const protectUser = async (req, res, next) => {
  let token = req.headers.authorization?.split(" ")[1];
  if (!token) {
    return res.status(500).json({ message: "user is not logged in." });
  }
  const decoded = jsonwebtoken.verify(token, process.env.JSON_KEY);
  req.user = await userModel.findById(decoded.id).select("-password");
  next();
};
