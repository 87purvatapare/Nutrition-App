// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import "./FoodPreferences.css";
// import {
//   FaFish,
//   FaLeaf,
//   FaCarrot,
//   FaDrumstickBite,
//   FaBreadSlice,
// } from "react-icons/fa";
// import { MdOutlineCancel } from "react-icons/md";
// import { FaCheck } from "react-icons/fa6"; // ✅ Added check icon

// const FoodPreferences = () => {
//   const [selected, setSelected] = useState("I'm vegetarian");
//   const navigate = useNavigate();

//   const options = [
//     { label: "I don't have any preferences", icon: <MdOutlineCancel /> },
//     { label: "I'm a pescatarian", icon: <FaFish /> },
//     { label: "I'm vegetarian", icon: <FaLeaf /> },
//     { label: "I am vegan", icon: <FaCarrot /> },
//     { label: "I like eating meat", icon: <FaDrumstickBite /> },
//     { label: "I eat wheat", icon: <FaBreadSlice /> },
//   ];

//   const handleContinue = () => {
//     navigate("/allergies");
//   };

//   return (
//     <div className="food-page">
//       <div className="food-dialog-box">
//         <img src="/Logo.png" alt="FitFare Logo" className="food-logo" />

//         <h2 className="heading">What are your food preferences?</h2>

//         <div className="options">
//           {options.map((item) => (
//             <label
//               key={item.label}
//               className={`option ${selected === item.label ? "selected" : ""}`}
//               onClick={() => setSelected(item.label)}
//             >
//               <div className="icon-box">{item.icon}</div>
//               <span className="option-text">{item.label}</span>
//               <div className="custom-radio">
//                 {selected === item.label ? <FaCheck className="check-icon" /> : ""}
//               </div>
//             </label>
//           ))}
//         </div>

//         <button className="continue-button" onClick={handleContinue}>
//           Continue →
//         </button>
//       </div>
//     </div>
//   );
// };

// export default FoodPreferences;



// src/components/FoodPreference/FoodPreferences.jsx




/// 2nd my 

// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import "./FoodPreferences.css";
// import {
//   FaFish, FaLeaf, FaCarrot, FaDrumstickBite, FaBreadSlice,
// } from "react-icons/fa";
// import { MdOutlineCancel } from "react-icons/md";
// import { FaCheck } from "react-icons/fa6";
// import { useProfile } from "../../context/ProfileContext"; // Import hook

// const FoodPreferences = () => {
//   const navigate = useNavigate();
//   const { profileData, updateProfileData } = useProfile(); // Use context
//   const [selected, setSelected] = useState(profileData.food_preference || "I'm vegetarian");

//   const options = [
//     { label: "I don't have any preferences", icon: <MdOutlineCancel /> },
//     { label: "I'm a pescatarian", icon: <FaFish /> },
//     { label: "I'm vegetarian", icon: <FaLeaf /> },
//     { label: "I am vegan", icon: <FaCarrot /> },
//     { label: "I like eating meat", icon: <FaDrumstickBite /> },
//     { label: "I eat wheat", icon: <FaBreadSlice /> },
//   ];

//   const handleContinue = () => {
//     updateProfileData({ food_preference: selected }); // Save to context
//     navigate("/allergies");
//   };

//   const handleSelect = (label) => {
//     setSelected(label);
//   };

//   return (
//     <div className="food-page">
//       <div className="food-dialog-box">
//         <img src="/Logo.png" alt="FitFare Logo" className="food-logo" />
//         <h2 className="heading">What are your food preferences?</h2>
//         <div className="options">
//           {options.map((item) => (
//             <label
//               key={item.label}
//               className={`option ${selected === item.label ? "selected" : ""}`}
//               onClick={() => handleSelect(item.label)} // Use new handler
//             >
//               <div className="icon-box">{item.icon}</div>
//               <span className="option-text">{item.label}</span>
//               <div className="custom-radio">
//                 {selected === item.label ? <FaCheck className="check-icon" /> : ""}
//               </div>
//             </label>
//           ))}
//         </div>
//         <button className="continue-button" onClick={handleContinue}>
//           Continue →
//         </button>
//       </div>
//     </div>
//   );
// };

