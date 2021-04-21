import './Course_View.css';

const Feedback = () => {
    return ( 
    <div>
        <div className="feedback box">
        <h2>Student feedback</h2>
        <div className="course-rating">
            <div className="student-rate">
                <span>3.7</span>
                <ul className="stars gold-stars">
                    <li><i className="fas fa-star"></i></li>
                    <li><i className="fas fa-star"></i></li>
                    <li><i className="fas fa-star"></i></li>
                    <li><i className="fas fa-star-half-alt"></i></li>
                    <li><i className="far fa-star"></i></li>
                  </ul>
                  <span>Course Rating</span>
            </div>

            <div className="percentage">
               
                <ul className="stars gold-stars">
                    <li>(42%)</li>
                    <li><i className="fas fa-star"></i></li>
                    <li><i className="fas fa-star"></i></li>
                    <li><i className="fas fa-star"></i></li>
                    <li><i className="fas fa-star-half-alt"></i></li>
                    <li><i className="far fa-star"></i></li>
                  </ul>
                  <ul className="stars gold-stars">
                    <li>(31%)</li>
                    <li><i className="fas fa-star"></i></li>
                    <li><i className="fas fa-star"></i></li>
                    <li><i className="fas fa-star"></i></li>
                    <li><i className="far fa-star"></i></li>
                    <li><i className="far fa-star"></i></li>
                  </ul>
                  
            </div>
        </div>
    </div>
    </div>
     );
}
 
export default Feedback;