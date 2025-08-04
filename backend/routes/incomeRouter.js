import express from "express";

import { newIncomeSource } from "../controller/incomeController.js";
const router = express.Router();

router.post("/add", newIncomeSource);

export default router;
