import './Footer.css';
import {GrInstagram, GrTwitter, GrFacebook} from 'react-icons/gr'

const Footer = () => {
    return ( 
        <div className="footer">
        <p>
           Copyright © 2021 by KeyTab. All rights reserved.
        </p>
        <ul className="social">
            
            <a 
            href='https://www.facebook.com/justedujo' 
            className="facebook">
                <GrFacebook /></a>
            <a 
            href='https://www.instagram.com/just_1986/?hl=en' 
            className="instagram">
                <GrInstagram />
            </a>
            <a 
            href='https://www.twitter.com/justedujo' 
            className="twitter">
                <GrTwitter />
            </a>
        </ul>
    </div>
     );
}
 
export default Footer;