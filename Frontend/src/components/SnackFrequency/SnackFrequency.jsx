// // import React, { useState } from "react";
// // import { FaArrowRight } from "react-icons/fa";
// // import { useNavigate } from "react-router-dom";
// // import "./SnackFrequency.css";

// // export default function SnackFrequency() {
// //   const [selectedOption, setSelectedOption] = useState("");
// //   const [showModal, setShowModal] = useState(false);
// //   const navigate = useNavigate();

// //   const options = [
// //     "One Time", "Two Times", "Three Times", "Four Times", "Five Times",
// //     "Six Times"
// //   ];

// //   const handleContinue = () => {
// //     if (selectedOption) {
// //       navigate("/callori-intake");
// //     } else {
// //       setShowModal(true);
// //     }
// //   };

// //   return (
// //     <div className="snack-page">
// //       <div className="snack-card">
// //         {/* ---------- Logo in center above heading ---------- */}
// //         <div className="snack-logo-container">
// //           <img src="Logo.png" alt="Logo" className="snack-logo" />
// //         </div>

// //         <h2>Tell Us About Your Snack Routine.</h2>
// //         {/* <p className="note-text">
// //           Please select how many times you usually have snacks in a day.
// //         </p> */}

// //         {/* ---------- Scrollable Options ---------- */}
// //         <div className="options-scroll">
// //           {options.map((opt, idx) => {
// //             const selectedIndex = options.indexOf(selectedOption);
// //             const distance = Math.abs(selectedIndex - idx);

// //             let className = "option";
// //             if (selectedOption === opt) className += " selected";
// //             if (distance === 1) className += " nearby";
// //             if (distance === 2) className += " faded";
// //             if (distance >= 3) className += " more-faded";

// //             return (
// //               <div
// //                 key={idx}
// //                 className={className}
// //                 onClick={() => setSelectedOption(opt)}
// //               >
// //                 {opt}
// //               </div>
// //             );
// //           })}
// //         </div>

// //         <button className="continue-btn3" onClick={handleContinue}>
// //           Continue <FaArrowRight />
// //         </button>
// //       </div>

// //       {/* ---------- Modal ---------- */}
// //       {showModal && (
// //         <div className="modal-overlay">
// //           <div className="modal-box">
// //             <h3>⚠️ Please Select an Option</h3>
// //             <p>You must select your snack frequency before continuing.</p>
// //             <button className="modal-btn" onClick={() => setShowModal(false)}>
// //               OK
// //             </button>
// //           </div>
// //         </div>
// //       )}
// //     </div>
// //   );
// // }


// // src/components/SnackFrequency/SnackFrequency.jsx


// // import React, { useState } from "react";
// // import { FaArrowRight } from "react-icons/fa";
// // import { useNavigate } from "react-router-dom";
// // import "./SnackFrequency.css";
// // import { useProfile } from "../../context/ProfileContext"; // Import hook

// // export default function SnackFrequency() {
// //   const navigate = useNavigate();
// //   const { profileData, updateProfileData } = useProfile(); // Use context
// //   const [selectedOption, setSelectedOption] = useState(profileData.snack_frequency || "");
// //   const [showModal, setShowModal] = useState(false);

// //   const options = [
// //     "One Time", "Two Times", "Three Times", "Four Times", "Five Times", "Six Times"
// //   ];

// //   const handleContinue = () => {
// //     if (selectedOption) {
// //       updateProfileData({ snack_frequency: selectedOption }); // Save to context
// //       navigate("/callori-intake");
// //     } else {
// //       setShowModal(true);
// //     }
// //   };

// //   // ... (rest of your JSX is fine) ...
// //   return (
// //     <div className="snack-page">
// //       <div className="snack-card">
// //         <div className="snack-logo-container">
// //           <img src="Logo.png" alt="Logo" className="snack-logo" />
// //         </div>
// //         <h2>Tell Us About Your Snack Routine.</h2>
// //         <div className="options-scroll">
// //           {options.map((opt, idx) => {
// //             const selectedIndex = options.indexOf(selectedOption);
// //             const distance = Math.abs(selectedIndex - idx);
// //             let className = "option";
// //             if (selectedOption === opt) className += " selected";
// //             if (distance === 1) className += " nearby";
// //             if (distance === 2) className += " faded";
// //             if (distance >= 3) className += " more-faded";
// //             return (
// //               <div
// //                 key={idx}
// //                 className={className}
// //                 onClick={() => setSelectedOption(opt)}
// //               >
// //                 {opt}
// //               </div>
// //             );
// //           })}
// //         </div>
// //         <button className="continue-btn3" onClick={handleContinue}>
// //           Continue <FaArrowRight />
// //         </button>
// //       </div>
// //       {showModal && (
// //         <div className="modal-overlay">
// //           <div className="modal-box">
// //             <h3>⚠️ Please Select an Option</h3>
// //             <p>You must select your snack frequency before continuing.</p>
// //             <button className="modal-btn" onClick={() => setShowModal(false)}>
// //               OK
// //             </button>
// //           </div>
// //         </div>
// //       )}
// //     </div>
// //   );
// // }



