import express from "express";
import { UserModel } from "../models/User.js";
const Adminrouter = express.Router();

Adminrouter.get("/Admin", async (req, res) => {
    try {
        const users = await UserModel.find();

        const totalusers = users.length;
        res.json({ totalusers,status : true
         });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

export  {Adminrouter};