// src/context/ProfileContext.jsx
import React, { createContext, useState, useContext } from 'react';
import { saveUserProfile } from '../services/api';

const ProfileContext = createContext();

// This is the starting data for the profile
const initialState = {
  food_preference: '',
  common_allergies: [],
  snack_frequency: '',
  calorie_intake: 2000,
  other_notes: ''
};

export const ProfileProvider = ({ children }) => {
  const [profileData, setProfileData] = useState(initialState);

  // Function to update bits of the profile as the user moves
  const updateProfileData = (data) => {
    setProfileData((prev) => ({
      ...prev,
      ...data
    }));
  };

  // Function to submit the final profile to the backend
  const submitProfile = async (token) => {
    try {
      await saveUserProfile(profileData, token);
      console.log('Profile saved successfully!');
      // You can reset the state after saving
      setProfileData(initialState);
    } catch (error) {
      console.error('Failed to save profile:', error);
      throw error;
    }
  };

  return (
    <ProfileContext.Provider value={{ profileData, updateProfileData, submitProfile }}>
      {children}
    </ProfileContext.Provider>
  );
};

// Custom hook to use the context
export const useProfile = () => {
  return useContext(ProfileContext);
};