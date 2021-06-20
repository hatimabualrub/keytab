import { Link } from "react-router-dom";
import "./Main.css";

const Mid = () => {
  return (
    <div className="back">
      <div className="mid-text">
        <h1>
          Your Course To <span>Success</span>
        </h1>
        <p>
          Build skills with courses, lessons, and interactive content with the
          best instructors in Jordan and Middle East.
        </p>
        <div className="btn">
          <Link to="/signup" className="big-btn">
            Join For Free
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Mid;
