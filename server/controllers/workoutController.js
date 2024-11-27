const mongoose = require('mongoose');
const Workout = require("../models/workoutModel");

// get all workouts
const getAllWorkouts = async (req,res) => {
    try{
        const workouts = await Workout.find({});
        res.send(200).json({workouts});
    }
    catch(err) {
        res.json({error : "cannot fetch documents !"});
    }
}

// get single workout

// add a workout
const createWorkout = async (req,res) => {
    const { title, reps, load } = req.body;
    try {
        const workout = await Workout.create({ title, reps, load });
        res.sendStatus(200).json(workout);
    }
    catch (err) {
        res.sendStatus(400).json({ error: err.message });
    }
}

module.exports = {
    getAllWorkouts,
    createWorkout
}