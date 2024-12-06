import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI || "");
    console.log("connected to mongodb successfully", conn.connection.host);
  } catch (err: any) {
    console.log("Error connecting to db: ", err.message);
  }
};

export default connectDB;
