const express = require('express');
const app = express();

// Use the port provided by Render, or default to 3000 locally
const PORT = process.env.PORT || 3000;

// Sample list of users with the required attributes
const users = [
  {
    LastName: "Eniceta",
    FirstName: "Joshua Lyod",
    Email: "josh.eniceta@example.com",
    Password: "Password123"
  },
  {
    LastName: "dodo",
    FirstName: "Josh",
    Email: "josh.dodo@example.com",
    Password: "Password456"
  },
  {
    LastName: "quino",
    FirstName: "Bob",
    Email: "bob.quino@example.com",
    Password: "Password789"
  }
];

// Root route
app.get('/', (req, res) => {
  res.send('Welcome to the User API! Go to /users to see the list of users.');
});

// API endpoint that returns the list of users
app.get('/users', (req, res) => {
  res.json(users);
});

app.listen(PORT, () => {
  console.log('Server is running on port ${PORT}');
});
