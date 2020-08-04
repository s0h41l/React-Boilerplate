import React from 'react';
import logo from './logo.svg';
import Routes from './router/router';
import {Link, BrowserRouter as Router} from 'react-router-dom';
import './App.css';


function App() {
  return (
    <div>
      <Router>
      <nav className="navbar navbar-expand-lg navbar-light bg-purple">
        <Link className="navbar-brand text-white" to="/">Home</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link className="nav-link text-white" to="/">Home</Link>
            </li>
            <li className="nav-item">
            <Link className="nav-link text-white" to="/register">Register</Link>
            </li>
            <li className="nav-item">
            <Link className="nav-link text-white" to="/login">Login</Link>
            </li>
          </ul>
        </div>
      </nav>
      <Routes/>
      </Router>
    </div>
  );
}

export default App;
