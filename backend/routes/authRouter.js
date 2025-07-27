import express from "express";
import {
  getUser,
  userLogin,
  userRegister,
} from "../controller/authController.js";
import { protectUser } from "../middleware/authMiddleware.js";
import uploads from "../middleware/uploadMiddleware.js";
const router = express.Router();

router.post("/register", userRegister);

router.post("/login", userLogin);

router.get("/login", protectUser, getUser);

router.post("/upload-image", uploads.single("image"), (req, res, next) => {
  if (!req.file)
    return res.status(400).json({ message: "Not File is uploaded" });

  try {
    const imageUrl = `${req.protocol}://${req.get("host")}/uploads/${
      req.file.filename
    }`;
    res.status(200).json({
      message: "Sucssesfully Uploaded",
      imageUrl: imageUrl,
    });
  } catch (error) {
    res.status(500).json({ message: error });
  }
});

export default router;
