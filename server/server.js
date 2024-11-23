require('dotenv').config()
const express = require('express');

const workoutRoutes = require('./routes/workouts');

const app = express();

// Middleware
app.use(express.json());

// Note : we have to use next() method at the end of this middleware in order to move to next bit of code else the execution will be stuck here.
app.use((req,res,next) => {
    console.log(req.path, req.method);
    next();
})

// Routes
app.use("/api/workouts", workoutRoutes);

app.listen(process.env.PORT, () => {
    console.log(`Listing to requests on port ${process.env.PORT} ...`)
})