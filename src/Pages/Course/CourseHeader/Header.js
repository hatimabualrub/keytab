import RatingStars from "../../../Components/Stars/RatingStars";
import "./Header.css";

const Header = (props) => {
  const { course, enrollments } = props.course;
  return (
    <div className="course-header">
      <div className="text-part">
        <h2>{course.title}</h2>
        <p>{course.description}</p>
        <div className="rating">
          <span className="number">{enrollments.rateValue}</span>
          <RatingStars rating={enrollments.rateValue} />
          <span className="rate">
            {" "}
            ({enrollments.rateCount} ratings) {enrollments.enrollmentCount}{" "}
            students
          </span>
        </div>
        <p>
          Created by <span>{course.creator.name}</span>
        </p>
      </div>

      <div className="img">
        <div className="img-part">
          <img
            src={"https://keytab-api.glitch.me/images/" + course._id}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
