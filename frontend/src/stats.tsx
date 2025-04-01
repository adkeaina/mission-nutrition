import React, { useState, useEffect } from "react";
import "./styles/stats.css";
import { useNavigate } from "react-router-dom";

interface Macro {
  current: number;
  goal: number;
}

interface StatsProps {
  macros: {
    protein: Macro;
    fat: Macro;
    carbs: Macro;
  };
}

const Stats: React.FC<StatsProps> = ({ macros }) => {
  const navigate = useNavigate();

  // Initialize waterCount from localStorage or default to 6
  const [waterCount, setWaterCount] = useState<number>(() => {
    const storedCount = localStorage.getItem("waterCount");
    return storedCount ? parseInt(storedCount) : 6;
  });
  const totalBottles = 8;

  // Persist waterCount changes in localStorage
  useEffect(() => {
    localStorage.setItem("waterCount", waterCount.toString());
  }, [waterCount]);

  const getPercent = (macro: Macro) =>
    Math.round((macro.current / macro.goal) * 100);

  const getMacroColor = (percent: number) => {
    if (percent < 50) return "#FF6961";
    if (percent < 80) return "#FFA500";
    return "#66BB6A";
  };

  const handleRecordMacros = () => {
    navigate("/record-macros");
  };

  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap"
        rel="stylesheet"
      />
      <div className="stats-container">
        <div className="status-bar">
          <div className="time">9:41</div>
          <div className="status-icons">
            {/* Status Icon SVG (unchanged) */}
          </div>
        </div>

        <h1 className="stats-title">Stats</h1>

        <div className="macro-charts">
          {Object.entries(macros).map(([key, macro]) => {
            const percent = getPercent(macro);
            // Cap the drawing percentage at 100% for visual consistency
            const displayedPercent = percent > 100 ? 100 : percent;
            const radius = 60;
            const circumference = 2 * Math.PI * radius;
            const strokeDashoffset =
              circumference - (displayedPercent / 100) * circumference;

            return (
              <div className="chart-item" key={key}>
                <h2 className="chart-label">
                  {key.charAt(0).toUpperCase() + key.slice(1)}
                </h2>
                <div className="chart-container">
                  <svg
                    width="134"
                    height="175"
                    viewBox="0 0 134 175"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="macro-chart"
                  >
                    <circle
                      cx="60"
                      cy="90"
                      r={radius}
                      fill="none"
                      stroke="#EFEFEF"
                      strokeWidth="12"
                    />
                    <circle
                      cx="60"
                      cy="90"
                      r={radius}
                      fill="none"
                      stroke={getMacroColor(percent)}
                      strokeWidth="12"
                      strokeDasharray={circumference}
                      strokeDashoffset={strokeDashoffset}
                      transform="rotate(-90 60 90)"
                      style={{ transition: "stroke-dashoffset 1s ease" }}
                    />
                    <circle cx="59" cy="90" r="30" fill="white" />
                    <text
                      fill="black"
                      xmlSpace="preserve"
                      style={{ whiteSpace: "pre" }}
                      fontFamily="Inter"
                      fontSize="20"
                      letterSpacing="0px"
                    >
                      <tspan x="39.1758" y="97.2727">
                        {percent}%
                      </tspan>
                    </text>
                  </svg>
                </div>
                <div className="chart-value">
                  {macro.current}/{macro.goal} g
                </div>
              </div>
            );
          })}
        </div>

        <div className="water-tracking">
          <h2 className="water-title">Water</h2>
          <div className="water-grid">
            {[...Array(waterCount)].map((_, index) => (
              <div
                key={`full-${index}`}
                className="water-bottle"
                onClick={() => setWaterCount(index + 1)}
              >
                <svg
                  width="73"
                  height="73"
                  viewBox="0 0 73 73"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="bottle-svg"
                >
                  <path
                    d="M30 64L28.5 62.5L28 60.5V38L29.5 35.5V32L28 26.5L29 23L31.5 18.5L33 16V10.5L33.5 9.5L35 8.5H38L39.5 9L40 16L43 21L45 24.5V28L43.5 30.5V34L45 38.5V57L44.5 63.5L41 64.5L39 63L38 64H35L33.5 62.5L32.5 64H30Z"
                    fill="#FF6961"
                  />
                </svg>
              </div>
            ))}
            {[...Array(totalBottles - waterCount)].map((_, index) => (
              <div
                key={`empty-${index}`}
                className="water-bottle"
                onClick={() => setWaterCount(waterCount + index + 1)}
              >
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/27b8b9e351ca2cd3f46441e033094a593cfad812"
                  alt="Empty water bottle"
                  className="bottle-img"
                />
              </div>
            ))}
          </div>
        </div>

        <button className="record-button" onClick={handleRecordMacros}>
          Record Macros
        </button>

        <nav className="navigation">
          <div className="nav-item">
            <i className="ti ti-search nav-icon" />
            <span>Search</span>
          </div>
          <div className="nav-item">
            <i className="ti ti-calendar nav-icon" />
            <span>Calendar</span>
          </div>
          <div className="nav-item">
            <i className="ti ti-home nav-icon" />
            <span>Home</span>
          </div>
          <div className="nav-item active">
            <i className="ti ti-chart-bar nav-icon" />
            <span>Stats</span>
          </div>
          <div className="nav-item">
            <i className="ti ti-settings nav-icon" />
            <span>Settings</span>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Stats;
