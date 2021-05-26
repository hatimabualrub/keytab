import { useDispatch, useSelector } from "react-redux";
import { enrollCourse } from "../../../actions/courseActions";
import Spinner from "../../../Components/Spinner/Spinner";

import "./CourseNavBar.css";

export default function CourseNavBar({ course, toggleView, viewState }) {
  const { userState } = course;

  const courseEnrollment = useSelector((state) => state.courseEnrollment);
  const { loading, success } = courseEnrollment;

  const dispatch = useDispatch();

  const enrollmentHandler = () => {
    dispatch(enrollCourse(course.course._id));
  };

  return (
    <div className="course-price">
      {loading && <Spinner />}
      <p className="first-para">
        <span>Grade level :</span> {course.course.gradeLevel}{" "}
      </p>
      <div className="right-buttons">
        {userState.isUserEnrolled || success ? (
          <>
            <p
              className="clicked"
              onClick={() =>
                toggleView(viewState === "details" ? "lectures" : "details")
              }
            >
              Course {viewState === "details" ? "content" : "details"}{" "}
            </p>
            <p className="second-para">Enrolled</p>
          </>
        ) : (
          <p className="second-para enroll" onClick={enrollmentHandler}>
            Enroll Now
          </p>
        )}
      </div>
    </div>
  );
}
