import React, { useEffect, useState } from "react";
import "./styles/account.css";
import { useNavigate } from "react-router-dom";

const API_BASE = "https://localhost:5001/api/user";

interface UserInfo {
  username: string;
  password: string; // Optional to store here, but included if needed
  firstName: string;
  lastName: string;
}

const Account: React.FC = () => {
  const navigate = useNavigate();
  const username = localStorage.getItem("username"); // Should be set during login
  const [user, setUser] = useState<UserInfo | null>(null);
  const [editing, setEditing] = useState(false);
  const [form, setForm] = useState({
    username: "",
    password: "",
    firstName: "",
    lastName: "",
  });

  useEffect(() => {
    if (!username) return;

    fetch(`${API_BASE}/user/${username}`)
      .then((res) => res.json())
      .then((data) => {
        setUser(data);
        setForm(data);
      })
      .catch(console.error);
  }, [username]);

  const handleLogout = () => {
    localStorage.removeItem("username");
    navigate("/login");
  };

  const handleEdit = () => {
    setEditing(true);
  };

  const handleSave = async () => {
    try {
      await fetch(`${API_BASE}/user/${username}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      setUser(form);
      setEditing(false);
      alert("Profile updated!");
    } catch (error) {
      console.error("Update failed:", error);
    }
  };

  const handleDelete = async () => {
    if (!window.confirm("Are you sure you want to delete your account?")) return;
    try {
      await fetch(`${API_BASE}/user/${username}`, {
        method: "DELETE",
      });
      alert("Account deleted");
      localStorage.removeItem("username");
      navigate("/login");
    } catch (error) {
      console.error("Delete failed:", error);
    }
  };

  if (!username) return <div>Please log in first.</div>;
  if (!user) return <div>Loading...</div>;

  return (
    <div className="account-wrapper">
      <div className="account-card">
        <h1 className="account-title">My Profile</h1>
        <div className="account-info">
          {["username", "password", "firstName", "lastName"].map((field) => (
            <div className="info-row" key={field}>
              <label>{field.charAt(0).toUpperCase() + field.slice(1)}:</label>
              {editing ? (
                <input
                  type="text"
                  value={(form as any)[field]}
                  onChange={(e) =>
                    setForm({ ...form, [field]: e.target.value })
                  }
                />
              ) : (
                <span>{(user as any)[field]}</span>
              )}
            </div>
          ))}
        </div>
        <div className="account-buttons">
          {editing ? (
            <button className="edit-btn" onClick={handleSave}>Save</button>
          ) : (
            <button className="edit-btn" onClick={handleEdit}>Edit</button>
          )}
          <button className="logout-btn" onClick={handleLogout}>Logout</button>
          <button className="logout-btn" onClick={handleDelete}>Delete</button>
        </div>
      </div>
    </div>
  );
};

export default Account;
