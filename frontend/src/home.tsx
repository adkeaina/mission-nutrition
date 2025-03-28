import { useState } from "react";
import "./styles/home.css";
import { useNavigate } from 'react-router-dom';

const Homepage = () => {
  const navigate = useNavigate();  // Initialize navigate from react-router-dom
  const [announcementSeen, setAnnouncementSeen] = useState(false);

  return (
    <div className="homepage">
      <div className="welcome-text">
        <span className="welcome-heading">Welcome!</span>
        <br />
        <br />
        <span className="welcome-subtext">Select an option below</span>
      </div>

      <div className="action-button" onClick={() => navigate('/search')}>
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

      <div className="action-button" onClick={() => navigate('/search')}>
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

      <div className="action-button" onClick={() => navigate('/today')}>
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
    {announcementSeen || (
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
          <button className="close-button" onClick={() => setAnnouncementSeen(true)}>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/210e0f93c70dcb659aceed8ba1078cc19c909d21a7c51efef92e46c424bad596?placeholderIfAbsent=true&apiKey=12e28406f08449fa85c02ddc97075e3b"
              style={{ width: "20px", aspectRatio: "1" }}
              alt="Close"
            />
          </button>
        </div>
      </div>
    )}

    </div>
  );
};

export default Homepage;
