import React from "react";
import { useLocation } from "react-router-dom";

const ConfirmationPage: React.FC = () => {
  const location = useLocation();
  const { protein, fat, carbs } = location.state || {};

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "80vh",
      }}
    >
      <div
        style={{
          backgroundColor: "#ff6f61",
          padding: "30px",
          borderRadius: "10px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          minWidth: "300px",
          textAlign: "center",
        }}
      >
        <h2 style={{ marginBottom: "20px", color: "black" }}>
          Macros Recorded!
        </h2>
        <p style={{ marginBottom: "15px", color: "black" }}>
          Your macros have been recorded:
        </p>
        <p style={{ color: "black" }}>Protein: {protein} g</p>
        <p style={{ color: "black" }}>Fat: {fat} g</p>
        <p style={{ color: "black" }}>Carbs: {carbs} g</p>
      </div>
    </div>
  );
};

export default ConfirmationPage;
