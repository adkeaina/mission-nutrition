import React, { useState } from "react";

const RecordMacros: React.FC = () => {
  const [protein, setProtein] = useState("");
  const [fat, setFat] = useState("");
  const [carbs, setCarbs] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: handle form submission logic (e.g., send to backend or update state)
    alert(`Protein: ${protein}, Fat: ${fat}, Carbs: ${carbs}`);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Record Macros</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Protein (g):
            <input
              type="number"
              value={protein}
              onChange={(e) => setProtein(e.target.value)}
            />
          </label>
        </div>
        <div>
          <label>
            Fat (g):
            <input
              type="number"
              value={fat}
              onChange={(e) => setFat(e.target.value)}
            />
          </label>
        </div>
        <div>
          <label>
            Carbs (g):
            <input
              type="number"
              value={carbs}
              onChange={(e) => setCarbs(e.target.value)}
            />
          </label>
        </div>
        <button type="submit">Save Macros</button>
      </form>
    </div>
  );
};

export default RecordMacros;
