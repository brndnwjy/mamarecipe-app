import React from "react";
import { Link } from "react-router-dom";
import styles from "./navi.module.css";

const Navi = () => {
  return (
    <nav className={`mb-5 sticky-top navbar navbar-expand-md navbar-light ${styles.navi}`}>
        <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#toggleMenu"
        aria-controls="toggleMenu"
        aria-expanded="false"
        aria-label="Toogle navigation"
        >
            <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="toggleMenu">
            <ul className="navbar-nav text-center">
                <div className="d-flex flex-column flex-md-row">
                <li>
                    <Link to="#" className="nav-link">Home</Link>
                </li>
                <li>
                    <Link to="#" className="nav-link">Add Recipe</Link>
                </li>
                <li>
                    <Link to="#" className="nav-link">Profile</Link>
                </li>
                </div>
                <li>
                    <Link to="#" className="nav-link">Login</Link>
                </li>
            </ul>
        </div>

    </nav>
  );
};

export default Navi;
