import { useState } from 'react';
import './TimeFilter.css';

function TimeFilter({
  onTimeFilterChange,
}: {
  onTimeFilterChange: (selectedTime: string | null) => void;
}) {
  const [searchQuery, setSearchQuery] = useState<string>(''); // State for search input
  const [selectedChip, setSelectedChip] = useState<string | null>(null); // State for selected chip

  // Handle search input changes
  function handleSearchChange(event: React.ChangeEvent<HTMLInputElement>) {
    setSearchQuery(event.target.value);
  }

  // Handle chip selection
  function handleChipClick(chip: string) {
    const newSelection = chip === selectedChip ? null : chip; // Toggle chip selection
    setSelectedChip(newSelection);
    onTimeFilterChange(newSelection); // Pass the selected chip up
  }

  return (
    <div
      className="recipe-filter"
      style={{
        borderRadius: '15px', // Rounds the corners>
      }}
    >
      {/* Search Bar */}
      <input
        type="text"
        placeholder="Search recipes..."
        value={searchQuery}
        onChange={handleSearchChange}
        className="search-input"
      />

      {/* Filter Chips */}
      <div className="filter-chips">
        {['<15 minutes', '16-30 minutes', '31+ minutes'].map((chip) => (
          <button
            key={chip}
            className={`filter-chip ${selectedChip === chip ? 'selected' : ''}`}
            onClick={() => handleChipClick(chip)}
            style={{
              backgroundColor:
                selectedChip === chip
                  ? 'rgba(255, 69, 58, 1)'
                  : 'rgba(255, 105, 97, 1)',
              color: 'white',
              borderRadius: '20px', // Optional: makes the buttons roundish
              padding: '5px 15px', // Adds padding to the buttons
              fontSize: '14px', // Makes the text inside smaller
              margin: '5px',
            }}
          >
            {chip}
          </button>
        ))}
      </div>
    </div>
  );
}

export default TimeFilter;
