import React from "react";
import { Link } from "react-router-dom";
import Home from "./Home";
import Apply from "./Apply"
import Change from "./Change";


const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light mb-4 py-2 px-5">
      <div class="container-fluid ">
        <span class="navbar-brand mb-0 h1 ">XYZ Yoga Class</span>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse " id="navbarNavAltMarkup">
          <div class="ms-auto">
            <div class="navbar-nav ">
              <Link class="nav-link " to="/Home">
                Home
              </Link>
              <Link class="nav-link " to="/Apply">
                Join Us
              </Link>
               <Link class="nav-link " to="/Change">
                Change Slot
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;