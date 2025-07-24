import express from "express";
import {
  getUser,
  userLogin,
  userRegister,
} from "../controller/authController.js";
import { protectUser } from "../middleware/authMiddleware.js";
const router = express.Router();

router.post("/register", userRegister);

router.post("/login", userLogin);

router.get("/login", protectUser, getUser);
export default router;
