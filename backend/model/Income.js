import mongoose from "mongoose";

const IncomeSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "users", required: true },
  icon: { type: String },
  incomeSource: { type: String, required: true, unique: true },
  amount: { type: Number, required: true },
  date: { type: Date, default: Date.now() },
});

const IncomeModel = mongoose.model("income", IncomeSchema);

export default IncomeModel;
