const express = require("express");
const path = require("path");
const app = express();

// Middleware to serve static files
app.use(express.static(path.join(__dirname, "public")));


// Set up the view engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Route to render the index.ejs
app.get("/", (req, res) => {
    res.render("index");
});

const PORT = 8080;
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
