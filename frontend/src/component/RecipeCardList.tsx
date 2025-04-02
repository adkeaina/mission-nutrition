import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Recipes } from '../types/Recipes';

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
      try {
        // Build the URL dynamically
        let url = `https://localhost:5000/api/Database/get-time?pageSize=${pageSize}&pageNum=${pageNum}`;

        // Append selectedTime only if it's not null or empty
        if (selectedTime) {
          url += `&selectedTime=${encodeURIComponent(selectedTime)}`;
        }

        const response = await fetch(url);

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        setRecipes(data.recipes || []);
        setTotalRecipes(data.totalNumRecipes || 0);
        setTotalPages(Math.ceil((data.totalNumRecipes || 0) / pageSize));
      } catch (error) {
        console.error('Error fetching recipes:', error);
      }
    };
    fetchRecipes();
  }, [pageSize, pageNum, selectedTime]); // Trigger the fetch when selectedTime changes

  useEffect(() => {
    // Reset pageNum to 1 whenever selectedTime changes
    setPageNum(1);
  }, [selectedTime]);

  return (
    <>
      <br />
      {recipes.length === 0 ? (
        <div
          style={{
            textAlign: 'center',
            padding: '225px 5px',
            fontSize: '18px',
            color: 'black',
            background: 'white',
            borderRadius: '10px',
          }}
        >
          No recipes found under the specified timeframe.
        </div>
      ) : (
        recipes.map((r) => (
          <div
            id="recipeCard"
            className="card"
            key={r.recipeId}
            style={{
              borderRadius: '15px', // Rounds the corners
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', // Adds a subtle shadow
              overflow: 'hidden', // Ensures content stays inside rounded corners
              backgroundColor: 'white', // Sets the background color
              border: '1px solid #ddd', // Adds a light border
              transition: 'transform 0.3s ease, box-shadow 0.3s ease', // Smooth transition
              marginBottom: '10px',
            }}
          >
            <h3 className="card-body">{r.recipeName}</h3>
            <div className="card-body">
              <ul className="list-unstyled">
                <li>
                  <span
                    className="badge text-white"
                    style={{
                      maxWidth: '150px',
                      overflow: 'hidden',
                      backgroundColor:
                        r.mealOfTheDay === 'Breakfast'
                          ? 'rgb(223, 49, 40)'
                          : r.mealOfTheDay === 'Lunch'
                            ? 'rgb(244, 122, 116)'
                            : r.mealOfTheDay === 'Dinner'
                              ? 'rgba(255, 69, 58, 1)'
                              : 'rgb(219, 77, 70)',
                    }}
                  >
                    {r.mealOfTheDay}
                  </span>
                </li>
                <li>{r.timeToPrepare} minutes</li>
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
                    fill={star <= r.starRating ? '#FF6961' : 'none'} // Fills stars based on rating
                    stroke={star <= r.starRating ? '#FF6961' : '#888'} // Adds outline for unfilled stars
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.85 17.825L12 15.925L15.15 17.85L14.325 14.25L17.1 11.85L13.45 11.525L12 8.125L10.55 11.5L6.9 11.825L9.675 14.25L8.85 17.825ZM5.825 22L7.45 14.975L2 10.25L9.2 9.625L12 3L14.8 9.625L22 10.25L16.55 14.975L18.175 22L12 18.275L5.825 22Z"
                      fill={star <= r.starRating ? '#FF6961' : 'none'} // Fill stars up to rating
                      stroke={star <= r.starRating ? '#FF6961' : '#888'} // Outline for unfilled stars
                    />
                  </svg>
                ))}
              </div>
              <br />
              <button
                className="btn btn-success"
                onClick={() => navigate(`/recipe/${r.recipeId}`)} // navigate to the recipe page
              >
                View Recipe
              </button>
            </div>
          </div>
        ))
      )}

      <br />
      <div style={{ marginBottom: '100px' }}>
        {/* Pagination */}
        <button
          disabled={pageNum === 1}
          onClick={() => setPageNum(pageNum - 1)}
          style={{
            backgroundColor: pageNum === 1 ? 'rgba(255, 205, 210, 1)' : 'white', // Disabled color
            color: pageNum === 1 ? 'lightgray' : 'black', // Disabled text color
            border: 'none',
            borderRadius: '10px',
            padding: '8px 16px',
            fontSize: '14px',
            cursor: pageNum === 1 ? 'not-allowed' : 'pointer',
            transition: 'background-color 0.3s',
            margin: '0 5px',
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
                pageNum === index + 1 ? 'rgba(255, 69, 58, 1)' : 'white', // Active color red, others light pink
              color: pageNum === index + 1 ? 'white' : 'black', // Active text white, others light gray
              border: 'none',
              borderRadius: '20px',
              padding: '8px 16px',
              fontSize: '14px',
              cursor: pageNum === index + 1 ? 'not-allowed' : 'pointer',
              transition: 'background-color 0.3s',
              margin: '5px 5px',
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
              pageNum === totalPages ? 'rgba(255, 205, 210, 1)' : 'white', // Disabled color
            color: pageNum === totalPages ? 'lightgray' : 'black', // Disabled text color
            border: 'none',
            borderRadius: '10px',
            padding: '8px 16px',
            fontSize: '14px',
            cursor: pageNum === totalPages ? 'not-allowed' : 'pointer',
            transition: 'background-color 0.3s',
            margin: '0 10px',
          }}
        >
          Next
        </button>

        <br />

        <label
          style={{
            fontSize: '14px',
            marginRight: '10px',
            borderRadius: '10px',
          }}
        >
          Results per page:
          <select
            value={pageSize}
            onChange={(p) => {
              setPageSize(Number(p.target.value));
              setPageNum(1); // Reset to page 1 when pageSize changes
            }}
            style={{
              backgroundColor: 'white',
              color: 'black',
              border: 'none',
              padding: '5px 10px',
              fontSize: '14px',
              cursor: 'pointer',
              borderRadius: '10px',
            }}
          >
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="20">20</option>
          </select>
        </label>
        <br />
      </div>
    </>
  );
}

export default RecipeCardList;
