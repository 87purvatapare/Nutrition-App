// src/context/AuthContext.jsx
import React, { createContext, useState, useEffect, useContext } from 'react';
import { registerUser, loginUser } from '../services/api';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(localStorage.getItem('token'));
  const [loading, setLoading] = useState(true); // To check auth status on load

  useEffect(() => {
    // When the app loads, check if a token exists
    const storedToken = localStorage.getItem('token');
    if (storedToken) {
      // In a real app, you'd verify this token with the backend
      // For now, we'll just re-set it
      setToken(storedToken);
      // You should also fetch the user's data here
      // For simplicity, we'll just set a placeholder
      setUser({ email: 'Logged in user' }); // You should decode your token or fetch user data
    }
    setLoading(false);
  }, []);

  const login = async (email, password) => {
    try {
      const response = await loginUser({ email, password });
      setToken(response.data.token);
      setUser(response.data.user);
      localStorage.setItem('token', response.data.token);
    } catch (error) {
      console.error('Login failed:', error);
      throw error;
    }
  };

  const register = async (username, email, password) => {
    try {
      const response = await registerUser({ username, email, password });
      setToken(response.data.token);
      setUser(response.data.user);
      localStorage.setItem('token', response.data.token);
    } catch (error) {
      console.error('Registration failed:', error);
      throw error;
    }
  };

  const logout = () => {
    setUser(null);
    setToken(null);
    localStorage.removeItem('token');
  };

  return (
    <AuthContext.Provider value={{ user, token, login, register, logout, loading }}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

// Custom hook to use the context
export const useAuth = () => {
  return useContext(AuthContext);
};