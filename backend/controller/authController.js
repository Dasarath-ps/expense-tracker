import userModel from "../model/User.js";
import jsonwebtoken from "jsonwebtoken";
const generateToken = (id) => {
  return jsonwebtoken.sign({ id }, process.env.JSON_KEY, { expiresIn: "1hr" });
};
export const userLogin = async (req, res) => {
  if (!req) return res.statur(400).json({ message: "All field are required" });
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      res.status(400), json({ message: "All field are required." });
    }
    const user = await userModel.findOne({ email: email });
    if (!user)
      return res.status(400).json({ message: "User is not Registered" });
    res.status(200).json({
      id: user._id,
      user: user,
      token: generateToken(user._id),
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
export const userRegister = async (req, res) => {
  console.log(req.body);
  if (!req) return res.statur(400).json({ message: "All field are required" });

  try {
    const { fullName, email, password } = req.body;
    if (!fullName || !email || !password) {
      res.status(400), json({ message: "All field are required." });
    }

    const existingUser = await userModel.findOne({ email: email });
    if (existingUser)
      return res.status(400).json({ message: "User is already existed" });
    const user = await userModel.create({
      fullName: fullName,
      email: email,
      password: password,
    });
    console.log(user);
    res.status(201).json({
      message: "Sucsses",
      id: user._id,
      user: user,
      token: generateToken(user._id),
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
export const getUser = async (req, res) => {
  try {
    return res.status(200).json({ user: req.user });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
