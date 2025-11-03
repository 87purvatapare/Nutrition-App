// src/services/api.js
import axios from 'axios';

// This is the base URL of your backend
const API_URL = 'http://localhost:5000/api';

// Create an "instance" of axios
const api = axios.create({
  baseURL: API_URL,
});

// --- Auth APIs ---
export const registerUser = (userData) => api.post('/auth/register', userData);
export const loginUser = (userData) => api.post('/auth/login', userData);

// --- Profile APIs ---
// This function will automatically add the 'Authorization' header
export const saveUserProfile = (profileData, token) => {
  return api.post('/profile', profileData, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
};

export const getUserProfile = (token) => {
  return api.get('/profile', {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
};

export default api;