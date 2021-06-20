import { useHistory } from "react-router-dom";

import RatingStars from "../Stars/RatingStars";
import "./CourseCard.css";

const CourseCard = ({ course }) => {
  const history = useHistory();

  const handleTitleLength = (t, length) => {
    let title = "";
    if (t.length < length) {
      title = t;
    } else {
      const tokens = t.split(" ");
      for (let i = 0; i < tokens.length; i++) {
        if (title.length + tokens[i].length < length) {
          title += " " + tokens[i];
        }
      }
      title += "...";
    }
    return title;
  };

  const onCardClick = () => {
    history.push("/course/" + course.course._id);
  };

  return (
    <div className="course" onClick={onCardClick}>
      <div className="img">
        <img
          src={"https://keytab-api.glitch.me/images/" + course.course._id}
          alt=""
        />
      </div>

      <div className="details">
        <h4>{handleTitleLength(course.course.title, 50)}</h4>
        <br />
        <p>{course.instructor}</p>
        <div className="rating">
          <span>{course.enrollments.rateValue.toFixed(1)}</span>
          <RatingStars rating={course.enrollments.rateValue} />

          <span className="rate"> ({course.enrollments.rateCount})</span>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
