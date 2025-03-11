// Set up Express app
const express = require('express');
const app = express();

// Route for '/test' to return a message
app.get('/test', (req, res) => {
  res.json({ message: 'Express is working! Write your full name' });
});

// Start server on port 3000
app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
