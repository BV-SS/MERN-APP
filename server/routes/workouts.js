const express = require("express");
const router = express.Router();

const {getAllWorkouts,getWorkout, createWorkout} = require("../controllers/workoutController")

// Get all workouts
router.get("/",getAllWorkouts);

// Get single workout 
router.get("/:id", getWorkout);

// Post a workout 
router.post("/", createWorkout);

// Delete a workout 
router.delete("/:id", (req, res) => {
    res.json({ mssg: "Detele a single Workout" });
})

router.patch("/:id", (req, res) => {
    res.json({ mssg: "Update a workout" });
});

module.exports = router;