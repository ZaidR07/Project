import express from "express";
import cors from 'cors';
import { Signuprouter } from "./routes/Signup.js";
import { Userrouter } from "./routes/User.js";
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
const PORT = process.env.PORT

const allowedOrigins = ['https://fitness365.vercel.app'];
app.use(cors({
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true
}));

// Handling preflight requests
app.options('*', cors({
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
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
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    })                                                              
    .catch(error => {
        console.error("Error connecting to the database:", error);
    });
