require("dotenv").config();
const express = require("express")
const mongoose = require("mongoose")
const authRoutes = require("./authentication/routes")
const cors = require("cors")

const app = express()
const DB = process.env.MONGO_URI


// Middleware
app.use(express.json());

// Enable CORS for your frontend origin
app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true
  }));

// Routes
app.use("/api/user", authRoutes)

// Database Connection
mongoose
    .connect(DB, {
        serverSelectionTimeoutMS: 5000,
    })
    .then(() => {
        console.log("Database connected for EmailSender");
    })
    .catch((err) => {
        console.log(`Database error: ${err}`);
    });

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));