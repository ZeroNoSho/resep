import React, { Component } from "react";
import { HashRouter as Router, Route, Link, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Article from "./Pages/Article";
import Favorite from "./Pages/Favorit";
import Foot from "./Components/Foot";

class App extends Component {
  render() {
    let now = new Date();
    let dname = now.getDay(),
      mo = now.getMonth(),
      dnum = now.getDate(),
      yr = now.getFullYear();

    let months = ["January", "February", "March", "April", "May", "June", "July", "Augest", "September", "October", "November", "December"];
    let week = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"];
    let values = [week[dname], months[mo], dnum, yr];

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
                <div className="tgl">
                  <p className="navbar-item">
                    {values[0]} / {values[2]} / {values[1]} / {values[3]}
                  </p>
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
        <Foot></Foot>
      </Router>
    );
  }
}

export default App;
