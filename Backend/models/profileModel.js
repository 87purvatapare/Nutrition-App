// models/profileModel.js
const db = require('../config/db');

// Create or Update a user's profile
// We use 'INSERT ... ON DUPLICATE KEY UPDATE' to handle both creation and updates
const createOrUpdateProfile = async (userId, profileData) => {
  const { 
    food_preference, 
    common_allergies, // This should be an array
    snack_frequency, 
    calorie_intake, 
    other_notes 
  } = profileData;

  // Convert the JavaScript array of allergies into a JSON string for the DB
  const allergiesJson = JSON.stringify(common_allergies);

  const sql = `
    INSERT INTO user_profiles 
      (user_id, food_preference, common_allergies, snack_frequency, calorie_intake, other_notes)
    VALUES 
      (?, ?, ?, ?, ?, ?)
    ON DUPLICATE KEY UPDATE
      food_preference = VALUES(food_preference),
      common_allergies = VALUES(common_allergies),
      snack_frequency = VALUES(snack_frequency),
      calorie_intake = VALUES(calorie_intake),
      other_notes = VALUES(other_notes)
  `;

  const [result] = await db.execute(sql, [
    userId,
    food_preference,
    allergiesJson,
    snack_frequency,
    calorie_intake,
    other_notes
  ]);
  
  return result;
};

// Get a user's profile by their user ID
// const getProfileByUserId = async (userId) => {
//   const [rows] = await db.execute(
//     'SELECT * FROM user_profiles WHERE user_id = ?',
//     [userId]
//   );
  
//   // Parse the JSON string back into an array
//   if (rows[0] && rows[0].common_allergies) {
//     rows[0].common_allergies = JSON.parse(rows[0].common_allergies);
//   }
  
//   return rows[0];
// };

// module.exports = {
//   createOrUpdateProfile,
//   getProfileByUserId
// };

// models/profileModel.js

// ... (keep createOrUpdateProfile as is) ...

// Get a user's profile by their user ID
const getProfileByUserId = async (userId) => {
  const [rows] = await db.execute(
    'SELECT * FROM user_profiles WHERE user_id = ?',
    [userId]
  );
  
  if (rows[0] && rows[0].common_allergies) {
    try {
      // Try to parse the JSON string back into an array
      rows[0].common_allergies = JSON.parse(rows[0].common_allergies);
    } catch (e) {
      // If it fails, log the error and return the malformed data as-is
      // (or return an empty array: rows[0].common_allergies = [])
      console.error("Failed to parse common_allergies JSON:", e);
    }
  }
  
  return rows[0];
};

module.exports = {
  createOrUpdateProfile,
  getProfileByUserId
};