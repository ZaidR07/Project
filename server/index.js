import express from "express";
import cors from 'cors';
import { Signuprouter } from "./routes/Signup.js";
import { Userrouter } from "./routes/user.js";
import {Bmrrouter} from "./routes/Bmr.js";
import { Levelrouter } from "./routes/Level.js";
import {Adminrouter} from "./routes/Admin.js";
import { Productrouter } from "./routes/Product.js";
import { Workoutrouter } from "./routes/Workout.js";
import mongoose from "mongoose";
import dotenv from 'dotenv'
dotenv.config();



const DB = process.env.DB;
const app = express();



app.use(cors({
  origin: ['https://fitness365.vercel.app', 'http://localhost:3000'],  // Allow specific origins
  credentials: true
}));



app.use(express.json());
app.use(Signuprouter);
app.use(Userrouter);
app.use(Bmrrouter);
app.use(Levelrouter);
app.use(Adminrouter);
app.use(Productrouter);
app.use(Workoutrouter);

app.use(express.static('public'));



// app.use(cookieParser());

mongoose.connect(DB)
    .then(() => {
        console.log("Connected to database")
    })                                                              
    .catch(error => {
        console.error("Error connecting to the database:", error);
    });