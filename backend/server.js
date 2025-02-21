require("dotenv").config();
const express = require("express")
const mongoose = require("mongoose")


const app = express()
const DB = process.env.MONGO_URI


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