// server.js
require('dotenv').config(); // <-- THIS MUST BE THE VERY FIRST LINE

const express = require('express');
const cors = require('cors');
const db = require('./config/db');

const authRoutes = require('./routes/authRoutes');
const profileRoutes = require('./routes/profileRoutes');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json()); // To parse JSON bodies

// Test DB Connection
db.getConnection()
  .then(connection => {
    console.log('✅ MySQL Database connected');
    connection.release();
  })
  .catch(err => {
    console.error('❌ Database connection failed:', err);
  });

// API Routes
app.use('/api/auth', authRoutes);
app.use('/api/profile', profileRoutes);

// Home Route
app.get('/', (req, res) => {
  res.send('FitFare Backend API is running!');
});

app.listen(PORT, () => {
  console.log(`🚀 Server listening on http://localhost:${PORT}`);
});