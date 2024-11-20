const express = require("express");
const app = express();

// Middleware to parse JSON (optional, but often needed)
app.use(express.json());

// Define a basic route (optional)
app.get("/", (req, res) => {
  res.send("Server is running!");
});

// Start the server
const PORT = 8080;
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
