// // src/pages/Summary.jsx
// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { useProfile } from '../context/ProfileContext';
// import { useAuth } from '../context/AuthContext';
// // You'll need a CSS file for this
// // import './Summary.css';

// const Summary = () => {
//   const { profileData, submitProfile } = useProfile();
//   const { token } = useAuth();
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState('');
//   const navigate = useNavigate();

//   const handleConfirm = async () => {
//     setLoading(true);
//     setError('');
//     try {
//       await submitProfile(token);
//       alert('Profile Saved!');
//       navigate('/home'); // Or to a 'dashboard' page
//     } catch (err) {
//       setError('Failed to save profile. Please try again.');
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="summary-container">
//       <div className="summary-card">
//         <h2>Confirm Your Details</h2>
//         {error && <p className="error">{error}</p>}
        
//         <div className="summary-item">
//           <strong>Food Preference:</strong>
//           <p>{profileData.food_preference || 'Not set'}</p>
//         </div>
        
//         <div className="summary-item">
//           <strong>Allergies:</strong>
//           <p>{profileData.common_allergies.join(', ') || 'None'}</p>
//         </div>
        
//         <div className="summary-item">
//           <strong>Snack Frequency:</strong>
//           <p>{profileData.snack_frequency || 'Not set'}</p>
//         </div>
        
//         <div className="summary-item">
//           <strong>Calorie Intake:</strong>
//           <p>{profileData.calorie_intake} kcal</p>
//         </div>
        
//         <div className="summary-item">
//           <strong>Other Notes:</strong>
//           <p>{profileData.other_notes || 'None'}</p>
//         </div>
        
//         <button 
//           className="confirm-btn" 
//           onClick={handleConfirm} 
//           disabled={loading}
//         >
//           {loading ? 'Saving...' : 'Confirm & Save Profile'}
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Summary;


// src/pages/Summary.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useProfile } from '../context/ProfileContext';
import { useAuth } from '../context/AuthContext';

const Summary = () => {
  const { profileData, submitProfile } = useProfile();
  const { token } = useAuth();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleConfirm = async () => {
    setLoading(true);
    setError('');
    try {
      await submitProfile(token);
      alert('Profile Saved!');
      navigate('/home'); // Or to a 'dashboard' page
    } catch (err) {
      setError('Failed to save profile. Please try again.');
      setLoading(false);
    }
  };

  // --- STYLES ---
  const styles = {
    summaryContainer: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#f4f6f8',
      padding: '20px',
      boxSizing: 'border-box',

      // --- FIX: Force to cover the full screen ---
      position: 'fixed',
      top: '0',
      left: '0',
      width: '100vw',
      height: '100vh',
      zIndex: 1000, // Make sure it's on top
      // --- End of Fix ---
    },
    summaryCard: {
      background: '#ffffff',
      borderRadius: '16px',
      boxShadow: '0 8px 24px rgba(0, 0, 0, 0.1)',
      padding: '2.5rem',
      width: '100%',
      maxWidth: '500px',
      border: '1px solid #e0e0e0',
    },
    h2: {
      textAlign: 'center',
      marginTop: 0,
      marginBottom: '2rem',
      color: '#333',
    },
    summaryItem: {
      marginBottom: '1.25rem',
    },
    summaryItemStrong: {
      fontSize: '1rem',
      color: '#555',
      display: 'block',
      marginBottom: '0.25rem',
    },
    summaryItemP: {
      fontSize: '1.1rem',
      color: '#222',
      margin: 0,
      padding: '0.5rem',
      backgroundColor: '#fafafa',
      border: '1px solid #eee',
      borderRadius: '8px',
    },
    confirmBtn: {
      width: '100%',
      padding: '0.9rem',
      marginTop: '1.5rem',
      border: 'none',
      borderRadius: '8px',
      background: '#007BFF',
      color: 'white',
      fontSize: '1.1rem',
      fontWeight: '600',
      cursor: 'pointer',
    },
    confirmBtnDisabled: {
      background: '#999',
      opacity: 0.7,
      cursor: 'not-allowed',
    },
    error: {
      color: '#d32f2f',
      background: '#ffebee',
      border: '1px solid #d32f2f',
      borderRadius: '8px',
      padding: '0.75rem',
      marginBottom: '1.5rem',
      textAlign: 'center',
    }
  };
  // --- END OF STYLES ---

  return (
    <div style={styles.summaryContainer}>
      <div style={styles.summaryCard}>
        <h2 style={styles.h2}>Confirm Your Details</h2>
        {error && <p style={styles.error}>{error}</p>}
        
        <div style={styles.summaryItem}>
          <strong style={styles.summaryItemStrong}>Food Preference:</strong>
          <p style={styles.summaryItemP}>{profileData.food_preference || 'Not set'}</p>
        </div>
        
        <div style={styles.summaryItem}>
          <strong style={styles.summaryItemStrong}>Allergies:</strong>
          <p style={styles.summaryItemP}>{profileData.common_allergies.join(', ') || 'None'}</p>
        </div>
        
        <div style={styles.summaryItem}>
          <strong style={styles.summaryItemStrong}>Snack Frequency:</strong>
          <p style={styles.summaryItemP}>{profileData.snack_frequency || 'Not set'}</p>
        </div>
        
        <div style={styles.summaryItem}>
          <strong style={styles.summaryItemStrong}>Calorie Intake:</strong>
          <p style={styles.summaryItemP}>{profileData.calorie_intake} kcal</p>
        </div>
        
        <div style={styles.summaryItem}>
          <strong style={styles.summaryItemStrong}>Other Notes:</strong>
          <p style={styles.summaryItemP}>{profileData.other_notes || 'None'}</p>
        </div>
        
        <button 
          style={{
            ...styles.confirmBtn, 
            ...(loading ? styles.confirmBtnDisabled : {}) 
          }}
          onClick={handleConfirm} 
          disabled={loading}
        >
          {loading ? 'Saving...' : 'Confirm & Save Profile'}
        </button>
      </div>
    </div>
  );
};

export default Summary;