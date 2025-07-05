import mongoose from "mongoose";
import { ENV } from "./env.js";

export const connectDB = async () => {
  try {
    await mongoose.connect(ENV.MONGO_URI);
    console.log("✅ Connected to MongoDB");
  } catch (error) {
    console.error("❌ Error connecting to MongoDB:");
    console.error(error.message);  // en önemlisi bu
    console.error(error.stack);    // teknik detaylar
    process.exit(1);
  }
};
