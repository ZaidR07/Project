import express from "express";
import cors from 'cors';
import { router } from "./routes/user.js";
import mongoose from "mongoose";
import dotenv from 'dotenv'
dotenv.config();
import cookieParser from 'cookie-parser'



const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true
}));

app.use(express.json());
app.use(router);
app.use(cookieParser);

mongoose.connect("mongodb://127.0.0.1:27017/Fitness365")
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    })
    .catch(error => {
        console.error("Error connecting to the database:", error);
    });
