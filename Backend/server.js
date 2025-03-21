import express from "express";
import connectDB from "./config/db.js";
import dotenv from "dotenv";
import cors from "cors";  // Import CORS
import urlRoutes from "./routes/url.routes.js";

dotenv.config();
const app = express();
const port = process.env.PORT || 5000;

// Enable CORS for all origins
app.use(cors());

// Middleware to parse JSON
app.use(express.json());

// URL Routes
app.use("/", urlRoutes);

// Connect to MongoDB
connectDB();

// Start Server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
