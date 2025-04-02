import { useState } from "react";
import TimeFilter from "./component/TimeFilter";
import RecipeCardList from "./component/RecipeCardList"; // Import RecipeCardList

function ParentComponent() {
  // State to track the selected time filter
  const [selectedTime, setSelectedTime] = useState<string | null>(null);

  // Function to handle changes in the selected time filter
  const handleTimeFilterChange = (selectedTime: string | null) => {
    setSelectedTime(selectedTime);
  };

  return (
    <div className="container mt-4">
      <div className="row text-white">
        <h1>
          <strong>Recipes</strong>
        </h1>
        <div className="col-md-3">
          {/* Pass handleTimeFilterChange as a prop to TimeFilter */}
          <TimeFilter onTimeFilterChange={handleTimeFilterChange} />
        </div>
        <div className="col-md-9">
          {/* Pass selectedTime as a prop to RecipeCardList */}
          <RecipeCardList selectedTime={selectedTime} />
        </div>
      </div>
    </div>
  );
}

export default ParentComponent;
