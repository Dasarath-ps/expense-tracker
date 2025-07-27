import mongoose from "mongoose";

export const connectionDb = () => {
  try {
    mongoose.connect(process.env.MONGO_URL);
    console.log(`Databse is connected ${process.env.DATABASE_NAME}`);
  } catch (error) {
    console.log("Error", error);
  }
};
