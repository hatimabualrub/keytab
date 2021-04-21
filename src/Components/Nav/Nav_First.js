import './Nav_First.css';
import Logo from '../../images/Logo.PNG';


const Nav = () => {
    return (
    <div className="nav">
        <div className="logo">
            <img draggable="false" src={Logo} alt="Logo image" />
        </div>

        <div className="search">
        <i className="fas fa-search"></i>
            <input type="search" name="search-bar" id="search-bar" placeholder="Search courses" />
        </div>

        <div className="buttons">
            <ul id="items">
            <li><a className="small-login-btn" href="#">Login</a></li>
            <li><a className="small-signup-btn" href="#">Singup</a></li>
            </ul>
            <div className="bar">
            <i id="bar" className="fas fa-bars"></i>
            </div>
        </div>
    </div>
    )
}
 
export default Nav;