// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Home from "./components/home/Home";
// import SetupPage from "./components/SetupIntro/SetupIntro";
// import FoodPreferences from "./components/FoodPreference/FoodPreferences";
// import Allergies from "./components/Allergies/Allergies";
// import SnackFrequency from "./components/SnackFrequency/SnackFrequency";
// import CalorieIntake from "./components/callories/CalorieIntake";
// import FoodAllergies from "./components/food/FoodAllergies";

// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/setup" element={<SetupPage />} />
//         <Route path="/food" element={<FoodPreferences />} />
//         <Route path="/allergies" element={<Allergies />} />
//         <Route path="/snack-frequency" element={<SnackFrequency />} />
//         <Route path="/callori-intake" element={<CalorieIntake/>} />
//         <Route path="/food-allergies" element={<FoodAllergies/>}/>
//              </Routes>
//     </Router>
//   );
// }

// export default App;

// src/App.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Import your components
import Home from './components/home/home';
import SetupIntro from './components/SetupIntro/SetupIntro';
import FoodPreferences from './components/FoodPreference/FoodPreferences';
import Allergies from './components/Allergies/Allergies';
import SnackFrequency from './components/SnackFrequency/SnackFrequency';
import CalorieIntake from './components/callories/CalorieIntake';
import FoodAllergies from './components/food/FoodAllergies';

// Import new pages
import Login from './pages/Login';
import Register from './pages/Register';
import Summary from './pages/Summary';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />

      {/* Protected Routes - Only logged-in users can see these */}
      <Route element={<ProtectedRoute />}>
        <Route path="/setup" element={<SetupIntro />} />
        <Route path="/food" element={<FoodPreferences />} />
        <Route path="/allergies" element={<Allergies />} />
        <Route path="/snack-frequency" element={<SnackFrequency />} />
        <Route path="/callori-intake" element={<CalorieIntake />} />
        <Route path="/food-Allergies" element={<FoodAllergies />} />
        <Route path="/summary" element={<Summary />} />
      </Route>
      
      {/* Add a fallback 404 page if you want */}
      {/* <Route path="*" element={<div>Page Not Found</div>} /> */}
    </Routes>
  );
}

export default App;