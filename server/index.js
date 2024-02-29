import express from "express";
import cors from 'cors';
import { Signuprouter } from "./routes/Signup.js";
import { Userrouter } from "./routes/User.js";
import {Bmrrouter} from "./routes/Bmr.js";
import mongoose from "mongoose";
import dotenv from 'dotenv'
dotenv.config();




const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true
}));

app.use(express.json());
app.use(Signuprouter);
app.use(Userrouter);
app.use(Bmrrouter);

// app.use(cookieParser());

mongoose.connect("mongodb://127.0.0.1:27017/Fitness365")
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    })
    .catch(error => {
        console.error("Error connecting to the database:", error);
    });
