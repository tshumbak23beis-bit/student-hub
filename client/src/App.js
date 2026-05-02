import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { FaHome, FaUser, FaTachometerAlt, FaQuestionCircle, FaStickyNote } from "react-icons/fa";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Questions from "./pages/Questions";
import Posts from "./pages/Posts";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="app-container">

        <nav className="navbar">
          <h2 className="logo">🎓 Student Hub</h2>

          <div className="nav-links">
            <Link to="/"><FaHome /> Home</Link>
            <Link to="/login"><FaUser /> Login</Link>
            <Link to="/dashboard"><FaTachometerAlt /> Dashboard</Link>
            <Link to="/questions"><FaQuestionCircle /> Questions</Link>
            <Link to="/posts"><FaStickyNote /> Posts</Link>
          </div>
        </nav>

        <div className="page-container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/questions" element={<Questions />} />
            <Route path="/posts" element={<Posts />} />
          </Routes>
        </div>

      </div>
    </Router>
  );
}

export default App;