import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL);
    console.log("MongoDB is connected successfully");
  } catch (error) {
    console.log("MongoDB is not Connected", error.message);
  }
};
export default connectDB;
