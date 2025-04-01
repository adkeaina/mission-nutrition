import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

interface RecordMacrosProps {
  updateMacros: (newMacros: { protein: number; fat: number; carbs: number }) => void;
}

const RecordMacros: React.FC<RecordMacrosProps> = ({ updateMacros }) => {
  const navigate = useNavigate();
  const [protein, setProtein] = useState("");
  const [fat, setFat] = useState("");
  const [carbs, setCarbs] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newMacros = {
      protein: Number(protein),
      fat: Number(fat),
      carbs: Number(carbs),
    };
    updateMacros(newMacros);
    navigate("/confirmation", { state: newMacros });
  };

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
        }}
      >
        <h2 style={{ textAlign: "center", marginBottom: "20px" }}>
          Record Macros
        </h2>
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: "15px" }}>
            <label style={{ display: "block", marginBottom: "5px" }}>
              Protein (g):
            </label>
            <input
              type="number"
              value={protein}
              onChange={(e) => setProtein(e.target.value)}
              style={{ width: "100%", padding: "8px" }}
            />
          </div>
          <div style={{ marginBottom: "15px" }}>
            <label style={{ display: "block", marginBottom: "5px" }}>
              Fat (g):
            </label>
            <input
              type="number"
              value={fat}
              onChange={(e) => setFat(e.target.value)}
              style={{ width: "100%", padding: "8px" }}
            />
          </div>
          <div style={{ marginBottom: "15px" }}>
            <label style={{ display: "block", marginBottom: "5px" }}>
              Carbs (g):
            </label>
            <input
              type="number"
              value={carbs}
              onChange={(e) => setCarbs(e.target.value)}
              style={{ width: "100%", padding: "8px" }}
            />
          </div>
          <button
            type="submit"
            style={{
              width: "100%",
              padding: "10px",
              backgroundColor: "white",
              border: "none",
              fontWeight: "bold",
              cursor: "pointer",
              borderRadius: "5px",
            }}
          >
            Save Macros
          </button>
        </form>
      </div>
    </div>
  );
};

export default RecordMacros;
