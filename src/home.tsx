import React from "react";
import "./styles/home.css";
import { useNavigate } from 'react-router-dom';

const Homepage: React.FC = () => {
  const navigate = useNavigate();  // Initialize navigate from react-router-dom

  return (
    <div className="homepage">
      <div className="welcome-text">
        <span className="welcome-heading">Welcome!</span>
        <br />
        <br />
        <span className="welcome-subtext">Select an option below</span>
      </div>

      <div className="action-button action-button-first" onClick={() => navigate('/today')}>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/990308da33090936e02078ca4480b79c82d65d1757cfbb38874a7398d8086c22?placeholderIfAbsent=true&apiKey=12e28406f08449fa85c02ddc97075e3b"
          className="action-icon"
          style={{ width: "106px" }}
          alt="Log meal icon"
        />
        <div className="action-text">
          Log <br />
          Meal
        </div>
      </div>

      <div className="action-button action-button-second" onClick={() => navigate('/recipe')}>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/410638fab30ddd7db1643b05610676142b6cc8dd8e03200757a4d9581562118a?placeholderIfAbsent=true&apiKey=12e28406f08449fa85c02ddc97075e3b"
          className="action-icon"
          style={{ width: "44px", aspectRatio: "0.44" }}
          alt="Make meal icon"
        />
        <div className="action-text">
          Make a <br />
          Meal
        </div>
      </div>

      <div className="action-button action-button-third" onClick={() => navigate('/today')}>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/e64c49a8a53ccf7893fcf55dd9b933d97445ae7ca1d9bbe0d8a880519302f3e0?placeholderIfAbsent=true&apiKey=12e28406f08449fa85c02ddc97075e3b"
          className="action-icon"
          style={{ width: "83px", aspectRatio: "1.12" }}
          alt="Plan week icon"
        />
        <div className="action-text">
          Plan the
          <br />
          Week
        </div>
      </div>

      <div className="notification-card">
        <div className="notification-content">
          <div className="notification-stack">
            <div className="notification-text">
              <div className="notification-title">Announcement</div>
              <div className="notification-body">
                New recipes available in your area!
              </div>
            </div>
            <button className="view-recipes-button" onClick={() => navigate('/recipe')}>
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/f4adad037173793fcc17449030d8cf01760bba3b80ca345903c623299975c10b?placeholderIfAbsent=true&apiKey=12e28406f08449fa85c02ddc97075e3b"
                style={{ width: "16px", aspectRatio: "1" }}
                alt="View icon"
              />
              <div>View Recipes</div>
            </button>
          </div>
          <button className="close-button">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/210e0f93c70dcb659aceed8ba1078cc19c909d21a7c51efef92e46c424bad596?placeholderIfAbsent=true&apiKey=12e28406f08449fa85c02ddc97075e3b"
              style={{ width: "20px", aspectRatio: "1" }}
              alt="Close"
            />
          </button>
        </div>
      </div>

      <nav className="nav-bar">
        <div className="nav-button" onClick={() => navigate('/search')}>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/906f5b4d8e52029e9ea132cc943c28ac50b092aaac526fd3a50bdfbaa598113d?placeholderIfAbsent=true&apiKey=12e28406f08449fa85c02ddc97075e3b"
            className="nav-icon"
            alt="Search"
          />
          <div className="nav-label">Search</div>
        </div>
        <div className="nav-button" onClick={() => navigate('/today')}>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/3a8aae7716343d1d16f5c47d632daffab16f446ec30ad6d6ce9eed0816c340b7?placeholderIfAbsent=true&apiKey=12e28406f08449fa85c02ddc97075e3b"
            className="nav-icon"
            alt="Calendar"
          />
          <div className="nav-label">Calendar</div>
        </div>
        <div className="nav-button active">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/ba4fe0b3905ab78eb8ce507b02c035aab6117090c948f9755b060e990e76b239?placeholderIfAbsent=true&apiKey=12e28406f08449fa85c02ddc97075e3b"
            className="nav-icon"
            alt="Home"
          />
          <div className="nav-label">Home</div>
        </div>
        <div className="nav-button" onClick={() => navigate('/stats')}>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/dc2eeba73a0b0e12e7a98747c4f59fa6c3842ed2eb6b03944f3bff5b93b21663?placeholderIfAbsent=true&apiKey=12e28406f08449fa85c02ddc97075e3b"
            className="nav-icon"
            alt="Stats"
          />
          <div className="nav-label">Stats</div>
        </div>
        <div className="nav-button" onClick={() => navigate('/settings')}>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/38fcfd4cef327d2ae712f874b5d633c019c29ebc019ad8e6bad257c17c822df4?placeholderIfAbsent=true&apiKey=12e28406f08449fa85c02ddc97075e3b"
            className="nav-icon"
            alt="Settings"
          />
          <div className="nav-label">Settings</div>
        </div>
      </nav>
    </div>
  );
};

export default Homepage;
