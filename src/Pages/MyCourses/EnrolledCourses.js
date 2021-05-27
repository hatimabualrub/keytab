import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { getEnrolledCourses } from "../../actions/courseActions";
import CourseCard from "../../Components/CourseCard/CourseCard";
import Spinner from "../../Components/Spinner/Spinner";

const EnrolledCourses = (props) => {
  const enrolledCourses = useSelector((state) => state.enrolledCourses);
  const { loading, courses } = enrolledCourses;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getEnrolledCourses());
  }, [dispatch]);
  return (
    <div className="courses my-courses-list">
      {loading && <Spinner />}
      {courses &&
        courses.map((course) => (
          <CourseCard key={course.course._id} course={course} />
        ))}
    </div>
  );
};

export default EnrolledCourses;
