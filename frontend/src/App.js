import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/index";
import Navbar from "./Components/Navbar/index";
import Signup from "./Pages/Signup/index";
import Login from "./Pages/Login";
import LeaderBoard from "./Pages/LeaderBoard";
import Terms from "./Pages/Terms";

function App() {
  return (
    <Router>
    <Navbar />
    <Routes>
      <Route path="/" exact={true} element={<Home />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/leaderboard" element={<LeaderBoard />} />
      <Route path="/terms" element={<Terms />} />
    </Routes>
  </Router>
  );
}

export default App;
