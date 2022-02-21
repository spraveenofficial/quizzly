import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <Router>
    <Navbar />
    <Routes>
      <Route path="/" exact={true} element={<Home />} />
    </Routes>
  </Router>
  );
}

export default App;
