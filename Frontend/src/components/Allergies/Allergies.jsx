// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import "./Allergies.css";
// import { FaCheese, FaEgg, FaFish } from "react-icons/fa";
// import { MdOutlineGrain, MdCancel, MdSettings, MdInfoOutline } from "react-icons/md";
// import { GiWheat, GiMilkCarton } from "react-icons/gi";

// const Allergies = () => {
//   const navigate = useNavigate();
//   const [selected, setSelected] = useState([]);
//   const [showModal, setShowModal] = useState(false);

//   const options = [
//     { name: "Gluten", icon: <MdOutlineGrain /> },
//     { name: "Wheat", icon: <GiWheat /> },
//     { name: "Lactose", icon: <FaCheese /> },
//     { name: "Milk", icon: <GiMilkCarton /> },
//     { name: "Egg", icon: <FaEgg /> },
//     { name: "Shellfish", icon: <FaFish /> },
//     { name: "Other", icon: <MdSettings /> },
//     { name: "None", icon: <MdCancel /> },
//   ];

//   const toggleSelect = (item) => {
//     if (item === "None") {
//       setSelected(["None"]);
//     } else {
//       setSelected((prev) => {
//         const newSelection = prev.includes(item)
//           ? prev.filter((i) => i !== item)
//           : [...prev.filter((i) => i !== "None"), item];
//         return newSelection;
//       });
//     }
//   };

//   const handleContinue = () => {
//     if (selected.length === 0) {
//       setShowModal(true);
//     } else {
//       navigate("/snack-frequency");
//     }
//   };

//   const closeModal = () => {
//     setShowModal(false);
//   };

//   return (
//     <div className="allergy-container">
//       <div className="allergy-card">
//         {/* ✅ Logo at the top */}
//         <img src="/Logo.png" alt="FitFare Logo" className="allergy-logo" />

//         <h2>Do you have any allergies or intolerances?</h2>

//         <div className="chips-container">
//           {options.map((item) => (
//             <div
//               key={item.name}
//               className={`chip ${selected.includes(item.name) ? "selected" : ""}`}
//               onClick={() => toggleSelect(item.name)}
//             >
//               <span className="chip-icon">{item.icon}</span>
//               {item.name}
//             </div>
//           ))}
//         </div>

//         <hr className="line" />

//         <div className="note">
//           <MdInfoOutline className="note-icon" />
//           You can select multiple options
//         </div>

//         <button className="continue-btn11" onClick={handleContinue}>
//           Continue →
//         </button>
//       </div>

//       {/* Modal */}
//       {showModal && (
//         <div className="modal-overlay">
//           <div className="modal-box">
//             <h3>⚠️ Please Select an Option</h3>
//             <p>You must choose at least one allergy before continuing.</p>
//             <button className="modal-btn" onClick={closeModal}>
//               OK
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Allergies;

// src/components/Allergies/Allergies.jsx




// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import "./Allergies.css";
// import { FaCheese, FaEgg, FaFish } from "react-icons/fa";
// import { MdOutlineGrain, MdCancel, MdSettings, MdInfoOutline } from "react-icons/md";
// import { GiWheat, GiMilkCarton } from "react-icons/gi";
// import { useProfile } from "../../context/ProfileContext"; // Import hook

// const Allergies = () => {
//   const navigate = useNavigate();
//   const { profileData, updateProfileData } = useProfile(); // Use context
//   const [selected, setSelected] = useState(profileData.common_allergies || []);
//   const [showModal, setShowModal] = useState(false);

//   const options = [
//     { name: "Gluten", icon: <MdOutlineGrain /> },
//     { name: "Wheat", icon: <GiWheat /> },
//     { name: "Lactose", icon: <FaCheese /> },
//     { name: "Milk", icon: <GiMilkCarton /> },
//     { name: "Egg", icon: <FaEgg /> },
//     { name: "Shellfish", icon: <FaFish /> },
//     { name: "Other", icon: <MdSettings /> },
//     { name: "None", icon: <MdCancel /> },
//   ];

//   const toggleSelect = (item) => {
//     if (item === "None") {
//       setSelected(["None"]);
//     } else {
//       setSelected((prev) => {
//         const newSelection = prev.includes(item)
//           ? prev.filter((i) => i !== item)
//           : [...prev.filter((i) => i !== "None"), item];
//         return newSelection;
//       });
//     }
//   };

//   const handleContinue = () => {
//     if (selected.length === 0) {
//       setShowModal(true);
//     } else {
//       updateProfileData({ common_allergies: selected }); // Save to context
//       navigate("/snack-frequency");
//     }
//   };

//   const closeModal = () => {
//     setShowModal(false);
//   };

