import './Footer.css';

const Footer = () => {
    return ( 
        <div className="footer">
        <p>
           Copyright © 2021 by KeyTab. All rights reserved.
        </p>
        <ul className="social">
           <li> <i className="fab fa-facebook-square"></i></li>
            <li><i className="fab fa-instagram-square"></i></li>
            <li><i className="fab fa-twitter-square"></i></li>
        </ul>
    </div>
     );
}
 
export default Footer;