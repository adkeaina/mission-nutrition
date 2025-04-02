

import React, { useState } from "react";
import "./styles/login.css";
import { useNavigate } from "react-router-dom";

interface LoginFormData {
  username: string;
  password: string;
}

interface LoginProps {
  onLogin: (isAuthenticated: boolean) => void; // Define the prop type for the login function
}

const Login: React.FC<LoginProps> = ({ onLogin }) => {
  const navigate = useNavigate();  // Initialize navigate from react-router-dom

  const [formData, setFormData] = useState<LoginFormData>({
    username: "",
    password: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login logic here
    const response = await fetch(`https:localhost:5000/api/Database/user/${formData.username}`);
    const data = await response.json();
    if (data && data.password === formData.password) {
      localStorage.setItem("username", formData.username); // Store username in local storage
      onLogin(true); // Call the onLogin prop function with true
    }
  };

  const handleSignUpClick = () => {
    navigate('/signup');
  };

  return (
    <div className="login-container">
      <div className="login-content">
        <h1 className="login-title">Login</h1>

        <div className="login-image-container">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/19b62f6e8068e7cfce2cef4139c2ad0e9384f1d2"
            alt=""
            className="login-image"
          />
        </div>

        <form onSubmit={handleSubmit} className="login-form">
          <div className="input-group-login">
            <div className="input-wrapper-login">
              <input
                type="text"
                name="username"
                placeholder="Username"
                value={formData.username}
                onChange={handleInputChange}
                className="login-input"
                aria-label="Username"
              />
            </div>
          </div>

          <div className="input-group-login">
            <div className="input-wrapper-login">
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleInputChange}
                className="login-input"
                aria-label="Password"
              />
            </div>
          </div>

          <button type="submit" className="login-button">
            Sign in
          </button>

          <div className="signup-prompt">
            <span>Don't have an account?</span>
            <span
              className="signup-link"
              onClick={handleSignUpClick}
              role="button"
              tabIndex={0}
              onKeyPress={(e) => {
                if (e.key === "Enter") handleSignUpClick();
              }}
            >
              Sign up
            </span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
