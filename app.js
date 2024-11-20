const express = require("express");
const app = express();
const path = require("path");

// Middleware to parse JSON (optional, but often needed)
app.use(express.json());

// Set up the view engine and views directory
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Index Route
app.get("/", (req, res) => {
    res.render("index"); // No need to specify .ejs
});

// Start the server
const PORT = 8080;
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
