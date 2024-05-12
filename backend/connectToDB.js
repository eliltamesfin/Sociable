import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;

const connectToDB = async () => {
  try {
    const conn = await mongoose.connect(MONGODB_URI);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Could not connect to MongoDB: ${error.message}`);
    process.exit(1); // EXIT process with failure
  }
};

export default connectToDB;