🍽️ Fit-Fare Nutrition System
Developed by Purva Tapare
Organization: Fit-Fare
🧠 Overview

The Fit-Fare Nutrition System is designed to help users build a personalized nutrition profile through a simple, step-by-step interface.
Users can log in, set their food preferences, allergies, snack frequency, and calorie intake — all of which are securely stored in a MySQL database through protected API calls.

⚙️ System Architecture
1. Frontend (React + Context API)

Your frontend is responsible for collecting user inputs in multiple steps:

FoodPreferences.jsx – Selects vegetarian/non-vegetarian options

Allergies.jsx – Chooses common allergies

SnackFrequency.jsx – Chooses how often snacks are consumed

CalorieIntake.jsx – Sets daily calorie goals

Summary.jsx – Displays final profile summary for submission

Each step saves the data in a central React state (profileData) using ProfileContext.jsx.

2. Backend (Node.js + Express + MySQL)

Your backend handles authentication, validation, and database storage.

Authentication Flow

POST /api/auth/register → Registers a new user

POST /api/auth/login → Logs in the user and returns a JWT token

Profile Management

POST /api/profile → Protected route that saves all nutrition data

GET /api/profile → Protected route that retrieves user profile data

🔁 Data Flow (End-to-End)
Step 1: User Login

The user visits the /login page (Login.jsx)

Enters email and password

login() function from AuthContext.jsx is called

Backend validates credentials and returns a JWT Token

Token is stored in localStorage on the frontend

Step 2: Profile Creation

The user navigates through setup pages (e.g., FoodPreferences.jsx, Allergies.jsx, etc.)

On every “Continue” click, updateProfileData() from ProfileContext.jsx updates the profileData object in React

Step 3: Final Submission

On the Summary.jsx page, user clicks Confirm & Save Profile

The submitProfile() function sends:

The entire profileData JSON

The JWT token (Authorization header: Bearer <token>)
to the backend API: POST /api/profile

Step 4: Backend Processing

The request reaches the protected endpoint /api/profile

authMiddleware.js verifies the token and extracts the user_id

profileController.js handles the request and calls createOrUpdateProfile() in profileModel.js

MySQL saves the data in user_profiles table linked to the user ID

🗃️ Database Schema (fitfare_db)
Table: users
Column	Type	Description
id	INT (PK)	Unique user ID
email	VARCHAR(100)	User email
password_hash	VARCHAR(255)	Encrypted password
Table: user_profiles
Column	Type	Description
id	INT (PK)	Profile ID
user_id	INT (FK)	Linked user ID
food_preference	VARCHAR(100)	Example: “Vegetarian”
common_allergies	JSON	Example: ["Gluten", "Egg"]
snack_frequency	VARCHAR(50)	Example: “Two Times”
calorie_intake	INT	Example: 2000
other_notes	TEXT	Example: “Avoid fried food.”
🧩 File Responsibilities
File	Role
AuthContext.jsx	Handles authentication, stores JWT token
ProfileContext.jsx	Manages all profile data across setup pages
profileController.js	Controls logic for saving and retrieving profiles
profileModel.js	Handles SQL queries and data operations
authMiddleware.js	Protects routes by verifying JWT token
🔒 API Routes Summary
Method	Route	Description
POST	/api/auth/register	Register new user
POST	/api/auth/login	Login and get JWT token
POST	/api/profile	Save or update profile (Protected)
GET	/api/profile	Retrieve user profile (Protected)
✅ Example: Data Flow Summary
Frontend Component	React State Key	JSON Key	Database Column
FoodPreferences.jsx	food_preference	"food_preference": "I'm vegetarian"	food_preference
Allergies.jsx	common_allergies	"common_allergies": ["Gluten", "Egg"]	common_allergies
SnackFrequency.jsx	snack_frequency	"snack_frequency": "Two Times"	snack_frequency
CalorieIntake.jsx	calorie_intake	"calorie_intake": 2000	calorie_intake
FoodAllergies.jsx	other_notes	"other_notes": "Avoid fried food."	other_notes
🧾 Example Request (POST /api/profile)
{
  "food_preference": "Vegetarian",
  "common_allergies": ["Peanut", "Gluten"],
  "snack_frequency": "Twice",
  "calorie_intake": 2000,
  "other_notes": "Avoid oily food"
}

👩‍💻 Developer Information

Name: Purva Tapare
Organization: Fit-Fare
Role: Full Stack Developer
Technologies Used: React, Node.js, Express.js, MySQL, JWT

🤝 Collaboration & Contributions

This project was built as part of the Fit-Fare initiative to promote health and nutrition through technology.
Special thanks to all contributors, mentors, and team members who supported this project’s development journey.

Frontend Development: Prerna 


Backend Integration: Fit-Fare Dev Team

UI/UX Design Support: Team Fit-Fare

💡 We believe collaboration drives innovation. If you’d like to contribute or suggest improvements, feel free to fork this repository and submit a pull request.