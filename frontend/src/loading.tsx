import React from "react";

const Loading: React.FC = () => {
  return (
    <div className="loading-container">
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/6a5022f758206926bbed19fba81a0bfa3094081bd10d7ab0088a8e5cf155830e?placeholderIfAbsent=true"
        alt="Loading indicator"
        className="w-16 h-16 animate-spin"
      />
    </div>
  );
};

export default Loading;
