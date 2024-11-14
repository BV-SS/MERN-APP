require('dotenv').config()
const express = require('express');

const app = express();

// Middleware
// Note : we have to use next() method at the end of this middleware in order to move to next bit of code else the execution will be stuck here.
app.use((req,res,next) => {
    console.log(req.path, req.method);
    next();
})

// Routes
app.get("/",(req,res) => {
    res.send("Welcome to MERN App");
})

app.listen(process.env.PORT, () => {
    console.log(`Listing to requests on port ${process.env.PORT} ...`)
})