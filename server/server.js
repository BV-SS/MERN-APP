require('dotenv').config()
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const workoutRoutes = require('./routes/workouts');
const userRoutes = require('./routes/userRoutes');

const app = express();

// Connect to DB
mongoose.connect("mongodb://localhost:27017/Worklist")
    .then(() => {
        // Listen to requests
        app.listen(process.env.PORT, () => {
            console.log(`Connected to DB & Listing to requests on port ${process.env.PORT} ...`)
        })
    })
    .catch((err) => {
        console.log("Cannot connect to DB !", err);
    })

// Middleware
app.use(express.json());

app.use(cors({origin : "http://localhost:3000"}))

// Note : we have to use next() method at the end of this middleware in order to move to next bit of code else the execution will be stuck here.
app.use((req,res,next) => {
    const path = req.path
    const host = req.headers.host
    const method = req.method
    const timeStamp = new Date().toString()

    console.log(`[${timeStamp}] : ${host} ${path} ${method}`);
    next();
})

// Routes
app.use("/api/workouts", workoutRoutes);
app.use("/api/user",userRoutes);

