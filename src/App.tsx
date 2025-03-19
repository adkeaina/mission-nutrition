import './App.css'
import NavBar from './component/NavBar'
import Homepage from './home'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Loading from './loading';
// import Recipe from './recipe';
import RecipeSearch from './recipeSearch';
import SignUp from './signup';
import Stats from './stats';
import Today from './today';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Loading />} />
        <Route path="/home" element={<Homepage />} />
        {/* <Route path="/recipe" element={<Recipe />} /> */}
        <Route path="/search" element={<RecipeSearch />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/stats" element={<Stats />} />
        <Route path="/today" element={<Today />} />
      </Routes>
      <NavBar />
    </Router>
  );
}

export default App;