// import React from "react";
// import { useNavigate } from "react-router-dom";
// import "./SetupIntro.css";

// const SetupIntro = () => {
//   const navigate = useNavigate();

//   return (
//     <div className="setup-page">
//       <div className="overlay">
//         <div className="dialog-box">
//           {/* ---------- Logo Section ---------- */}
//           <img src="/Logo.png" alt="FitFare Logo" className="setup-logo" />

//           <h1 className="dialog-heading">
//             Hey, Mori! I’m <span className="highlight">FitFare AI</span>
//           </h1>

//           <p className="dialog-text">
//             I’ll guide you through setting up your nutrition preferences today.  
//             Let’s personalize your meal plan and align it with your health goals.
//           </p>

//           <div className="button-section">
//             <button className="btn primary" onClick={() => navigate("/food")}>
//               Yes, start →
//             </button>
//             <button className="btn outline">No, I’ll set up manually ✏️</button>
//             <button className="btn danger" onClick={() => navigate("/")}>
//               No, go back
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SetupIntro;


// import React from "react";
// import { useNavigate } from "react-router-dom";
// import "./SetupIntro.css";

// const SetupIntro = () => {
//   const navigate = useNavigate();

//   return (
//     <div className="setup-page">
//       <div className="overlay">
//         <div className="dialog-box">
//           {/* ---------- Logo Section ---------- */}
//           <img src="/logo1.png" alt="FitFare Logo" className="setup-logo" />

//           <h1 className="dialog-heading">
//             Hey, Mori! I’m <span className="highlight">FitFare AI</span>
//           </h1>

//           <p className="dialog-text">
//             I’ll guide you through setting up your nutrition preferences today.{" "}
//             Let’s personalize your meal plan and align it with your health goals.
//           </p>

//           <div className="button-section">
//             <button className="btn primary" onClick={() => navigate("/food")}>
//               Yes, start →
//             </button>

//             {/* ---------- Replaced Pencil Icon with Image ---------- */}
//             <button className="btn outline">
//               No, I’ll set up manually{" "}
//               <img src="/edit pencil.png" alt="Edit" className="edit-icon" />
//             </button>

//             <button className="btn danger" onClick={() => navigate("/")}>
//               No, go back
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SetupIntro;



import React from "react";
import { useNavigate } from "react-router-dom";
import "./SetupIntro.css";

const SetupIntro = () => {
  const navigate = useNavigate();

  return (
    <div className="setup-page">
      <div className="overlay">
        <div className="dialog-box">
          {/* ---------- Logo Section ---------- */}
          <img src="/logo1.png" alt="FitFare Logo" className="setup-logo" />

          <h1 className="dialog-heading">
            Hey, Mori! I’m <span className="highlight">FitFare AI</span>
          </h1>

          <p className="dialog-text">
            I’ll guide you through setting up your nutrition preferences today.  
            Let’s personalize your meal plan and align it with your health goals.
          </p>

          <div className="button-section">
            <button className="btn primary" onClick={() => navigate("/food")}>
              Yes, start →
            </button>

            {/* ---------- Replaced Pencil Icon with Image ---------- */}
            <button className="btn outline">
              No, I’ll set up manually{" "}
              <img src="/edit pencil.png" alt="Edit" className="edit-icon" />
            </button>

            <button className="btn danger" onClick={() => navigate("/")}>
              No, go back
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SetupIntro;