import React, { useEffect } from "react";
import "./styles/recipe.css";
import { useParams } from "react-router-dom";
import { FullRecipe } from "./types/FullRecipe.tsx";
import BackButton from "./component/BackButton.tsx";

const Recipe: React.FC = () => {
  const [fullRecipe, setFullRecipe] = React.useState<FullRecipe | null>(null);
  const { recipeId } = useParams();

  useEffect(() => {
    const fetchRecipe = async () => {
      const response = await fetch(`https://localhost:5000/api/recipe/?recipeId=${recipeId}`);
      const data = await response.json();
      setFullRecipe(data);
    };

    fetchRecipe();
  }, []);

  return (
    <div className="recipe">
      <BackButton />
      <div className="recipe-content">
        <h1 className="recipe-titlee">{fullRecipe?.recipe?.recipeName || 'Fake'} Recipe</h1>

        <section className="recipe-section">
          <h2 className="section-title">Ingredients</h2>
          <ul className="ingredients-list">
            {fullRecipe?.ingredients.map((ingredient) => (
              <li className="ingredients-list-li" key={ingredient.ingredientID}>{ingredient.quantity} {ingredient.unit} of {ingredient.ingredientName}</li>
            )) || (
              <li className="ingredients-list-li"><i>No ingredients</i></li>
            )}
          </ul>
        </section>

        <section className="recipe-steps">
          {fullRecipe?.steps?.map((step) => (
            <div className="step-container" key={`${step.recipeID}.${step.stepNumber}`}>
              <h3 className="step-title">Step {step.stepNumber}</h3>
              <p className="step-description">{step.stepText}</p>
              {/* <img
                src={step.imageURL}
                alt={`Step ${step.stepNumber}`}
                className="step-image"
              /> */}
            </div>
          )) || (
            <div className="step-container">
              <h3 className="step-title">Fake Step</h3>
              <p className="step-description">
                Fill a large pot with salted water and bring it to a boil. Cook
                the meat in a large pan over medium heat Break it into small
                pieces and brown it for 10-15 minutes.
              </p>
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/f36c655647aaedcb183416c2519fb90bf01c5e4d"
                alt="Cooking meat and boiling water"
                className="step-image"
              />
            </div>
          )}
        </section>

        <div className="action-buttons">
          <button className="action-button-recipe" onClick={() => alert('Logged meal!')}>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 8V16M8 12H16M5 3H19C20.1046 3 21 3.89543 21 5V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V5C3 3.89543 3.89543 3 5 3Z"
                stroke="white"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className="action-button-recipe-span">Log Meal</span>
          </button>
          <button className="action-button-recipe" onClick={() => alert('Added to week!')}>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8 18L12 14.95L16 18L14.5 13.05L18.5 10.2H13.6L12 5L10.4 10.2H5.5L9.5 13.05L8 18ZM12 22C10.6167 22 9.31667 21.7375 8.1 21.2125C6.88333 20.6875 5.825 19.975 4.925 19.075C4.025 18.175 3.3125 17.1167 2.7875 15.9C2.2625 14.6833 2 13.3833 2 12C2 10.6167 2.2625 9.31667 2.7875 8.1C3.3125 6.88333 4.025 5.825 4.925 4.925C5.825 4.025 6.88333 3.3125 8.1 2.7875C9.31667 2.2625 10.6167 2 12 2C13.3833 2 14.6833 2.2625 15.9 2.7875C17.1167 3.3125 18.175 4.025 19.075 4.925C19.975 5.825 20.6875 6.88333 21.2125 8.1C21.7375 9.31667 22 10.6167 22 12C22 13.3833 21.7375 14.6833 21.2125 15.9C20.6875 17.1167 19.975 18.175 19.075 19.075C18.175 19.975 17.1167 20.6875 15.9 21.2125C14.6833 21.7375 13.3833 22 12 22ZM12 20C14.2333 20 16.125 19.225 17.675 17.675C19.225 16.125 20 14.2333 20 12C20 9.76667 19.225 7.875 17.675 6.325C16.125 4.775 14.2333 4 12 4C9.76667 4 7.875 4.775 6.325 6.325C4.775 7.875 4 9.76667 4 12C4 14.2333 4.775 16.125 6.325 17.675C7.875 19.225 9.76667 20 12 20Z"
                fill="white"
              />
            </svg>
            <span className="action-button-recipe-span">Add To Week</span>
          </button>
        </div>

        <section className="video-section">
          <h2 className="section-title">Video Instructions</h2>
          <div className="video-player">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_370_707)">
                <path
                  d="M9.99996 18.3333C14.6023 18.3333 18.3333 14.6023 18.3333 9.99996C18.3333 5.39759 14.6023 1.66663 9.99996 1.66663C5.39759 1.66663 1.66663 5.39759 1.66663 9.99996C1.66663 14.6023 5.39759 18.3333 9.99996 18.3333Z"
                  stroke="#F3F3F3"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M8.33329 6.66663L13.3333 9.99996L8.33329 13.3333V6.66663Z"
                  stroke="#F3F3F3"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </g>
              <defs>
                <clipPath id="clip0_370_707">
                  <rect width="20" height="20" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Recipe;
