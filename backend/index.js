import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import userRoutes from "./routes/userRoutes.js";
import authRoute from "./routes/authRoute.js";
import cors from "cors";

//dotenv config
dotenv.config();

connectDB();

const app = express();
app.use(express.json());
app.use(cors());

//routes
app.use("/api/user", userRoutes);
app.use("/api/auth", authRoute);

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal server Error";
  return res.status(statusCode).json({
    success: false,
    message,
    statusCode,
  });
});

app.listen(3000, () => {
  console.log('Server is listening on port 3000!');
  
});

