const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');

// Set view engine to EJS
app.set("view engine", 'ejs');

// Use middleware to parse JSON and URL-encoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files from the "public" folder
app.use(express.static(path.join(__dirname, "public")));

// Define a route for the home page
app.get('/', (req, res) => {
    // Read the contents of the "files" directory
    fs.readdir('./files', (err, files) => {
        
        // Render the index page regardless of whether the directory was read successfully or not
        res.render("index");
    });
});

// Start the server
app.listen(3004, () => {
    console.log("Server is running on port 3004");
});
