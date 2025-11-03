// // src/pages/Register.jsx
// import React, { useState } from 'react';
// import { useNavigate, Link } from 'react-router-dom';
// import { useAuth } from '../context/AuthContext';
// // import './Auth.css'; // Reuse the same CSS

// const Register = () => {
//   const [username, setUsername] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');
//   const { register } = useAuth();
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError('');
//     try {
//       await register(username, email, password);
//       navigate('/home'); // Navigate to home after register
//     } catch (err) {
//       setError('Failed to register. Please try again.');
//     }
//   };

//   return (
//     <div className="auth-container">
//       <form className="auth-form" onSubmit={handleSubmit}>
//         <h2>Register</h2>
//         {error && <p className="error">{error}</p>}
//         <div className="form-group">
//           <label>Username</label>
//           <input
//             type="text"
//             value={username}
//             onChange={(e) => setUsername(e.target.value)}
//             required
//           />
//         </div>
//         <div className="form-group">
//           <label>Email</label>
//           <input
//             type="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//           />
//         </div>
//         <div className="form-group">
//           <label>Password</label>
//           <input
//             type="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//           />
//         </div>
//         <button type="submit" className="auth-button">Register</button>
//         <p>
//           Already have an account? <Link to="/login">Login</Link>
//         </p>
//       </form>
//     </div>
//   );
// };

// export default Register;



// src/pages/Register.jsx
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Register = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { register } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      await register(username, email, password);
      navigate('/home'); // Navigate to home after register
    } catch (err) {
      setError('Failed to register. Please try again.');
    }
  };

  // --- STYLES ---
  const styles = {
    authContainer: {
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
    authForm: {
      background: '#ffffff',
      borderRadius: '16px',
      boxShadow: '0 8px 24px rgba(0, 0, 0, 0.1)',
      padding: '2.5rem',
      width: '100%',
      maxWidth: '450px',
      textAlign: 'center',
      border: '1px solid #e0e0e0',
    },
    h2: {
      marginTop: 0,
      marginBottom: '1.5rem',
      fontSize: '1.8rem',
      color: '#333',
    },
    formGroup: {
      marginBottom: '1rem',
      textAlign: 'left',
    },
    label: {
      display: 'block',
      marginBottom: '0.5rem',
      fontWeight: '600',
      color: '#555',
    },
    input: {
      width: '100%',
      padding: '0.8rem 1rem',
      border: '1px solid #ccc',
      borderRadius: '8px',
      fontSize: '1rem',
      boxSizing: 'border-box',
    },
    authButton: {
      width: '100%',
      padding: '0.9rem',
      marginTop: '1rem',
      border: 'none',
      borderRadius: '8px',
      background: '#007BFF',
      color: 'white',
      fontSize: '1.1rem',
      fontWeight: '600',
      cursor: 'pointer',
    },
    error: {
      color: '#d32f2f',
      background: '#ffebee',
      border: '1px solid #d32f2f',
      borderRadius: '8px',
      padding: '0.75rem',
      marginBottom: '1rem',
      textAlign: 'center',
    },
    linkText: {
      marginTop: '1.5rem',
      color: '#555',
    },
    link: {
      color: '#007BFF',
      textDecoration: 'none',
      fontWeight: '600',
    }
  };
  // --- END OF STYLES ---

  return (
    <div style={styles.authContainer}>
      <form style={styles.authForm} onSubmit={handleSubmit}>
        <h2 style={styles.h2}>Register</h2>
        {error && <p style={styles.error}>{error}</p>}
        <div style={styles.formGroup}>
          <label style={styles.label}>Username</label>
          <input
            style={styles.input}
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div style={styles.formGroup}>
          <label style={styles.label}>Email</label>
          <input
            style={styles.input}
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div style={styles.formGroup}>
          <label style={styles.label}>Password</label>
          <input
            style={styles.input}
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" style={styles.authButton}>Register</button>
        <p style={styles.linkText}>
          Already have an account? <Link to="/login" style={styles.link}>Login</Link>
        </p>
      </form>
    </div>
  );
};

export default Register;