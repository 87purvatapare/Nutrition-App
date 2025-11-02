// models/userModel.js
const db = require('../config/db');

// Create a new user
const createUser = async (username, email, hashedPassword) => {
  const [result] = await db.execute(
    'INSERT INTO users (username, email, password_hash) VALUES (?, ?, ?)',
    [username, email, hashedPassword]
  );
  return result.insertId;
};

// Find a user by their email
const findUserByEmail = async (email) => {
  const [rows] = await db.execute(
    'SELECT * FROM users WHERE email = ?',
    [email]
  );
  return rows[0];
};

// Find a user by their ID
const findUserById = async (id) => {
  const [rows] = await db.execute(
    'SELECT id, username, email, created_at FROM users WHERE id = ?',
    [id]
  );
  return rows[0];
};

module.exports = {
  createUser,
  findUserByEmail,
  findUserById
};