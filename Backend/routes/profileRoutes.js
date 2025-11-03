// routes/profileRoutes.js
const express = require('express');
const router = express.Router();
const { getUserProfile, updateUserProfile } = require('../controllers/profileController');
const { protect } = require('../middleware/authMiddleware');

// GET /api/profile
// This route is protected. User must be logged in.
router.get('/', protect, getUserProfile);

// POST /api/profile
// This route is also protected.
router.post('/', protect, updateUserProfile);

module.exports = router;