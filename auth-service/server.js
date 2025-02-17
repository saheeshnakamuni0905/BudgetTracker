require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const app = express();
const userRoutes = require("");
const PORT = process.env.PORT || 3000;

app.use(express.json());

mongoose.connect(process.env.MONGO_URI, {useNewUrlParser : true, useUnifiedTopology : true })
        .then(()=>console.log("MongoDB connected"))
        .catch((err)=>console.error("MongoDB connection failed: ",err));

app.use("/api",userRoutes);

app.listen(PORT, ()=>console.log(`Server is running on ${PORT}`));