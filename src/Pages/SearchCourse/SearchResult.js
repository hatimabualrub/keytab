import { useHistory } from "react-router";
import RatingStars from "../../Components/Stars/RatingStars";
import "./SearchCourse.css";

const SearchResult = ({ course }) => {
  const history = useHistory();
  return (
    <div
      className="search-box"
      onClick={() => history.push(`/course/${course.course._id}`)}
    >
      <div className="course-box">
        <div className="search-thumbnail">
          <img
            src={`https://keytab-api.glitch.me/images/${course.course._id}`}
            alt="thumbnail"
          />
        </div>

        <div className="search-course-information">
          <h3 className="search-course-name">{course.course.title}</h3>
          <p className="search-short-decription">{course.course.description}</p>

          <div className="rating">
            <span className="out-of-five">
              {course.enrollments.rateValue.toFixed(1)}
            </span>
            <RatingStars rating={course.enrollments.rateValue} />

            <span className="rate">({course.enrollments.rateCount})</span>
          </div>
          <span className="instructor-name">{course.instructor} | </span>
          <span className="lectures-of-course">
            Semester: {course.course.semester}
          </span>
        </div>
      </div>
    </div>
  );
};

export default SearchResult;
