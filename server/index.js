import express from "express";
import cors from 'cors';
import { router } from "./routes/user.js";
import mongoose from "mongoose";


const app = express();
const PORT = 4000;

app.use(cors());
app.use(express.json()); 
app.use(router);

mongoose.connect("mongodb://127.0.0.1:27017/Signup_info")
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    })
    .catch(error => {
        console.error("Error connecting to the database:", error);
    });
