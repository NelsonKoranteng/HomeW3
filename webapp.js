// Require express
const express = require("express");

// App object
const app = express();

// Main page
app.get("/", function(req, res) {
    res.send("Welcome to my first Node.js web site.");
});

// Contact page
app.get("/contact", function(req, res) {
    res.send("My name is ..., and ");
});

// Bio page
app.get("/bio", function(req, res) {
    res.send("I am a developer interested in building applications with Node.js.");
});

// Listen on port 8002
app.listen(8002, function() {
    console.log("Server is running on http://localhost:8002");
});
app.get("/", function(req, res) {
    res.send(`
        <h1>Welcome to my first Node.js web site.</h1>
        <p><a href='/contact'>Contact</a></p>
        <p><a href='/bio'>Bio</a></p>
    `);
});
