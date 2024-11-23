const express = require("express");

const router = express.Router();

// Get all workouts
router.get("/", (req,res) => {
    res.json({mssg : "GET all workouts"});
});

// Get single workout 
router.get("/:id", (req,res) => {
    res.json({mssg : "GET a single workout"});
    });

// Post a workout 
router.post("/",(req,res) => {
    res.json({mssg : "POST a workout"});
});

// Delete a workout 
router.delete("/:id", (req, res) => {
    res.json({mssg : "Detele a single Workout"});
})

router.patch("/:id", (req,res) => {
    res.json({mssg : "Update a workout"});
});

module.exports = router;