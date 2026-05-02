import React from "react";
import { Link } from "react-router-dom";
import "./Layout.css";

const Layout = ({ children }) => {
  return (
    <div>
      <nav className="navbar">
        <h2>🎓 Student Hub</h2>

        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/login">Login</Link>
          <Link to="/dashboard">Dashboard</Link>
          <Link to="/posts">Posts</Link>
        </div>
      </nav>

      <div className="page-container">{children}</div>
    </div>
  );
};

export default Layout;