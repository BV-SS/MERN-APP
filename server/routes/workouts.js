const express = require("express");
const router = express.Router();
const Workout = require("../models/workoutModel");

// Get all workouts
router.get("/", (req, res) => {
    res.json({ mssg: "GET all workouts" });
});

// Get single workout 
router.get("/:id", (req, res) => {
    res.json({ mssg: "GET a single workout" });
});

// Post a workout 
router.post("/", async (req, res) => {
    const { title, reps, load } = req.body;
    try {
        const workout = await Workout.create({ title, reps, load });
        res.status(200).json(workout);
    }
    catch (err) {
        res.status(400).json({ error: err.message });
    }
});

// Delete a workout 
router.delete("/:id", (req, res) => {
    res.json({ mssg: "Detele a single Workout" });
})

router.patch("/:id", (req, res) => {
    res.json({ mssg: "Update a workout" });
});

module.exports = router;