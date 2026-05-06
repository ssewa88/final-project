const express = require("express");
const app = express();

const PORT = 3000;

// Main route
app.get("/", (req, res) => {
  res.send("Hello, World!");
});

// Health check (important for Kubernetes later)
app.get("/health", (req, res) => {
  res.status(200).send("OK");
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on port ${PORT}`);
});