//   // ... (rest of your JSX is fine) ...
//   return (
//     <div className="allergy-container">
//       <div className="allergy-card">
//         <img src="/Logo.png" alt="FitFare Logo" className="allergy-logo" />
//         <h2>Do you have any allergies or intolerances?</h2>
//         <div className="chips-container">
//           {options.map((item) => (
//             <div
//               key={item.name}
//               className={`chip ${selected.includes(item.name) ? "selected" : ""}`}
//               onClick={() => toggleSelect(item.name)}
//             >
//               <span className="chip-icon">{item.icon}</span>
//               {item.name}
//             </div>
//           ))}
//         </div>
//         <hr className="line" />
//         <div className="note">
//           <MdInfoOutline className="note-icon" />
//           You can select multiple options
//         </div>
//         <button className="continue-btn11" onClick={handleContinue}>
//           Continue →
//         </button>
//       </div>
//       {showModal && (
//         <div className="modal-overlay">
//           <div className="modal-box">
//             <h3>⚠️ Please Select an Option</h3>
//             <p>You must choose at least one allergy before continuing.</p>
//             <button className="modal-btn" onClick={closeModal}>
//               OK
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Allergies;





// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import "./Allergies.css";
// import { RiErrorWarningLine } from "react-icons/ri";
// import { useProfile } from "../../context/ProfileContext"; // ✅ 1. Import the context hook

// const Allergies = () => {
//   const navigate = useNavigate();
//   const { profileData, updateProfileData } = useProfile(); // ✅ 2. Get data from context
//   const [selected, setSelected] = useState(profileData.common_allergies || []); // Set initial state
//   const [showModal, setShowModal] = useState(false);

//   // ✅ Replace icons with images from public folder
//   const options = [
//     { name: "Gluten", icon: "/bread toast.png" },
//     { name: "Wheat", icon: "/wheat.png" },
//     { name: "Lactose", icon: "/water drop.png" },
//     { name: "Milk", icon: "/water glass.png" },
//     { name: "Egg", icon: "/egg whole.png" },
//     { name: "Shellfish", icon: "/Vector (4).png" },
//     { name: "Other", icon: "/gear.png" },
//     { name: "None", icon: "/Vector (3).png" },
//   ];

//   const toggleSelect = (item) => {
//     if (item === "None") {
//       setSelected(["None"]);
//     } else {
//       setSelected((prev) => {
//         const newSelection = prev.includes(item)
//           ? prev.filter((i) => i !== item)
//           : [...prev.filter((i) => i !== "None"), item];
//         return newSelection;
//       });
//     }
//   };

//   const handleContinue = () => {
//     if (selected.length === 0) {
//       setShowModal(true);
//     } else {
//       updateProfileData({ common_allergies: selected }); // ✅ 3. Save to context
//       navigate("/snack-frequency");
//     }
//   };

//   const closeModal = () => {
//     setShowModal(false);
//   };

//   return (
//     <div className="allergy-container">
//       <div className="allergy-card">
//         {/* ✅ Logo at the top */}
//         <img src="/logo1.png" alt="FitFare Logo" className="allergy-logo" />

//         <h2>Do you have any allergies or intolerances?</h2>

//         <div className="chips-container">
//           {options.map((item) => (
//             <div
//               key={item.name}
//               className={`chip ${
//                 selected.includes(item.name) ? "selected" : ""
//               }`}
//               onClick={() => toggleSelect(item.name)}
//             >
//               <span className="chip-icon">
//                 <img src={item.icon} alt={item.name} className="chip-img" />
//               </span>
//               {item.name}
//             </div>
//           ))}
//         </div>

//         <hr className="line" />

//         <div className="note">
//           <img src="/info circle.png" alt="info" className="note-img" />
//           You can select multiple options
//         </div>

//         <button className="continue-btn11" onClick={handleContinue}>
//           Continue →
//         </button>
//       </div>

//       {/* Modal */}
//       {showModal && (
//         <div className="modal-overlay">
//           <div className="modal-box">
//             <div className="modal-header">
//               <RiErrorWarningLine className="modal-icon" />
//               <h3 className="modal-title">
//                 You must choose at least one allergy before continuing.
//               </h3>
//             </div>

//             <button className="modal-btn" onClick={closeModal}>
//               OK
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Allergies;



// 3rd Attempt 
// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import "./Allergies.css";
// import { RiErrorWarningLine } from "react-icons/ri";
// import { useProfile } from "../../context/ProfileContext"; // ✅ 1. Import hook

// const Allergies = () => {
//   const navigate = useNavigate();
//   const { profileData, updateProfileData } = useProfile(); // ✅ 2. Use context
  
//   // Set initial state from context
//   const [selected, setSelected] = useState(profileData.common_allergies || []);
//   const [showModal, setShowModal] = useState(false);

