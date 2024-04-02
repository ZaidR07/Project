import express from "express";
import { SignupModel } from '../models/Signup.js';
import { UserModel } from '../models/User.js';

const Userrouter = express.Router();

Userrouter.post('/Userinfo', async (req, res) => {
    try {
        const { email,gender, age, height, weight, waist, diet, activity, experience } = req.body; 

        
        const newUser = new UserModel({
            email,
            gender,
            age,
            height,
            weight,
            waist,
            diet,
            activity,
            experience
        });

        // Save the new user to the database
        await newUser.save();

        return res.status(200).json({
            status: true,
            message: "User info updated Successfully",
            user: {
                email: newUser.email
            }
        });
    } catch (error) {
        console.error("Error in updating", error);
        return res.status(500).json({ message: "Internal server error" });
    }
});

export { Userrouter };
