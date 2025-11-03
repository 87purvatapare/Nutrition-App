// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import "./CalorieIntake.css";

// const CalorieIntake = () => {
//   const [calories, setCalories] = useState(2000);
//   const navigate = useNavigate();

//   const increaseCalories = () => setCalories((prev) => prev + 100);
//   const decreaseCalories = () =>
//     setCalories((prev) => (prev > 100 ? prev - 100 : prev));

//   const handleInputChange = (e) => {
//     const value = e.target.value.replace(/[^0-9]/g, "");
//     setCalories(value ? parseInt(value) : 0);
//   };

//   const handleContinue = () => {
//     navigate("/food-allergies");
//   };

//   return (
//     <div className="calorie-container">
//       <div className="calorie-card">
//         {/* ---------- Logo ---------- */}
        
// <div className="calorie-logo-container">
//           <img src="Logo.png" alt="Logo" className="calorie-logo" />
//         </div>
//         <h2 className="calorie-heading">What’s your daily calorie intake?</h2>

//         <p className="subtext">
//           Your daily calorie needs depend on your age, gender, and activity
//           level. Adjust as per your lifestyle for balanced nutrition.
//         </p>

//         {/* Calorie Adjuster with Underline */}
//         <div className="calorie-input underline">
//           <button className="change-btn" onClick={decreaseCalories}>
//             −
//           </button>

//           <input
//             type="text"
//             className="calorie-input-box"
//             value={calories}
//             onChange={handleInputChange}
//           />

//           <button className="change-btn" onClick={increaseCalories}>
//             +
//           </button>
//         </div>

//         <p className="note-text">
//           I consume around <strong>{calories.toLocaleString("en-US")} kcal</strong> daily.
//         </p>

//         <button className="continue-btn1" onClick={handleContinue}>
//           Continue →
//         </button>
//       </div>
//     </div>
//   );
// };

// export default CalorieIntake;


// src/components/callories/callorientake.jsx


// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import "./CalorieIntake.css";
// import { useProfile } from "../../context/ProfileContext"; // Import hook

// const CalorieIntake = () => {
//   const navigate = useNavigate();
//   const { profileData, updateProfileData } = useProfile(); // Use context
//   const [calories, setCalories] = useState(profileData.calorie_intake || 2000);

//   const increaseCalories = () => setCalories((prev) => prev + 100);
//   const decreaseCalories = () =>
//     setCalories((prev) => (prev > 100 ? prev - 100 : prev));

//   const handleInputChange = (e) => {
//     const value = e.target.value.replace(/[^0-9]/g, "");
//     setCalories(value ? parseInt(value) : 0);
//   };

//   const handleContinue = () => {
//     updateProfileData({ calorie_intake: calories }); // Save to context
//     navigate("/food-allergies");
//   };

//   // ... (rest of your JSX is fine) ...
//   return (
//     <div className="calorie-container">
//       <div className="calorie-card">
//         <div className="calorie-logo-container">
//           <img src="Logo.png" alt="Logo" className="calorie-logo" />
//         </div>
//         <h2 className="calorie-heading">What’s your daily calorie intake?</h2>
//         <p className="subtext">
//           Your daily calorie needs depend on your age, gender, and activity
//           level. Adjust as per your lifestyle for balanced nutrition.
//         </p>
//         <div className="calorie-input underline">
//           <button className="change-btn" onClick={decreaseCalories}>
//             −
//           </button>
//           <input
//             type="text"
//             className="calorie-input-box"
//             value={calories}
//             onChange={handleInputChange}
//           />
//           <button className="change-btn" onClick={increaseCalories}>
//             +
//           </button>
//         </div>
//         <p className="note-text">
//           I consume around <strong>{calories.toLocaleString("en-US")} kcal</strong> daily.
//         </p>
//         <button className="continue-btn1" onClick={handleContinue}>
//           Continue →
//         </button>
//       </div>
//     </div>
//   );
// };

// export default CalorieIntake;


import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./CalorieIntake.css";
import { useProfile } from "../../context/ProfileContext"; // ✅ 1. Import hook

const CalorieIntake = () => {
  const navigate = useNavigate();
  const { profileData, updateProfileData } = useProfile(); // ✅ 2. Use context

  // Set initial state from context
  const [calories, setCalories] = useState(profileData.calorie_intake || 2000);

  const increaseCalories = () => setCalories((prev) => prev + 100);
  const decreaseCalories = () =>
    setCalories((prev) => (prev > 100 ? prev - 100 : prev));

  const handleInputChange = (e) => {
    const value = e.target.value.replace(/[^0-9]/g, "");
    setCalories(value ? parseInt(value) : 0);
  };

  const handleContinue = () => {
    updateProfileData({ calorie_intake: calories }); // ✅ 3. Save to context
    navigate("/food-allergies");
  };

  return (
    <div className="calorie-container">
      <div className="calorie-card">
        {/* ---------- Logo ---------- */}

        <div className="calorie-logo-container">
          <img src="logo1.png" alt="Logo" className="calorie-logo" />
        </div>
        <h2 className="calorie-heading">What’s your daily calorie intake?</h2>

        <p className="subtext">
          Your daily calorie needs depend on your age, gender, and activity
          level. Adjust as per your lifestyle for balanced nutrition.
        </p>

        {/* Calorie Adjuster with Underline */}
        <div className="calorie-input underline">
          <button className="change-btn" onClick={decreaseCalories}>
            −
          </button>

          <input
            type="text"
            className="calorie-input-box"
            value={calories}
            onChange={handleInputChange}
          />

          <button className="change-btn" onClick={increaseCalories}>
            +
          </button>
        </div>

        <p className="note-text">
          I consume around <strong>{calories.toLocaleString("en-US")} kcal</strong>{" "}
          daily.
        </p>

        <button className="continue-btn1" onClick={handleContinue}>
          Continue →
        </button>
      </div>
    </div>
  );
};

export default CalorieIntake;