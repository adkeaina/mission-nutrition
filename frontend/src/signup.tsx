import React, { useState } from "react";
import "./styles/signup.css";
import { useNavigate } from "react-router-dom";

interface SignUpFormData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

const SignUp: React.FC = () => {
  const [formData, setFormData] = useState<SignUpFormData>({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate(); // Initialize navigate from react-router-dom

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle signup logic here
    console.log("Signup attempt with:", formData);
  };

  const handleSignInClick = () => {
    // Handle signin navigation
    navigate("/login");
  };

  return (
    <div className="signup-container">
      <div className="signup-content">
        <div className="signup-header">
          <h1 className="signup-title">Sign Up</h1>
          <div className="signin-prompt">
            Already registered?{" "}
            <span
              className="signin-link"
              onClick={handleSignInClick}
              role="button"
              tabIndex={0}
              onKeyPress={(e) => {
                if (e.key === "Enter") handleSignInClick();
              }}
            >
              Sign in
            </span>
          </div>
        </div>

        <div className="signup-image-container">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/47235d292be9fb2058114195360fb9db75e7b8594da02971d9bf0922d658ec75?placeholderIfAbsent=true&apiKey=12e28406f08449fa85c02ddc97075e3b"
            alt=""
            className="signup-image"
          />
        </div>

        <form onSubmit={handleSubmit} className="signup-form">
          <div className="input-group">
            <div className="input-wrapper">
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                value={formData.firstName}
                onChange={handleInputChange}
                className="signup-input"
                aria-label="First Name"
              />
            </div>
          </div>

          <div className="input-group">
            <div className="input-wrapper">
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={handleInputChange}
                className="signup-input"
                aria-label="Last Name"
              />
            </div>
          </div>

          <div className="input-group">
            <div className="input-wrapper">
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleInputChange}
                className="signup-input"
                aria-label="Email"
              />
            </div>
          </div>

          <div className="input-group">
            <div className="input-wrapper">
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleInputChange}
                className="signup-input"
                aria-label="Password"
              />
            </div>
          </div>

          <button type="submit" className="signup-button">
            Sign up
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
