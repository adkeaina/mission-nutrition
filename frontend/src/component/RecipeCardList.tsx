import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Recipes } from "../types/Recipes";

function RecipeCardList({
  selectedTime, // Receive selectedTime from parent
}: {
  selectedTime: string | null; // Define the type of selectedTime
}) {
  const [recipes, setRecipes] = useState<Recipes[]>([]);
  const [pageSize, setPageSize] = useState<number>(5);
  const [pageNum, setPageNum] = useState<number>(1);
  const [totalRecipes, setTotalRecipes] = useState<number>(0);
  const [totalPages, setTotalPages] = useState<number>(0);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchRecipes = async () => {
      // Construct query parameters based on selectedTime
      const timeParams = selectedTime
        ? `recipeTime=${encodeURIComponent(selectedTime)}`
        : "";

      const response = await fetch(
        `https://localhost:5000/Recipes/AllRecipes?NumResults=${pageSize}&PageNum=${pageNum}${
          selectedTime ? `&${timeParams}` : ""
        }`
      );
      const data = await response.json();
      setRecipes(data.books); // Assuming books is the key in the API response
      setTotalRecipes(data.totalResults);
      setTotalPages(Math.ceil(data.totalResults / pageSize));
    };

    fetchRecipes();
  }, [pageSize, pageNum, selectedTime]); // Trigger the fetch when selectedTime changes

  return (
    <>
      {recipes.map((r) => (
        <div id="recipeCard" className="card" key={r.recipeID}>
          <h3 className="card-body">{r.recipeName}</h3>
          <div className="card-body">
            <ul className="list-unstyled">
              <li>{r.timetoPrepare} minutes</li>
              <li>Feeds {r.servings} people</li>
            </ul>
            {/* Star Rating Display */}
            <div className="recipe-rating">
              {[1, 2, 3, 4, 5].map((star) => (
                <svg
                  key={star}
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill={star <= r.starRating ? "#FF6961" : "none"} // Fills stars based on rating
                  stroke={star <= r.starRating ? "#FF6961" : "#888"} // Adds outline for unfilled stars
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.85 17.825L12 15.925L15.15 17.85L14.325 14.25L17.1 11.85L13.45 11.525L12 8.125L10.55 11.5L6.9 11.825L9.675 14.25L8.85 17.825ZM5.825 22L7.45 14.975L2 10.25L9.2 9.625L12 3L14.8 9.625L22 10.25L16.55 14.975L18.175 22L12 18.275L5.825 22Z"
                    fill={star <= r.starRating ? "#FF6961" : "none"} // Fill stars up to rating
                    stroke={star <= r.starRating ? "#FF6961" : "#888"} // Outline for unfilled stars
                  />
                </svg>
              ))}
            </div>

            <button
              className="btn btn-success"
              onClick={() => navigate(`/Recipe/${r.recipeID}`)} // navigate to the recipe page
            >
              View Recipe
            </button>
          </div>
          <img src="" alt={r.recipeName} className="recipe-image" />
        </div>
      ))}

      <br />

      {/* Pagination */}
      <button
        disabled={pageNum === 1}
        onClick={() => setPageNum(pageNum - 1)}
        style={{
          backgroundColor:
            pageNum === totalPages ? "white" : "rgba(255, 205, 210, 1)", // Disabled color
          color: pageNum === totalPages ? "lightgray" : "darkgray", // Disabled text color
          border: "none",
          borderRadius: "10px",
          padding: "8px 16px",
          fontSize: "14px",
          cursor: pageNum === 1 ? "not-allowed" : "pointer",
          transition: "background-color 0.3s",
          margin: "0 5px",
        }}
      >
        Previous
      </button>
      {[...Array(totalPages)].map((_, index) => (
        <button
          key={index + 1}
          onClick={() => setPageNum(index + 1)}
          disabled={pageNum === index + 1}
          style={{
            backgroundColor:
              pageNum === index + 1
                ? "rgba(255, 69, 58, 1)"
                : "rgba(255, 205, 210, 1)", // Active color red, others light pink
            color: pageNum === index + 1 ? "white" : "lightgray", // Active text white, others light gray
            border: "none",
            borderRadius: "20px",
            padding: "8px 16px",
            fontSize: "14px",
            cursor: pageNum === index + 1 ? "not-allowed" : "pointer",
            transition: "background-color 0.3s",
            margin: "0 5px",
          }}
        >
          {index + 1}
        </button>
      ))}
      <button
        disabled={pageNum === totalPages}
        onClick={() => setPageNum(pageNum + 1)}
        style={{
          backgroundColor:
            pageNum === totalPages ? "white" : "rgba(255, 205, 210, 1)", // Disabled color
          color: pageNum === totalPages ? "lightgray" : "darkgray", // Disabled text color
          border: "none",
          borderRadius: "10px",
          padding: "8px 16px",
          fontSize: "14px",
          cursor: pageNum === totalPages ? "not-allowed" : "pointer",
          transition: "background-color 0.3s",
          margin: "0 5px",
        }}
      >
        Next
      </button>

      <br />

      <label style={{ fontSize: "14px", marginRight: "10px" }}>
        Results per page:
        <select
          value={pageSize}
          onChange={(p) => {
            setPageSize(Number(p.target.value));
            setPageNum(1); // Reset to page 1 when pageSize changes
          }}
          style={{
            backgroundColor: "white",
            color: "black",
            border: "none",
            padding: "5px 10px",
            fontSize: "14px",
            cursor: "pointer",
          }}
        >
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="20">20</option>
        </select>
      </label>
    </>
  );
}

export default RecipeCardList;
