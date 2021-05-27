import "./NavHome.css";
import Logo from "../../images/Logo.PNG";
import { useHistory } from "react-router";
import { NavLink } from "react-router-dom";

const Nav = () => {
  const history = useHistory();

  const redirectHome = () => {
    history.push("/home");
  };
  return (
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
          <i id="bar" className="fas fa-bars"></i>
        </div>
      </div>
    </div>
  );
};

export default Nav;
