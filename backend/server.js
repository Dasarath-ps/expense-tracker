import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
import { connectionDb } from "./config/database.js";
import authRouter from "./routes/authRouter.js";
dotenv.config();
const app = express();
app.use(
  cors({
    origin: process.env.CLIENT_URL || "*",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

app.use(express.json());

// mongodb connection

connectionDb();

// api calling

app.use("/auth", authRouter);

app.use("/uploads", express.static(path.join(__dirname, "uploads")));
// app listening

const PORT = process.env.PORT || 5000;

app.listen(PORT, () =>
  console.log(`Server is runnning on the port number ${PORT}`)
);
