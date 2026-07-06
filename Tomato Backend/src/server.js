import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import {connectDB,disconnectDB} from "./config/db.js";
import dns from "dns";
import { disconnect } from "cluster";

import authRoutes from "./routes/authRoutes.js";
import foodRoutes from "./routes/foodRoutes.js";
import resturantRoutes from "./routes/resturantRoutes.js";

dns.setServers(["1.1.1.1", "8.8.8.8"]);
dotenv.config();

const app=express();

// Connect to MongoDB
connectDB();

app.use(express.json());
app.use(express.urlencoded({extended:true}));


//API Routes
app.use("/auth",authRoutes);
app.use("/resturant", resturantRoutes);
app.use("/food",foodRoutes);


const PORT=5003;
const server=app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
});


// Handle unhandled promise rejections (e.g., database connection errors)
process.on("unhandledRejection", (err) => {
  console.error("Unhandled Rejection:", err);
  server.close(async () => {
    await disconnectDB();
    process.exit(1);
  });
});

// Handle uncaught exceptions
process.on("uncaughtException", async (err) => {
  console.error("Uncaught Exception:", err);
  await disconnectDB();
  process.exit(1);
});

// Graceful shutdown
process.on("SIGTERM", async () => {
  console.log("SIGTERM received, shutting down gracefully");
  server.close(async () => {
    await disconnectDB();
    process.exit(0);
  });
});