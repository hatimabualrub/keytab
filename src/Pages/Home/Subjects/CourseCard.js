import { useHistory } from "react-router-dom";

import RatingStars from "../../../Components/Stars/RatingStars";

const CourseCard = ({ course }) => {
  const history = useHistory();

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
        <h4>{course.course.title}</h4>
        <p>{course.instructor}</p>
        <div className="rating">
          <span>{course.enrollments.rateValue}</span>
          <RatingStars rating={course.enrollments.rateValue} />

          <span className="rate"> ({course.enrollments.rateCount})</span>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
