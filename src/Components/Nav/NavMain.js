import { Link, useHistory } from "react-router-dom";

import "./NavMain.css";
import Logo from "../../images/Logo.PNG";

const Nav = () => {
  const history = useHistory();

  const redirectHome = () => {
    history.push("/");
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
          <i id="bar" className="fas fa-bars"></i>
        </div>
      </div>
    </div>
  );
};

export default Nav;