// export default FoodPreferences;




// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import "./FoodPreferences.css";
// import { useProfile } from "../../context/ProfileContext"; // ✅ 1. Import hook

// const FoodPreferences = () => {
//   const navigate = useNavigate();
//   const { profileData, updateProfileData } = useProfile(); // ✅ 2. Use context
  
//   // Set initial state from context, or default
//   const [selected, setSelected] = useState(
//     profileData.food_preference || "I don't have any preferences" 
//   );

//   // ✅ Replace all icons with image files from public/icons/
//   const options = [
//     { label: "I don't have any preferences", icon: "/Vector (6).png" },
//     { label: "I'm a pescatarian", icon: "/Vector (4).png" },
//     { label: "I'm vegetarian", icon: "/leaf double.png" },
//     { label: "I am vegan", icon: "/leafs.png" },
//     { label: "I like eating meat", icon: "/Vector (5).png" },
//     { label: "I eat wheat", icon: "/wheat.png" },
//   ];

//   const handleContinue = () => {
//     updateProfileData({ food_preference: selected }); // ✅ 3. Save to context
//     navigate("/allergies");
//   };

//   return (
//     <div className="food-page">
//       <div className="food-dialog-box">
//         {/* ✅ Logo Above Heading */}
//         <img src="/logo1.png" alt="FitFare Logo" className="food-logo" />

//         <h2 className="heading">What are your food preferences?</h2>

//         <div className="options">
//           {options.map((item) => (
//             <label
//               key={item.label}
//               className={`option ${selected === item.label ? "selected" : ""}`}
//               onClick={() => setSelected(item.label)}
//             >
//               {/* ✅ Replace icon component with image */}
//               <div className="icon-box">
//                 <img
//                   src={item.icon}
//                   alt={item.label}
//                   className="option-icon-img"
//                 />
//               </div>

//               <span className="option-text">{item.label}</span>

//               <div className="custom-radio">
//                 {selected === item.label && (
//                   <img
//                     src="Checkbox Only.png"
//                     alt="selected"
//                     className="check-img"
//                   />
//                 )}
//               </div>
//             </label>
//           ))}
//         </div>

//         <button className="continue-button" onClick={handleContinue}>
//           Continue →
//         </button>
//       </div>
//     </div>
//   );
// };

// export default FoodPreferences;



import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./FoodPreferences.css";

const FoodPreferences = () => {
  const [selected, setSelected] = useState("I don't have any preferences");
  const navigate = useNavigate();

  // ✅ Replace all icons with image files from public/icons/
  const options = [
    { label: "I don't have any preferences", icon: "/Vector (6).png" },
    { label: "I'm a pescatarian", icon: "/Vector (4).png" },
    { label: "I'm vegetarian", icon: "/leaf double.png" },
    { label: "I am vegan", icon: "/leafs.png" },
    { label: "I like eating meat", icon: "/Vector (5).png" },
    { label: "I eat wheat", icon: "/wheat.png" },
  ];

  const handleContinue = () => {
    navigate("/allergies");
  };

  return (
    <div className="food-page">
      <div className="food-dialog-box">
        {/* ✅ Logo Above Heading */}
        <img src="/logo1.png" alt="FitFare Logo" className="food-logo" />

        <h2 className="heading">What are your food preferences?</h2>

        <div className="options">
          {options.map((item) => (
            <label
              key={item.label}
              className={`option ${selected === item.label ? "selected" : ""}`}
              onClick={() => setSelected(item.label)}
            >
              {/* ✅ Replace icon component with image */}
              <div className="icon-box">
                <img
                  src={item.icon}
                  alt={item.label}
                  className="option-icon-img"
                />
              </div>

              <span className="option-text">{item.label}</span>

              <div className="custom-radio">
                {selected === item.label && (
                  <img
                    src="Checkbox Only.png"
                    alt="selected"
                    className="check-img"
                  />
                )}
              </div>
            </label>
          ))}
        </div>

        <button className="continue-button" onClick={handleContinue}>
          Continue →
        </button>
      </div>
    </div>
  );
};

export default FoodPreferences;