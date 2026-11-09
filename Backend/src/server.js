import dotenv from "dotenv";
import express from "express";
import db from "./db.js";
dotenv.config();

const app = express();
app.use(express.json());



app.listen(3000, (req, res) => {
    console.log("Server is running on port 3000");
});
