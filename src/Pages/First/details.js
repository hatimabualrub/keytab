import './First.css';

const details = () => {
    return ( 
        <div className="details">
                <div className="feature">
                    <i className="fab fa-youtube"></i>
                    <p>Various online courses <br/><span>Enjoy a variety of fresh topics</span></p>
                </div>
                <div className="feature">
                    <i className="fas fa-medal"></i>
                    <p>Expert instruction <br/><span>Find the right instructor for you</span></p>
                </div>
                <div className="feature">
                    <i className="fas fa-infinity"></i>
                    <p>Lifetime access<br/><span>Learn on your schedule</span></p>
                </div>
            </div>
     );
}
 
export default details;
