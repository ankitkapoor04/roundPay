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

// Define Routes
app.get("/index", (req, res) => {
    res.render("index");
  });

  app.get("/about", (req, res) => {
    res.render("about");
  });

  app.get("/services", (req, res) => {
    res.render("services");
  });

  app.get("/contact", (req, res) => {
    res.render("contact");
  });

  app.get("/login", (req, res) => {
    res.render("login");
  });

const PORT = 8080;
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
