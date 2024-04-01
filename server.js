// Import the express module
const express = require("express");

// Create an instance of the Express application
const app = express();

// Define the endpoint and its handler function
app.get("/", (req, res) => {
  // Setting the response headers
  res.set("Content-Type", "application/json");
  res.status(200).json({ message: "Hello World" });
});

// Start listening for incoming requests
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
