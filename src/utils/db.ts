import mongoose from "mongoose";
import { logger } from "./logger";

const MONGODB_URI =
  process.env.MONGODB_URI ||
  "mongodb+srv://iamdeepthi621_db_user:MRP5PVDQGhkhxqeH@solvia.ba9ik6j.mongodb.net/?retryWrites=true&w=majority&appName=solvia";

export const connectDB = async () => {
  try {
    await mongoose.connect(MONGODB_URI);
    logger.info("Connected to MongoDB Atlas");
    console.log("Connected to DB:", mongoose.connection.name)
  } catch (error) {
    logger.error("MongoDB connection error:", error);
    process.exit(1);
  }
};
