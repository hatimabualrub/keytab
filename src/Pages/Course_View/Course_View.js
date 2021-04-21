import Nav from "../../Components/Nav/Nav_Home";
import Description from "./Description";
import Feedback from "./Feedback";
import Price from "./Price";
import Reviews from './Reviews/Reviews';
import './Course_View.css';

const Course_View = () => {
    return ( 
    <div>
        <Nav />

        <div className="second-section">
        <div className="text-part">
            <h2>English Language For 9th Grade</h2>
            <p>This text shloud be a short description about the course and what you
                will learn from!
            </p>
            <div className="rating">
                <span className="number">3.7</span>
                <ul className="stars gold-stars ">
                  <li><i className="fas fa-star"></i></li>
                  <li><i className="fas fa-star"></i></li>
                  <li><i className="fas fa-star"></i></li>
                  <li><i className="fas fa-star-half-alt"></i></li>
                  <li><i className="far fa-star"></i></li>
                </ul>
                <span className="rate"> (5,673 ratings) 9,552 students</span>
            </div>
            <p>Created by <span>Hatim Abualrub</span></p>
        </div>

        <div className="img">
            <div className="img-part">
               <img src="images/english-course.jpg" />
            </div>  
        </div>
    </div>

    <Price />
    

    <Description />
    

     <Feedback />
     

    <Reviews />
    
    </div>
    
     );
}
 
export default Course_View;