import express from 'express';
import bcrypt from 'bcrypt';
import { UserModel } from '../models/user.js';
import jwt from 'jsonwebtoken';
import { randomInt } from 'crypto'



const router = express.Router();

router.post('/signup', async (req, res) => {
    const { username, email, password } = req.body;
    try {
        // Check if the user already exists
        const User = await UserModel.findOne({ email });
        if (User) {
            return res.json({ message: "User already exists" });
        }

        // Hashing  the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create a new user
        const newUser = new UserModel({
            username,
            email,
            password: hashedPassword
        });

        // Save the new user
        await newUser.save();

        return res.json({
            status: true,
            message: "User registered successfully",
            user: {
                _id: newUser._id,
                username: newUser.username,
                email: newUser.email

            }
        });
    } catch (error) {
        console.error("Error in signup:", error);
        return res.status(500).json({ message: "Internal server error" });
    }
});

router.post('/login', async (req, res) => {
    const { email, password } = req.body;
    const user = await UserModel.findOne({ email })
    if (!user) {
        return res.json({
            message: "User is not registered"
        })
    }
    const validPassword = await bcrypt.compare(password, user.password)
    if (!validPassword) {
        return res.json({
            message: "password is incorrect"
        })
    }

    const token = jwt.sign({ username: user.username }, process.env.KEY, { expiresIn: '1h' })
    res.cookie('token', token, { httpOnly: true, maxAge: 360000 })
    return res.json({
        message: "Login Succesfull",
        status: true,
    })


})

router.post('/Forgot_password', (req, res) => {
    try {
        const { email } = req.body;
        const otp = randomInt(100000, 1000000)
    }
    catch{
        
    }
    
    

})

export { router };


