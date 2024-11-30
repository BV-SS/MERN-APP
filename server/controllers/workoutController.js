const mongoose = require('mongoose');
const Workout = require("../models/workoutModel");

// get all workouts
const getAllWorkouts = async (req, res) => {
    try {
        const workouts = await Workout.find({});
        res.status(200).json({ workouts });
    }
    catch (err) {
        res.json({ error: "cannot fetch documents !" });
    }
}

// get single workout
const getWorkout = async (req, res) => {
    const id = req.params.id;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ message: "Not a valid object ID !" });
    }

    const workout = await Workout.findById(id);

    if (!workout) {
        return res.status(404).json({ message: "No such workout" });
    }

    res.status(200).json(workout);
}

// add a workout
const createWorkout = async (req, res) => {
    const { title, reps, load } = req.body;
    try {
        const workout = await Workout.create({ title, reps, load });
        res.status(200).json(workout);
    }
    catch (err) {
        res.status(400).json({ error: err.message });
    }
}

// Delete a workout 
const deleteWorkout = async (req,res) => {
    const {id} = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({message : "Not a valid ID !"});
    }

    const workout = await Workout.findOneAndDelete({_id : id});

    if(!workout){
        return res.status(404).json({message : "No such workout"});
    }

    res.status(200).json(workout);
}

// Update a workout
const updateWorkout = async (req,res) => {
    const id = req.params.id;

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({message : "Not a valid ID !"});
    }

    const workout = await Workout.findOneAndUpdate({_id : id}, { ...req.body }, {new : true});

    if(!workout){
        return res.status(404).json({message : "No such document"});
    }

    res.status(200).json(workout);
}

module.exports = {
    getAllWorkouts,
    getWorkout,
    createWorkout,
    deleteWorkout,
    updateWorkout
}