// import React, { useState } from "react";
// import { FaArrowRight } from "react-icons/fa";
// import { useNavigate } from "react-router-dom";
// import "./SnackFrequency.css";
// import { RiErrorWarningLine } from "react-icons/ri";
// import { useProfile } from "../../context/ProfileContext"; // ✅ 1. Import hook

// export default function SnackFrequency() {
//   const navigate = useNavigate();
//   const { profileData, updateProfileData } = useProfile(); // ✅ 2. Use context
  
//   // Set initial state from context
//   const [selectedOption, setSelectedOption] = useState(
//     profileData.snack_frequency || ""
//   );
//   const [showModal, setShowModal] = useState(false);

//   const options = [
//     "One Time",
//     "Two Times",
//     "Three Times",
//     "Four Times",
//     "Five Times",
//     "Six Times",
//   ];

//   const handleContinue = () => {
//     if (selectedOption) {
//       updateProfileData({ snack_frequency: selectedOption }); // ✅ 3. Save to context
//       navigate("/callori-intake");
//     } else {
//       setShowModal(true);
//     }
//   };

//   return (
//     <div className="snack-page">
//       <div className="snack-card">
//         {/* ---------- Logo in center above heading ---------- */}
//         <div className="snack-logo-container">
//           <img src="logo1.png" alt="Logo" className="snack-logo" />
//         </div>

//         <h2>Tell Us About Your Snack Routine.</h2>

//         {/* ---------- Scrollable Options ---------- */}
//         <div className="options-scroll">
//           {options.map((opt, idx) => {
//             const selectedIndex = options.indexOf(selectedOption);
//             const distance = Math.abs(selectedIndex - idx);

//             let className = "option";
//             if (selectedOption === opt) className += " selected";
//             if (distance === 1) className += " nearby";
//             if (distance === 2) className += " faded";
//             if (distance >= 3) className += " more-faded";

//             return (
//               <div
//                 key={idx}
//                 className={className}
//                 onClick={() => setSelectedOption(opt)}
//               >
//                 {opt}
//               </div>
//             );
//           })}
//         </div>

//         <button className="continue-btn3" onClick={handleContinue}>
//           Continue <FaArrowRight />
//         </button>
//       </div>

//       {/* ---------- Modal ---------- */}
//       {showModal && (
//         <div className="modal-overlay">
//           <div className="modal-box">
//             <div className="modal-header">
//               <RiErrorWarningLine className="modal-icon" />
//               <h3 className="modal-title">
//                 You must select your snack frequency before continuing.
//               </h3>
//             </div>

//             <button className="modal-btn" onClick={() => setShowModal(false)}>
//               OK
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }


import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "./SnackFrequency.css";
import { RiErrorWarningLine } from "react-icons/ri";

export default function SnackFrequency() {
  const [selectedOption, setSelectedOption] = useState("");
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const options = [
    "One Time",
    "Two Times",
    "Three Times",
    "Four Times",
    "Five Times",
    "Six Times",
  ];

  const handleContinue = () => {
    if (selectedOption) {
      navigate("/callori-intake");
    } else {
      setShowModal(true);
    }
  };

  return (
    <div className="snack-page">
      <div className="snack-card">
        {/* ---------- Logo in center above heading ---------- */}
        <div className="snack-logo-container">
          <img src="logo1.png" alt="Logo" className="snack-logo" />
        </div>

        <h2>Tell Us About Your Snack Routine.</h2>
        {/* <p className="note-text">
          Please select how many times you usually have snacks in a day.
        </p> */}

        {/* ---------- Scrollable Options ---------- */}
        <div className="options-scroll">
          {options.map((opt, idx) => {
            const selectedIndex = options.indexOf(selectedOption);
            const distance = Math.abs(selectedIndex - idx);

            let className = "option";
            if (selectedOption === opt) className += " selected";
            if (distance === 1) className += " nearby";
            if (distance === 2) className += " faded";
            if (distance >= 3) className += " more-faded";

            return (
              <div
                key={idx}
                className={className}
                onClick={() => setSelectedOption(opt)}
              >
                {opt}
              </div>
            );
          })}
        </div>

        <button className="continue-btn3" onClick={handleContinue}>
          Continue <FaArrowRight />
        </button>
      </div>

      {/* ---------- Modal ---------- */}
      {showModal && (
        <div className="modal-overlay">
          <div className="modal-box">
            <div className="modal-header">
              <RiErrorWarningLine className="modal-icon" />
              <h3 className="modal-title">
                You must select your snack frequency before continuing.
              </h3>
            </div>

            <button className="modal-btn" onClick={() => setShowModal(false)}>
              OK
            </button>
          </div>
        </div>
      )}
    </div>
  );
}