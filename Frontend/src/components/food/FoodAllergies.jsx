// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import "./FoodAllergies.css";

// const FoodAllergies = () => {
//   const [allergies, setAllergies] = useState("");
//   const [showModal, setShowModal] = useState(false);
//   const navigate = useNavigate();

//   const handleContinue = () => {
//     if (allergies.trim()) {
//       navigate("/summary");
//     } else {
//       setShowModal(true);
//     }
//   };

//   const closeModal = () => setShowModal(false);

//   return (
//     <div className="allergy-page">
//       <div className="allergy-card">
//         {/* ---------- Center Logo in Card ---------- */}
//         <div className="foodallergy-logo-center">
//           <img src="/Logo.png" alt="Logo" />
//         </div>

//         <h2 className="allergy-heading">
//           Do you have any food allergies or other notes?
//         </h2>

//         <textarea
//           className="allergy-input"
//           placeholder="Type here about your allergies..."
//           value={allergies}
//           onChange={(e) => setAllergies(e.target.value)}
//         />

//         <div className="tip-box">
//           <span className="tip-icon">💡</span>
//           <p>
//             You can include lifestyle notes like “Avoid fried food” or “Prefer
//             high-protein meals.”
//           </p>
//         </div>

//         <button className="continue-btn" onClick={handleContinue}>
//           Continue →
//         </button>
//       </div>

//       {/* ---------- Modal ---------- */}
//       {showModal && (
//         <div className="modal-overlay">
//           <div className="modal-box">
//             <h3>⚠️ Please Fill This Field</h3>
//             <p>
//               Mention your allergies or dietary notes before continuing. This
//               helps us tailor your experience.
//             </p>
//             <button className="modal-btn" onClick={closeModal}>
//               OK
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default FoodAllergies;


// src/components/food/FoodAllergies.jsx



// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import "./FoodAllergies.css";
// import { useProfile } from "../../context/ProfileContext"; // Import hook

// const FoodAllergies = () => {
//   const navigate = useNavigate();
//   const { profileData, updateProfileData } = useProfile(); // Use context
//   const [allergies, setAllergies] = useState(profileData.other_notes || "");
//   const [showModal, setShowModal] = useState(false);

//   const handleContinue = () => {
//     if (allergies.trim()) {
//       updateProfileData({ other_notes: allergies }); // Save to context
//       navigate("/summary"); // Navigate to the new Summary page
//     } else {
//       setShowModal(true);
//     }
//   };

//   const closeModal = () => setShowModal(false);

//   // ... (rest of your JSX is fine) ...
//   return (
//     <div className="allergy-page">
//       <div className="allergy-card">
//         <div className="foodallergy-logo-center">
//           <img src="/Logo.png" alt="Logo" />
//         </div>
//         <h2 className="allergy-heading">
//           Do you have any food allergies or other notes?
//         </h2>
//         <textarea
//           className="allergy-input"
//           placeholder="Type here about your allergies..."
//           value={allergies}
//           onChange={(e) => setAllergies(e.target.value)}
//         />
//         <div className="tip-box">
//           <span className="tip-icon">💡</span>
//           <p>
//             You can include lifestyle notes like “Avoid fried food” or “Prefer
//             high-protein meals.”
//           </p>
//         </div>
//         <button className="continue-btn" onClick={handleContinue}>
//           Continue →
//         </button>
//       </div>
//       {showModal && (
//         <div className="modal-overlay">
//           <div className="modal-box">
//             <h3>⚠️ Please Fill This Field</h3>
//             <p>
//               Mention your allergies or dietary notes before continuing. This
//               helps us tailor your experience.
//             </p>
//             <button className="modal-btn" onClick={closeModal}>
//               OK
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default FoodAllergies;

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { RiLightbulbFlashLine } from "react-icons/ri"; // ⚡ Modern lightbulb icon
import "./FoodAllergies.css";
import { RiErrorWarningLine } from "react-icons/ri";

const FoodAllergies = () => {
  const [allergies, setAllergies] = useState("");
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const handleContinue = () => {
    if (allergies.trim()) {
      navigate("/summary");
    } else {
      setShowModal(true);
    }
  };

  const closeModal = () => setShowModal(false);

  return (
    <div className="allergy-page">
      <div className="allergy-card">
        {/* ---------- Center Logo in Card ---------- */}
        <div className="foodallergy-logo-center">
          <img src="/logo1.png" alt="Logo" />
        </div>

        <h2 className="allergy-heading">
          Do you have any food allergies or other notes?
        </h2>

        <textarea
          className="allergy-input"
          placeholder="Type here about your allergies..."
          value={allergies}
          onChange={(e) => setAllergies(e.target.value)}
        />

        {/* ---------- Tip Box ---------- */}
        <div className="tip-box">
          <RiLightbulbFlashLine className="tip-icon" />
          <p>
            You can include lifestyle notes like “Avoid fried food” or “Prefer
            high-protein meals.”
          </p>
        </div>

        <button className="continue-btn" onClick={handleContinue}>
          Continue →
        </button>
      </div>

      {/* ---------- Modal ---------- */}
      {showModal && (
        <div className="modal-overlay">
          <div className="modal-box">
            <div className="modal-header">
              <RiErrorWarningLine className="modal-icon" />
              <h3 className="modal-title">
                Mention your allergies or dietary notes before continuing.
              </h3>
            </div>

            <button className="modal-btn" onClick={closeModal}>
              OK
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default FoodAllergies;