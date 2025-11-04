<h1 align="center">🍽️ Fit-Fare Nutrition System</h1>
<h3 align="center">Developed by <strong>Purva Tapare</strong> | Organization: <strong>Fit-Fare</strong></h3>

---

## 🧠 Overview

**Fit-Fare Nutrition System** is an intelligent health companion that helps users build their personalized nutrition profiles through a simple, step-by-step process.  
Users can log in, define food preferences, allergies, snack frequency, and calorie intake — all data is securely stored in a **MySQL database** through protected backend APIs.

---

## ⚙️ System Architecture

### 🖥️ Frontend (React + Context API)
The frontend is built using React and manages user interactions and navigation across multiple profile setup pages.

| Component | Functionality |
|------------|----------------|
| `FoodPreferences.jsx` | Select vegetarian / non-vegetarian options |
| `Allergies.jsx` | Choose common food allergies |
| `SnackFrequency.jsx` | Set snack frequency |
| `CalorieIntake.jsx` | Define daily calorie goals |
| `Summary.jsx` | Review and confirm final nutrition profile |

All user input is maintained in a **central React state (`profileData`)** via `ProfileContext.jsx`.

---

### 💾 Backend (Node.js + Express + MySQL)

Handles authentication, validation, and secure data storage.

#### 🔐 Authentication Routes
| Method | Route | Description |
|--------|--------|-------------|
| `POST` | `/api/auth/register` | Register a new user |
| `POST` | `/api/auth/login` | Authenticate user and issue JWT token |

#### 📦 Profile Routes
| Method | Route | Description |
|--------|--------|-------------|
| `POST` | `/api/profile` | Save or update nutrition profile *(Protected)* |
| `GET` | `/api/profile` | Fetch user profile *(Protected)* |

---

## 🔁 Data Flow (End-to-End)

### Step 1: User Login  
- User logs in at `/login`.  
- JWT token is generated and stored in `localStorage`.  

### Step 2: Profile Creation  
- Users fill out their nutrition details step-by-step.  
- Data is updated in `ProfileContext.jsx` using `updateProfileData()`.  

### Step 3: Submission  
- `submitProfile()` sends complete profile data and JWT token to backend via `POST /api/profile`.

### Step 4: Database Handling  
- `authMiddleware.js` verifies the token and extracts `user_id`.  
- `profileController.js` invokes `createOrUpdateProfile()` from `profileModel.js`.  
- Data is stored in MySQL `user_profiles` table.

---

## 🗃️ Database Schema — `fitfare_db`

### Table: `users`
| Column | Type | Description |
|---------|------|-------------|
| `id` | INT (PK) | Unique user ID |
| `email` | VARCHAR(100) | User email |
| `password_hash` | VARCHAR(255) | Encrypted password |

### Table: `user_profiles`
| Column | Type | Description |
|---------|------|-------------|
| `id` | INT (PK) | Profile ID |
| `user_id` | INT (FK) | Linked user ID |
| `food_preference` | VARCHAR(100) | e.g. "Vegetarian" |
| `common_allergies` | JSON | e.g. ["Peanut", "Egg"] |
| `snack_frequency` | VARCHAR(50) | e.g. "Twice" |
| `calorie_intake` | INT | e.g. 2000 |
| `other_notes` | TEXT | Additional notes |

---

## 🧩 File Responsibilities

| File | Description |
|------|--------------|
| `AuthContext.jsx` | Handles user authentication and JWT storage |
| `ProfileContext.jsx` | Manages nutrition data across React components |
| `profileController.js` | Business logic for creating/updating profiles |
| `profileModel.js` | MySQL queries and data processing |
| `authMiddleware.js` | JWT verification for protected routes |
| `db.js` | Database connection setup |

---

## 💻 Technologies Used

**Frontend:** React.js, Context API, Axios  
**Backend:** Node.js, Express.js  
**Database:** MySQL  
**Authentication:** JWT (JSON Web Token)  
**Version Control:** Git & GitHub  

---

## 🧪 Example API Request

### POST `/api/profile`
```json
{
  "food_preference": "Vegetarian",
  "common_allergies": ["Peanut", "Gluten"],
  "snack_frequency": "Twice",
  "calorie_intake": 2000,
  "other_notes": "Avoid oily food"
}
🤝 Collaboration & Contributions

This project was developed under the Fit-Fare Organization to promote digital wellness and personalized nutrition management.
💡 We believe collaboration drives innovation!

Special Thanks:

🧠 Fit-Fare Dev Team — Backend integration & API development

🎨 UI/UX Design Team — Design guidance & page flow support

💬 Mentors & Reviewers — For valuable feedback and testing

If you'd like to contribute or suggest improvements,
📬 Fork this repository and submit a Pull Request!

<h3 align="center">🌟 Empowering Health Through Technology — Fit-Fare 🌿</h3> 
