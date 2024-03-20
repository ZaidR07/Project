import express from "express";
import { WorkoutModel } from "../models/Workout.js";
import multer from "multer";
import path from "path";

const Workoutrouter = express.Router();

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'public/Workoutvideos')
  },
  filename: (req, file, cb) => {
    cb(null, file.fieldname + "_" + Date.now() + path.extname(file.originalname))
  }
});

const upload = multer({ storage });


Workoutrouter.post("/Workoutadd", upload.single('video'), async (req, res) => {
  const { name, reps} = req.body;
  const video = req.file.filename;
  console.log(video);
  try {
    const newWorkout = new WorkoutModel({
      name,
      reps,
      video
      

    });
    await newWorkout.save();
    return res.json({
      message : "Workout Added Successfully",
      status : true
    })


  }
  catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal server error" });
  }
})

Workoutrouter.get("/Workoutget",async (req,res)=>{
  const workout = await WorkoutModel.find();
  console.log("Check this : " + workout);
  return res.json(workout);

})

export { Workoutrouter };