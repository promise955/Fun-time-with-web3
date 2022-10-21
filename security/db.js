require('dotenv').config()
const mongoose = require("mongoose");
const mongoDB = process.env.CONNECTION_STRING || "mongodb://127.0.0.1/wallet";
mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true });

// Get the default connection
const db = mongoose.connection;

// Bind connection to error event (to get notification of connection errors)
db.on("error", console.error.bind(console, "MongoDB connection error:"));
