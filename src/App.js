import React, { Component } from "react";
import { HashRouter as Router, Route, Link, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Article from "./Pages/Article";
import Favorite from "./Pages/Favorit";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <nav id="navbar" className="navbar navbar-expand-lg">
            <div className="container-fluid">
              <Link className="navbar-brand" to="/">
                Ari Food
              </Link>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="">
                  <i class="fa-solid fa-bars"></i>
                </span>
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <Link className="nav-item nav-link" to="/">
                      Home
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-item nav-link desaible" to="/Recipes">
                      Favorit
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-item nav-link" to="/Article">
                      Article
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-item nav-link" to="/About">
                      About
                    </Link>
                  </li>
                </ul>
                <div className="form-check form-switch">
                  <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" />
                  <label className="form-check-label">Light/Dark Mode</label>
                </div>
              </div>
            </div>
          </nav>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Article" element={<Article />} />
            <Route path="/Recipes" element={<Favorite />} />
            <Route path="/About" element={<About />} />
          </Routes>
        </div>
      </Router>
    );
  }
}

export default App;
