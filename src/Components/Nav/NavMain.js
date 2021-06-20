import { Link, useHistory } from "react-router-dom";
import React, { useState } from "react";
import "./NavMain.css";
import Logo from "../../images/Logo.PNG";

const Nav = () => {
  const history = useHistory();

  const redirectHome = () => {
    history.push("/");
  };

  const redirectLogin = () => {
    history.push("/login");
  };

  const [viewMenu, setViewMenu] = useState(false);

  return (
    <>
      {viewMenu && (
        <div className="burger-menu">
          <div className="menu-container">
            <div className="presonal-info-box">
              <ul className="personal-data-settings">
                <li>
                  <Link to="/signup" style={{ color: "black" }}>
                    <i
                      className="fas fa-user-plus"
                      style={{ color: "var(--main-color)" }}
                    ></i>{" "}
                    Sign up{" "}
                  </Link>
                </li>
                <li>
                  <Link to="/login" style={{ color: "black" }}>
                    <i
                      className="fas fa-sign-in-alt"
                      style={{ color: "var(--main-color)" }}
                    ></i>{" "}
                    Log in{" "}
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}

      <div className="nav">
        <div className="logo" onClick={redirectHome}>
          <img draggable="false" src={Logo} alt="Logo" />
        </div>

        <div className="search">
          <i className="fas fa-search"></i>
          <input
            type="search"
            name="search-bar"
            id="search-bar"
            placeholder="Search courses"
            onClick={redirectLogin}
          />
        </div>

        <div className="buttons">
          <ul id="items">
            <li>
              <Link to="/login" className="small-login-btn">
                Login
              </Link>
            </li>
            <li>
              <Link to="/signup" className="small-signup-btn">
                Signup
              </Link>
            </li>
          </ul>
          <div className="bar mobile">
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
    </>
  );
};

export default Nav;
