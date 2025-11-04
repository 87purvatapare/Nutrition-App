<h1 align="center">🍽️ Fit-Fare Nutrition System</h1>
<h3 align="center">Developed by <strong>Purva Tapare</strong> | Organization: <strong>Fit-Fare</strong></h3>

---

## 🧠 Overview

**Fit-Fare Nutrition System** is a smart and interactive web application designed to help users build their **personalized nutrition profiles** with ease.  
Users can log in, select their **food preferences**, list **common allergies**, set **snack frequency**, and define **daily calorie intake** — all data securely stored in a **MySQL database** via protected backend APIs.

---

## 🚀 Key Features

- 🍱 Personalized nutrition tracking  
- 🧾 User authentication (Signup/Login)  
- 🔄 Dynamic data management via React Context API  
- 💾 Secure backend API integration with Express & MySQL  
- 📊 Centralized profile data storage  
- 🧠 Easy-to-use multi-step profile setup  
- 🔐 JWT-based user protection  

---

## ⚙️ System Architecture

### 🖥️ Frontend (React + Context API)
The frontend is developed in **React** and manages all user interactions with a clean UI and smooth navigation flow.

| Component | Functionality |
|------------|----------------|
| `FoodPreferences.jsx` | Select vegetarian / non-vegetarian options |
| `Allergies.jsx` | Choose common food allergies |
| `SnackFrequency.jsx` | Set snack frequency |
| `CalorieIntake.jsx` | Define daily calorie goals |
| `Summary.jsx` | Review and confirm nutrition profile |

➡️ All user input is stored in a **central state (`profileData`)** using `ProfileContext.jsx`.

---

### 💾 Backend (Node.js + Express + MySQL)

The backend handles **authentication**, **data validation**, and **secure storage** through API endpoints.

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

1. **User Login** — User logs in at `/login`, JWT token generated and stored in `localStorage`.  
2. **Profile Creation** — Users fill nutrition details step-by-step using form components.  
3. **State Update** — `ProfileContext.jsx` updates user data via `updateProfileData()`.  
4. **Submission** — On final step, `submitProfile()` sends complete data to backend using `POST /api/profile`.  
5. **Database Handling** — `authMiddleware.js` verifies token, and `profileController.js` stores data in `user_profiles` table.

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
| `common_allergies` | JSON | e.g. ["Peanut", "Gluten"] |
| `snack_frequency` | VARCHAR(50) | e.g. "Twice" |
| `calorie_intake` | INT | e.g. 2000 |
| `other_notes` | TEXT | Additional notes |

---

## 🧩 File Responsibilities

| File | Description |
|------|--------------|
| `AuthContext.jsx` | Handles authentication and token management |
| `ProfileContext.jsx` | Manages global nutrition data across React components |
| `profileController.js` | Business logic for profile creation & updates |
| `profileModel.js` | MySQL queries and schema handling |
| `authMiddleware.js` | Verifies JWT for protected routes |
| `db.js` | Establishes MySQL database connection |

---

## 💻 Technologies Used

| Category | Technology |
|-----------|-------------|
| **Frontend** | React.js, Context API, Axios |
| **Backend** | Node.js, Express.js |
| **Database** | MySQL |
| **Authentication** | JWT (JSON Web Token) |
| **Version Control** | Git & GitHub |

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
💡 Future Enhancements

🧮 Automated calorie suggestion system

📱 Mobile-friendly responsive dashboard

📧 Email-based reminders for meal tracking

🩺 AI-powered meal recommendations

🤝 Collaboration & Contributions

This project was developed under the Fit-Fare Organization to promote digital wellness and personalized nutrition management.
💡 We believe collaboration drives innovation!

🙌 Special Thanks:

🧠 Fit-Fare Dev Team — Backend integration & API development

🎨 UI/UX Design Team — Design guidance & page flow support

💬 Mentors & Reviewers — Valuable feedback and testing

If you'd like to contribute or suggest improvements,
📬 Fork this repository and submit a Pull Request!
