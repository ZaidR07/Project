import express from 'express';
import bcrypt from 'bcrypt';
import { UserModel } from '../models/user.js';

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

        return res.json({ message: "User registered successfully" });
    } catch (error) {
        console.error("Error in signup:", error);
        return res.status(500).json({ message: "Internal server error" });
    }
});

export { router };
    

