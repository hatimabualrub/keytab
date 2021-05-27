import { Link } from "react-router-dom";

const Details = ({ lesson }) => {
  return (
    <div className="container">
      <div className="information">
        <h1 className="title">
          {lesson.order}) {lesson.title}
        </h1>
        <p className="lecture-description">{lesson.description}</p>
      </div>

      <div className="back-to-course">
        <Link id="move-btn" to={`/course/${lesson.course}`}>
          Back To Course
        </Link>
      </div>
    </div>
  );
};

export default Details;
