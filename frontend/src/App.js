import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/index";
import Navbar from "./Components/Navbar/index";
import Signup from "./Pages/Signup/index";
import Login from "./Pages/Login";

function App() {
  return (
    <Router>
    <Navbar />
    <Routes>
      <Route path="/" exact={true} element={<Home />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  </Router>
  );
}

export default App;
