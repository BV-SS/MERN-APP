const express = require("express");
const router = express.Router();

const {getAllWorkouts,getWorkout, createWorkout,deleteWorkout, updateWorkout} = require("../controllers/workoutController")

// Get all workouts
router.get("/",getAllWorkouts);

// Get single workout 
router.get("/:id", getWorkout);

// Post a workout 
router.post("/", createWorkout);

// Delete a workout 
router.delete("/:id", deleteWorkout)

router.patch("/:id", updateWorkout);

module.exports = router;