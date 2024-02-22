import mongoose from "mongoose";
import colors from "colors";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URL);
    console.log("Connected to MongoDB Database".bgMagenta.white);
  } catch (error) {
    console.log("Error in connecting DB".bgRed.white, error);
  }
};

export default connectDB;
