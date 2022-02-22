import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home.jsx";
import Navbar from "./Components/Navbar/index";
import Signup from "./Pages/Signup/index";

function App() {
  return (
    <Router>
    <Navbar />
    <Routes>
      <Route path="/" exact={true} element={<Home />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
  </Router>
  );
}

export default App;
