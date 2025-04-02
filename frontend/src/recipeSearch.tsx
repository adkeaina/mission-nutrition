import React from "react";
import "./styles/recipeSearch.css";

const RecipeSearch: React.FC = () => {
  return (
    <div className="recipe-search">

      <div className="content-container">
        <h1 className="page-title">Recipes</h1>

        <div className="search-bar">
          <div className="search-icon">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M22 3H2L10 12.46V19L14 21V12.46L22 3Z"
                stroke="#FF6961"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <input
            type="text"
            className="search-input-search"
            placeholder="Search for recipe"
          />
          <div className="search-button">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19.6 21L13.3 14.7C12.8 15.1 12.225 15.4167 11.575 15.65C10.925 15.8833 10.2333 16 9.5 16C7.68333 16 6.14583 15.3708 4.8875 14.1125C3.62917 12.8542 3 11.3167 3 9.5C3 7.68333 3.62917 6.14583 4.8875 4.8875C6.14583 3.62917 7.68333 3 9.5 3C11.3167 3 12.8542 3.62917 14.1125 4.8875C15.3708 6.14583 16 7.68333 16 9.5C16 10.2333 15.8833 10.925 15.65 11.575C15.4167 12.225 15.1 12.8 14.7 13.3L21 19.6L19.6 21Z"
                fill="#FF6961"
              />
            </svg>
          </div>
        </div>

        <div className="filter-chipss">
          <button className="filter-chip-search">&lt;15 minutes</button>
          <button className="filter-chip-search">16-30 minutes</button>
          <button className="filter-chip-search">31+ minutes</button>
        </div>

        <div className="recipe-list">
          <div className="recipe-card">
            <div className="recipe-info">
              <h2 className="recipe-title-search">Breakfast Burritos</h2>
              <p className="recipe-time">10 minutes</p>
              <p className="recipe-servings">Feeds 2-4 people</p>
              <div className="recipe-rating">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg
                    key={star}
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.85 17.825L12 15.925L15.15 17.85L14.325 14.25L17.1 11.85L13.45 11.525L12 8.125L10.55 11.5L6.9 11.825L9.675 14.25L8.85 17.825ZM5.825 22L7.45 14.975L2 10.25L9.2 9.625L12 3L14.8 9.625L22 10.25L16.55 14.975L18.175 22L12 18.275L5.825 22Z"
                      fill="#FF6961"
                    />
                  </svg>
                ))}
              </div>
            </div>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/1829239b0a18b0bde52156f766677d0bea543562"
              alt="Breakfast Burritos"
              className="recipe-image"
            />
          </div>

          <div className="recipe-card">
            <div className="recipe-info">
              <h2 className="recipe-title-search">Spaghetti</h2>
              <p className="recipe-time">25-30 minutes</p>
              <p className="recipe-servings">Feeds 2 people</p>
              <div className="recipe-rating">
                {[1, 2, 3, 4].map((star) => (
                  <svg
                    key={star}
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.85 17.825L12 15.925L15.15 17.85L14.325 14.25L17.1 11.85L13.45 11.525L12 8.125L10.55 11.5L6.9 11.825L9.675 14.25L8.85 17.825ZM5.825 22L7.45 14.975L2 10.25L9.2 9.625L12 3L14.8 9.625L22 10.25L16.55 14.975L18.175 22L12 18.275L5.825 22Z"
                      fill="#FF6961"
                    />
                  </svg>
                ))}
              </div>
            </div>
            <img
              src="https://placehold.co/160x147/8B4513/8B4513"
              alt="Spaghetti"
              className="recipe-image"
            />
          </div>

          <div className="recipe-card">
            <div className="recipe-info">
              <h2 className="recipe-title-search">Carne Asada Tacos</h2>
              <p className="recipe-time">30 minutes</p>
              <p className="recipe-servings">Feeds 2-4 people</p>
              <div className="recipe-rating">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg
                    key={star}
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.85 17.825L12 15.925L15.15 17.85L14.325 14.25L17.1 11.85L13.45 11.525L12 8.125L10.55 11.5L6.9 11.825L9.675 14.25L8.85 17.825ZM5.825 22L7.45 14.975L2 10.25L9.2 9.625L12 3L14.8 9.625L22 10.25L16.55 14.975L18.175 22L12 18.275L5.825 22Z"
                      fill="#FF6961"
                    />
                  </svg>
                ))}
              </div>
            </div>
            <img
              src="https://placehold.co/160x147/C4A484/C4A484"
              alt="Carne Asada Tacos"
              className="recipe-image"
            />
          </div>

          <div className="recipe-card">
            <div className="recipe-info">
              <h2 className="recipe-title-search">Mac and Cheese</h2>
              <p className="recipe-time">12 minutes</p>
              <p className="recipe-servings">Feeds 2 people</p>
              <div className="recipe-rating">
                {[1, 2, 3, 4].map((star) => (
                  <svg
                    key={star}
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.85 17.825L12 15.925L15.15 17.85L14.325 14.25L17.1 11.85L13.45 11.525L12 8.125L10.55 11.5L6.9 11.825L9.675 14.25L8.85 17.825ZM5.825 22L7.45 14.975L2 10.25L9.2 9.625L12 3L14.8 9.625L22 10.25L16.55 14.975L18.175 22L12 18.275L5.825 22Z"
                      fill="#FF6961"
                    />
                  </svg>
                ))}
              </div>
            </div>
            <img
              src="https://placehold.co/160x147/FFA500/FFA500"
              alt="Mac and Cheese"
              className="recipe-image"
            />
          </div>

          <div className="recipe-card">
            <div className="recipe-info">
              <h2 className="recipe-title-search">Empanadas</h2>
              <p className="recipe-time">25-30 minutes</p>
              <p className="recipe-servings">Feeds 2 people</p>
              <div className="recipe-rating">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg
                    key={star}
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.85 17.825L12 15.925L15.15 17.85L14.325 14.25L17.1 11.85L13.45 11.525L12 8.125L10.55 11.5L6.9 11.825L9.675 14.25L8.85 17.825ZM5.825 22L7.45 14.975L2 10.25L9.2 9.625L12 3L14.8 9.625L22 10.25L16.55 14.975L18.175 22L12 18.275L5.825 22Z"
                      fill="#FF6961"
                    />
                  </svg>
                ))}
              </div>
            </div>
            <img
              src="https://placehold.co/160x147/8B4513/8B4513"
              alt="Empanadas"
              className="recipe-image"
            />
          </div>
        </div>
      </div>

    </div>
  );
};

export default RecipeSearch;
