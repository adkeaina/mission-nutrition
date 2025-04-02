import React, { useEffect, useState } from "react";
import "./styles/today.css";
import { Link } from "react-router-dom";
import { PlannedMeal } from "./types/PlannedMeal";

const Today: React.FC = () => {
  var newDate = new Date();
  var year = newDate.getFullYear();
  var month = (newDate.getMonth() + 1);
  var day = newDate.getDate();
  var today = `${year}-${month}-${day}`;
  console.log(`Today's date: ${today}`);

  const username = 'johndoe';
  const [meals, setMeals] = useState<PlannedMeal[]>([]);
  const [breakfast, setBreakfast] = useState<PlannedMeal>();
  const [breakfastLink, setBreakfastLink] = useState<string>('/search')
  const [lunch, setLunch] = useState<PlannedMeal>();
  const [lunchLink, setLunchLink] = useState<string>('/search')
  const [dinner, setDinner] = useState<PlannedMeal>();
  const [dinnerLink, setDinnerLink] = useState<string>('/search')


  
  useEffect(() => {
    const fetchMeals = async () => {
      console.log('fetching data...')
      const response = await fetch(
        `https://localhost:5000/api/Database/planned-meals` // ?username=${username}&date=${today}
      );
    
    const data = await response.json();
    setMeals(data);
    console.log(data);


    };
    fetchMeals();
  }, [])

useEffect(() => {
  console.log("Processing meals... ", meals)

  meals.forEach(meal => {
    console.log("Data: " + meal.mealDate);
    console.log("Today: " + today);
    if (meal.mealId == 1 && meal.mealDate === today){
      setBreakfast(meal);
      setBreakfastLink(`/recipes/${meal.recipeId}`);  
      console.log('breakfast link updated to ' + breakfastLink);
      }
    else if (meal.mealId == 2 && meal.mealDate === today) {
      setLunch(meal);
      setLunchLink(`/recipes/${meal.recipeId}`);  
      }
    else if (meal.mealId == 3 && meal.mealDate === today) {
      setDinner(meal)
      setDinnerLink(`/recipes/${meal.recipeId}`);  
      }
    });
  }, meals)
  

  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap"
        rel="stylesheet"
      />
      <div className="today-container">
        
        <div className="main-content">
          <h1 className="title">Today View</h1>
          <div className="food-grid">
            <div className="food-item">
              
              <Link to={breakfastLink}>

                <img
                  src="https://www.southernliving.com/thmb/Nr_TIEuEu9sHm2sRvcaYTDaNYbs=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Breakfast_Sandwich_001-b07f371cd3044df4ab7bf664052c2267.jpg"
                  alt="Stack of pancakes with syrup"
                  className="food-image"
                />
              </Link>
            </div>
            <div className="food-item">
              <Link to={lunchLink}>
                <img
                  src="https://www.thirtyhandmadedays.com/wp-content/uploads/2018/12/chickenwraphorizontal-1.jpg"
                  alt="Wrap with lettuce and meat"
                  className="food-image"
                />
              </Link>
            </div>
            <div className="food-item">
              <Link to={dinnerLink}>
                <img
                  src="https://www.allrecipes.com/thmb/IrY572TXic4UXXVn8EetsarI3S0=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/AR-269500-creamy-garlic-pasta-Beauties-4x3-f404628aad2a435a9985b2cf764209b5.jpg"
                  alt="Pasta with tomato sauce"
                  className="food-image"
                />
              </Link>
            </div>
          </div>
          <div className="controls">
            <div className="btn-group">
              <Link to="/CalendarMonth" className="nav-link">
                <button className="btn bttn btn-secondary">Month</button>
              </Link>
              <button className="btn bttn btn-secondary active">Week</button>
              <button className="btn bttn btn-secondary">Today</button>
            </div>
            <div className="shopping-list">
              <div className="shopping-list-text">
                <span>Shopping</span>
                <br />
                <span>List</span>
              </div>
              <div className="cart-icon">
                <svg
                  width="22"
                  height="24"
                  viewBox="0 0 22 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.916626 1H4.58329L7.03996 14.39C7.12378 14.8504 7.35338 15.264 7.68854 15.5583C8.02371 15.8526 8.4431 16.009 8.87329 16H17.7833C18.2135 16.009 18.6329 15.8526 18.968 15.5583C19.3032 15.264 19.5328 14.8504 19.6166 14.39L21.0833 6H5.49996M9.16663 21C9.16663 21.5523 8.75622 22 8.24996 22C7.7437 22 7.33329 21.5523 7.33329 21C7.33329 20.4477 7.7437 20 8.24996 20C8.75622 20 9.16663 20.4477 9.16663 21ZM19.25 21C19.25 21.5523 18.8396 22 18.3333 22C17.827 22 17.4166 21.5523 17.4166 21C17.4166 20.4477 17.827 20 18.3333 20C18.8396 20 19.25 20.4477 19.25 21Z"
                    stroke="#FF6961"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div className="snack-section">
            <div className="snack-container">
              <div className="snack-header">
                <span>Snack Ideas</span>
                <svg
                  width="27"
                  height="31"
                  viewBox="0 0 27 31"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{ position: "absolute", right: "20px" }}
                >
                  <path
                    d="M5.625 15.5H21.375"
                    stroke="white"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div className="snack-grid">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/4996c03f0d80f0dd7d942a63ba8b066bd9ef28ac"
                  alt="Pickles"
                  className="snack-image"
                />
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/e118346712bcc070cf7e04e6f44195e69cde4bb0"
                  alt="Cashews"
                  className="snack-image"
                />
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/6f3ce49bcca6dd285368cfbbbdb3b6e823d3bf3c"
                  alt="Almonds"
                  className="snack-image"
                />
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/1be1fca5905bafa920f7ac019be2bf6a1552a19a"
                  alt="Celery"
                  className="snack-image"
                />
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </>
  );
};

export default Today;
