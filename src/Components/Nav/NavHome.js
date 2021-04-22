import "./NavHome.css";
import Logo from "../../images/Logo.PNG";

const Nav = () => {
  return (
    <div className="nav">
      <div className="logo">
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
            <a className="nav-item" href="/">
              Home
            </a>
          </li>
          <li>
            <a className="nav-item active" href="/">
              My Courses
            </a>
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