import express from "express";
import { WorkoutModel } from "../models/Workout.js";
import cloudinary from "../utils/cloudinary.js";
import multer from "multer";

const Workoutrouter = express.Router();

// Update multer upload configuration to handle Cloudinary
const upload = multer();

Workoutrouter.post("/Workoutadd", upload.single('video'), async (req, res) => {
  console.log("Request file:", req.file); // Log the file data from the request

  const { name, reps } = req.body;

  try {
    // Upload video to Cloudinary
    const result = await cloudinary.uploader.upload(req.file.path, {
      resource_type: "video" // Specify the resource type as video
    });

    // Create a new WorkoutModel instance
    const newWorkout = new WorkoutModel({
      name,
      reps,
      video: result.secure_url // Use the secure URL provided by Cloudinary
    });

    // Save the new workout to the database
    await newWorkout.save();

    // Return success response to the client
    return res.json({
      message: "Workout Added Successfully",
      status: true
    });
  } catch (error) {
    console.error("Error uploading video to Cloudinary:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
});

Workoutrouter.get("/Workoutget", async (req, res) => {
  try {
    // Retrieve all workouts from the database
    const workout = await WorkoutModel.find();
    console.log("Check this: ", workout);
    return res.json(workout);
  } catch (error) {
    console.error("Error fetching workouts from the database:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
});

export { Workoutrouter };
