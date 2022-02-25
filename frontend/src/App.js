import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/index";
import Navbar from "./Components/Navbar/index";
import Signup from "./Pages/Signup/index";
import Login from "./Pages/Login";
import LeaderBoard from "./Pages/LeaderBoard";
import Terms from "./Pages/Terms";
import { GuestRoutes, ProtectedRoutes } from "./helpers/Routes";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { loadUser } from "./Redux/Actions/auth";
function App() {
  const dispatch = useDispatch();
  const token = localStorage.getItem("token");
  useEffect(() => {
    if (token) {
      dispatch(loadUser());
    }
  }, []);
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route element={<ProtectedRoutes />}>
          <Route path="/" exact={true} element={<Home />} />
          <Route path="/leaderboard" element={<LeaderBoard />} />
          <Route path="/terms" element={<Terms />} />
        </Route>
        <Route element={<GuestRoutes />}>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
