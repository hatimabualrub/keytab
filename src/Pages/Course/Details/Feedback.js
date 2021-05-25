import StartRatio from "../../../Components/Stars/StarsRatio/StarsRatio";
import "./Details.css";

const Feedback = () => {
  return (
    <div className="feedback box">
      <h2>Student feedback</h2>
      <div className="course-rating">
        <div className="student-rate">
          <span>3.7</span>
          <ul className="stars gold-stars">
            <li>
              <i className="fas fa-star"></i>
            </li>
            <li>
              <i className="fas fa-star"></i>
            </li>
            <li>
              <i className="fas fa-star"></i>
            </li>
            <li>
              <i className="fas fa-star-half-alt"></i>
            </li>
            <li>
              <i className="far fa-star"></i>
            </li>
          </ul>
          <span>Course Rating</span>
        </div>

        <div className="percentage">
          <StartRatio percentage={35} rate={5} />
          <StartRatio percentage={35} rate={4} />
          <StartRatio percentage={35} rate={3} />
          <StartRatio percentage={35} rate={2} />
          <StartRatio percentage={35} rate={1} />
        </div>
      </div>
    </div>
  );
};

export default Feedback;
