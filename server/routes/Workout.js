import express from "express";
import { WorkoutModel } from "../models/Workout.js";
import cloudinary from "../utils/cloudinary.js"; // Import Cloudinary correctly
import multer from "multer";
import path from "path";

const Workoutrouter = express.Router();

const storage = multer.diskStorage({});

// Update multer upload configuration to handle Cloudinary
const upload = multer({ storage });

Workoutrouter.post("/Workoutadd", upload.single('video'), async (req, res) => {
  const { name, reps } = req.body;

  try {
    // Upload image to Cloudinary
    const result = await cloudinary.uploader.upload(req.file.path);

    const newWorkout = new WorkoutModel({
      name,
      reps,
      video: result.secure_url // Use the secure URL provided by Cloudinary
    });

    await newWorkout.save();
    

    return res.json({
      message: "Workout Added Successfully",
      status: true
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal server error" });
  }
});

Workoutrouter.get("/Workoutget", async (req, res) => {
  try {
    const workout = await WorkoutModel.find();
    console.log("Check this: ", workout);
    return res.json(workout);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal server error" });
  }
});

export { Workoutrouter };
