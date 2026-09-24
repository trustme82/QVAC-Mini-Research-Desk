const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

// Serve files from the current folder
app.use(express.static(__dirname));

// Main page
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

// Start server
app.listen(PORT, () => {
  console.log(`QVAC Mini Research Desk running at http://localhost:${PORT}`);
});
