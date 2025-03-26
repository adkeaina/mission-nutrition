import "./App.css";
import NavBar from "./component/NavBar";
import Homepage from "./home";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Loading from "./loading";
import Recipe from "./recipe";
import RecipeSearch from "./recipeSearch";
import SignUp from "./signup";
import Stats from "./stats";
import Today from "./today";
import { useEffect, useState } from "react";
import Login from "./login";
import { RecipeListProvider } from "./context/RecipeListContext";
import CalendarMonth from "./calendarMonth";

function App() {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(true); //TODO: Change to false (true is for testing)

  const handleLogin = (isAuthenticated: boolean) => {
    setIsLoggedIn(isAuthenticated); // This will update the login state
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://api.example.com/data");
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <RecipeListProvider>
        {!isLoggedIn ? (
          <Router>
            <Routes>
              <Route path="/login" element={<Login onLogin={handleLogin} />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="*" element={<Navigate to="/login" />} />
            </Routes>
          </Router>
        ) : isLoading ? (
          <Loading />
        ) : (
          <Router>
            <Routes>
              <Route path="/" element={<Navigate to="/home" />} />
              <Route path="/login" element={<Navigate to="/home" />} />
              <Route path="/home" element={<Homepage data={data} />} />
              <Route path="/recipe/:recipeId" element={<Recipe />} />
              <Route path="/search" element={<RecipeSearch />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/stats" element={<Stats />} />
              <Route path="/today" element={<Today />} />
              <Route path="/calendarMonth" element={<CalendarMonth />} />
            </Routes>
            <NavBar />
          </Router>
        )}
      </RecipeListProvider>
    </>
  );
}

export default App;
