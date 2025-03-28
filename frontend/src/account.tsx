import React, { useState } from "react";
import "./styles/account.css";
import { useNavigate } from "react-router-dom";

interface UserInfo {
    username: string;
    email: string;
    firstName: string;
    lastName: string;
}

const Account: React.FC = () => {
    const navigate = useNavigate();

    const [user, setUser] = useState<UserInfo>({
        username: "user123",
        email: "user@example.com",
        firstName: "John",
        lastName: "Doe",
    });

    const handleLogout = () => {
        console.log("User logged out");
        navigate("/login");
    };

    const handleEdit = () => {
        console.log("Edit account - not implemented");
    };

    return (
        <div className="account-wrapper">
            <div className="account-card">
                <h1 className="account-title">My Profile</h1>
                <div className="account-info">
                    <div className="info-row">
                        <label>Username:</label>
                        <span>{user.username}</span>
                    </div>
                    <div className="info-row">
                        <label>Email:</label>
                        <span>{user.email}</span>
                    </div>
                    <div className="info-row">
                        <label>First Name:</label>
                        <span>{user.firstName}</span>
                    </div>
                    <div className="info-row">
                        <label>Last Name:</label>
                        <span>{user.lastName}</span>
                    </div>
                </div>
                <div className="account-buttons">
                    <button className="edit-btn" onClick={handleEdit}>Edit</button>
                    <button className="logout-btn" onClick={handleLogout}>Logout</button>
                </div>
            </div>
        </div>
    );
};

export default Account;
