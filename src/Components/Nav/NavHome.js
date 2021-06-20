import "./NavHome.css";
import React, { useState } from "react";
import Logo from "../../images/Logo.PNG";
import { useHistory } from "react-router";
import { Link, NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { USER_RESET } from "../../constants/userConstants";

const Nav = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const redirectHome = () => {
    history.push("/home");
  };

  function logOut() {
    localStorage.clear();
    dispatch({ type: USER_RESET });
  }

  const [viewMenu, setViewMenu] = useState(false);
  return (
    <div className="nav">
      {viewMenu && (
        <div className="burger-menu">
          <div className="menu-container">
            <div className="presonal-info-box">
              <ul className="personal-data-settings">
                <li>
                  <Link to="/home" style={{ color: "black" }}>
                    <i
                      className="fas fa-home"
                      style={{ color: "var(--main-color)" }}
                    ></i>{" "}
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/mycourses" style={{ color: "black" }}>
                    <i
                      className="fas fa-chalkboard-teacher"
                      style={{ color: "var(--main-color)" }}
                    ></i>{" "}
                    My courses{" "}
                  </Link>
                </li>
                <li>
                  <Link to="/search" style={{ color: "black" }}>
                    <i
                      className="fas fa-search"
                      style={{ color: "var(--main-color)" }}
                    ></i>{" "}
                    Search courses
                  </Link>
                </li>
                <li onClick={logOut}>
                  <Link to="/" style={{ color: "black" }}>
                    <i
                      className="fas fa-sign-out-alt"
                      style={{ color: "var(--main-color)" }}
                    ></i>{" "}
                    Log out
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}

      <div className="logo" onClick={redirectHome}>
        <img draggable="false" src={Logo} alt="Logo" />
      </div>
      <div className="search" onClick={() => history.push("/search")}>
        <i className="fas fa-search"></i>
        <input
          type="search"
          name="search-bar"
          id="search-bar"
          placeholder="Search courses"
        />
      </div>

      <div className="buttons">
        <ul id="items">
          <li>
            <NavLink
              className="nav-item"
              activeStyle={{ color: "#f86014" }}
              to="/home"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              className="nav-item"
              activeStyle={{ color: "#f86014" }}
              to="/mycourses"
            >
              My Courses
            </NavLink>
          </li>
        </ul>
        <div className="bar">
          <i
            id="bar"
            className="fas fa-bars"
            onClick={() => {
              setViewMenu(!viewMenu);
            }}
          ></i>
        </div>
      </div>
    </div>
  );
};

export default Nav;
