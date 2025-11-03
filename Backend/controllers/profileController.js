// controllers/profileController.js
const profileModel = require('../models/profileModel');

// @desc    Get user profile
// @route   GET /api/profile
// @access  Private (needs token)
const getUserProfile = async (req, res) => {
  try {
    // req.user.id is attached by the authMiddleware
    const profile = await profileModel.getProfileByUserId(req.user.id);

    if (!profile) {
      return res.status(404).json({ message: 'Profile not found' });
    }
    
    res.status(200).json(profile);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

// @desc    Create or update user profile
// @route   POST /api/profile
// @access  Private (needs token)
const updateUserProfile = async (req, res) => {
  try {
    // req.user.id is attached by the authMiddleware
    const userId = req.user.id;
    
    // Data comes from the frontend
    const profileData = {
      food_preference: req.body.food_preference,
      common_allergies: req.body.common_allergies, // e.g., ["Gluten", "Egg"]
      snack_frequency: req.body.snack_frequency,
      calorie_intake: req.body.calorie_intake,
      other_notes: req.body.other_notes
    };

    await profileModel.createOrUpdateProfile(userId, profileData);
    
    res.status(200).json({ message: 'Profile updated successfully' });

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = {
  getUserProfile,
  updateUserProfile
};