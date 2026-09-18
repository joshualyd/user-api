const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

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

// Root route now directly returns the JSON users list
app.get('/', (req, res) => {
  res.json(users);
});

// Optional: You can keep or remove this, it's safe to leave
app.get('/users', (req, res) => {
  res.json(users);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
