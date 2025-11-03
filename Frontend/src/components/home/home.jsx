import React from "react";
import { useNavigate } from "react-router-dom";
import {
  AiFillHome,
  AiOutlineRobot,
  AiOutlineBook,
  AiOutlineUser,
  AiOutlinePlusCircle,
} from "react-icons/ai";
import "./home.css";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      {/* Main Content */}
      <div className="home-content">
        <img src="/B3.png" alt="Nutrition Illustration" className="illustration" />
        <h2>Log your Nutrition Daily To Get Better Result</h2>
        <p>Let's manage your nutrition with ease</p>
        <button className="get-started-btn" onClick={() => navigate("/setup")}>
          Get Started →
        </button>
      </div>

      {/* Bottom Navigation */}
      <div className="bottom-nav">
        <div className="nav-item active">
          <AiFillHome size={22} />
          <span>Home</span>
        </div>
        <div className="nav-item">
          <AiOutlineRobot size={22} />
          <span>AI Assistant</span>
        </div>
        <div className="nav-item center-plus">
          <AiOutlinePlusCircle size={30} />
        </div>
        <div className="nav-item">
          <AiOutlineBook size={22} />
          <span>Resources</span>
        </div>
        <div className="nav-item">
          <AiOutlineUser size={22} />
          <span>Profile</span>
        </div>
      </div>
    </div>
  );
};

export default Home;