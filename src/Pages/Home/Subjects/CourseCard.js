import { useHistory } from "react-router-dom";

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
          <span>3.7</span>
          <ul className="stars">
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

          <span className="rate"> ({course.enrollments.enrollmentCount})</span>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
