import './styles/App.css';
import NavBar from './component/NavBar';
import Homepage from './home';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import Loading from './loading';
import Recipe from './recipe';
import SignUp from './signup';
import Stats from './stats';
import Today from './today';
import { useEffect, useState } from 'react';
import Login from './login';
import { RecipeListProvider } from './context/RecipeListContext';
import CalendarMonth from './calendarMonth';
import SearchPage from './searchPage';
import Account from './account';
import RecordMacros from './recordMacros';
import ConfirmationPage from './ConfirmationPage';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false); //TODO: Change to false (true is for testing)
  const [announcementSeen, setAnnouncementSeen] = useState(false);


  // Shared macros state for updating stats from RecordMacros.
  const [macros, setMacros] = useState({
    protein: { current: 25, goal: 60 },
    fat: { current: 10, goal: 60 },
    carbs: { current: 35, goal: 60 },
  });

  // Function to update the current macro values.
  const updateMacros = (newMacros: {
    protein: number;
    fat: number;
    carbs: number;
  }) => {
    setMacros((prevMacros) => ({
      protein: {
        ...prevMacros.protein,
        current: prevMacros.protein.current + newMacros.protein,
      },
      fat: {
        ...prevMacros.fat,
        current: prevMacros.fat.current + newMacros.fat,
      },
      carbs: {
        ...prevMacros.carbs,
        current: prevMacros.carbs.current + newMacros.carbs,
      },
    }));
  };

  const handleLogin = (isAuthenticated: boolean) => {
    setIsLoggedIn(isAuthenticated); // This will update the login state
  };

  useEffect(() => {
    const fetchData = async () => {
      await new Promise((resolve) => setTimeout(resolve, 1000)); // Waits for 500ms
      setIsLoading(false);
    };
    fetchData();
  }, []);

  return (
    <>
      <RecipeListProvider>
        {!isLoggedIn ? (isLoading ? (<Loading />) : (
          <Router>
            <Routes>
              <Route path="/login" element={<Login onLogin={handleLogin} />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="*" element={<Navigate to="/login" />} />
            </Routes>
          </Router>
        )
        ) : isLoading ? (<Loading />) : (
          <Router>
            <Routes>
              <Route path="/" element={<Navigate to="/home" />} />
              <Route path="/login" element={<Navigate to="/home" />} />
              <Route path="/home" element={<Homepage announcementSeen={announcementSeen} setAnnouncementSeen={setAnnouncementSeen} />} />
              <Route path="/recipe/:recipeId" element={<Recipe />} />
              <Route path="/search" element={<SearchPage />} />
              <Route path="/signup" element={<SignUp />} />
              {/* Pass the shared macros state to Stats */}
              <Route path="/stats" element={<Stats macros={macros} />} />
              {/* Pass the update function to RecordMacros */}
              <Route
                path="/record-macros"
                element={<RecordMacros updateMacros={updateMacros} />}
              />
              <Route path="/confirmation" element={<ConfirmationPage />} />
              <Route path="/today" element={<Today />} />
              <Route path="/calendarMonth" element={<CalendarMonth />} />
              <Route path="/account" element={<Account logOut={() => setIsLoggedIn(false)}/>} />
            </Routes>
            <NavBar />
          </Router>
        )}
      </RecipeListProvider>
    </>
  );
}

export default App;
