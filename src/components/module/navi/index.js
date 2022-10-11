import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import styles from "./navi.module.css";

const Navi = () => {
  const [background, setBackground] = useState(false);
  const [font, setFont] = useState(false);
  
  const changeNavi = () => {
    if (window.scrollY >= 75) {
      setBackground(true);
      setFont(true);
    } else {
      setBackground(false);
      setFont(false);
    }
  };

  useEffect(() => {
    changeNavi();
    window.addEventListener("scroll", changeNavi);
  }, []);

  return (
    <nav
      className={
        background
          ? `mb-5 sticky-top navbar navbar-expand-md navbar-light ${styles.navi} ${styles.background}`
          : `mb-5 sticky-top navbar navbar-expand-md navbar-light ${styles.navi}`
      }
      //   className={`mb-5 sticky-top navbar navbar-expand-md navbar-light ${styles.navi}`}
    >
      <p className={`navbar-brand ${styles.appliname}`}>Mamarecipe</p>


      <button
        className={`navbar-toggler ${styles.toggler}`}
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
        <ul className="w-100 container navbar-nav text-center d-flex justify-content-between">
          <div className="d-flex flex-column flex-md-row">
            <li>
              <NavLink
                to="/"
                className={(isActive) =>
                  `nav-link ${styles.navlink}` + (!isActive ? "unselected" : "")
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/insert"
                className={(isActive) =>
                  `nav-link ${styles.navlink}` + (!isActive ? "unselected" : "")
                }
              >
                Add Recipe
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/profile"
                className={(isActive) =>
                  `nav-link ${styles.navlink}` + (!isActive ? "unselected" : "")
                }
              >
                Profile
              </NavLink>
            </li>
          </div>

          <li>
            <NavLink
              to="/login"
              className={font? (isActive) =>
                `nav-link ${styles["login-link"]} ${styles.font}` +
                (!isActive ? "unselected" : "") : (isActive) =>
                `nav-link ${styles["login-link"]}` +
                (!isActive ? "unselected" : "")
              }
            >
              Login
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navi;
