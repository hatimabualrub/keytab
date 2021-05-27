import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { getCreatedCourses } from "../../actions/courseActions";
import CourseCard from "../../Components/CourseCard/CourseCard";
import Spinner from "../../Components/Spinner/Spinner";

const CreatedCourses = (props) => {
  const createdCourses = useSelector((state) => state.createdCourses);
  const { loading, courses } = createdCourses;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCreatedCourses());
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

export default CreatedCourses;