//   // ✅ Replace icons with images from public folder
//   const options = [
//     { name: "Gluten", icon: "/bread toast.png" },
//     { name: "Wheat", icon: "/wheat.png" },
//     { name: "Lactose", icon: "/water drop.png" },
//     { name: "Milk", icon: "/water glass.png" },
//     { name: "Egg", icon: "/egg whole.png" },
//     { name: "Shellfish", icon: "/Vector (4).png" },
//     { name: "Other", icon: "/gear.png" },
//     { name: "None", icon: "/Vector (3).png" },
//   ];

//   const toggleSelect = (item) => {
//     if (item === "None") {
//       setSelected(["None"]);
//     } else {
//       setSelected((prev) => {
//         const newSelection = prev.includes(item)
//           ? prev.filter((i) => i !== item)
//           : [...prev.filter((i) => i !== "None"), item];
//         return newSelection;
//       });
//     }
//   };

//   const handleContinue = () => {
//     if (selected.length === 0) {
//       setShowModal(true);
//     } else {
//       updateProfileData({ common_allergies: selected }); // ✅ 3. Save to context
//       navigate("/snack-frequency");
//     }
//   };

//   const closeModal = () => {
//     setShowModal(false);
//   };

//   return (
//     <div className="allergy-container">
//       <div className="allergy-card">
//         {/* ✅ Logo at the top */}
//         <img src="/logo1.png" alt="FitFare Logo" className="allergy-logo" />

//         <h2>Do you have any allergies or intolerances?</h2>

//         <div className="chips-container">
//           {options.map((item) => (
//             <div
//               key={item.name}
//               className={`chip ${
//                 selected.includes(item.name) ? "selected" : ""
//               }`}
//               onClick={() => toggleSelect(item.name)}
//             >
//               <span className="chip-icon">
//                 <img src={item.icon} alt={item.name} className="chip-img" />
//               </span>
//               {item.name}
//             </div>
//           ))}
//         </div>

//         <hr className="line" />

//         <div className="note">
//           <img src="/info circle.png" alt="info" className="note-img" />
//           You can select multiple options
//         </div>

//         <button className="continue-btn11" onClick={handleContinue}>
//           Continue →
//         </button>
//       </div>

//       {/* Modal */}
//       {showModal && (
//         <div className="modal-overlay">
//           <div className="modal-box">
//             <div className="modal-header">
//               <RiErrorWarningLine className="modal-icon" />
//               <h3 className="modal-title">
//                 You must choose at least one allergy before continuing.
//               </h3>
//             </div>

//             <button className="modal-btn" onClick={closeModal}>
//               OK
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Allergies;




import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Allergies.css";
import { RiErrorWarningLine } from "react-icons/ri";

const Allergies = () => {
  const navigate = useNavigate();
  const [selected, setSelected] = useState([]);
  const [showModal, setShowModal] = useState(false);

  // ✅ Replace icons with images from public folder
  const options = [
    { name: "Gluten", icon: "/bread toast.png" },
    { name: "Wheat", icon: "/wheat.png" },
    { name: "Lactose", icon: "/water drop.png" },
    { name: "Milk", icon: "/water glass.png" },
    { name: "Egg", icon: "/egg whole.png" },
    { name: "Shellfish", icon: "/Vector (4).png" },
    { name: "Other", icon: "/gear.png" },
    { name: "None", icon: "/Vector (3).png" },
  ];

  const toggleSelect = (item) => {
    if (item === "None") {
      setSelected(["None"]);
    } else {
      setSelected((prev) => {
        const newSelection = prev.includes(item)
          ? prev.filter((i) => i !== item)
          : [...prev.filter((i) => i !== "None"), item];
        return newSelection;
      });
    }
  };

  const handleContinue = () => {
    if (selected.length === 0) {
      setShowModal(true);
    } else {
      navigate("/snack-frequency");
    }
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className="allergy-container">
      <div className="allergy-card">
        {/* ✅ Logo at the top */}
        <img src="/logo1.png" alt="FitFare Logo" className="allergy-logo" />

        <h2>Do you have any allergies or intolerances?</h2>

        <div className="chips-container">
          {options.map((item) => (
            <div
              key={item.name}
              className={`chip ${
                selected.includes(item.name) ? "selected" : ""
              }`}
              onClick={() => toggleSelect(item.name)}
            >
              <span className="chip-icon">
                <img src={item.icon} alt={item.name} className="chip-img" />
              </span>
              {item.name}
            </div>
          ))}
        </div>

        <hr className="line" />

        <div className="note">
          <img src="/info circle.png" alt="info" className="note-img" />
          You can select multiple options
        </div>

        <button className="continue-btn11" onClick={handleContinue}>
          Continue →
        </button>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="modal-overlay">
          <div className="modal-box">
            <div className="modal-header">
              <RiErrorWarningLine className="modal-icon" />
              <h3 className="modal-title">
                You must choose at least one allergy before continuing.
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

export default Allergies;