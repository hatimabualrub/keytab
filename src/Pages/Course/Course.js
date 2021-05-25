import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getCourseInfo } from "../../actions/courseActions";

import Header from "./CourseHeader/Header";
import CourseNavBar from "./CourseNavBar/CourseNavBar";
import Details from "./Details/Details";
import Lectures from "./Lectures/Lectures";
import Spinner from "../../Components/Spinner/Spinner";

const Course = () => {
  const courseInfo = useSelector((state) => state.courseInfo);
  const { course, loading, error } = courseInfo;
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(getCourseInfo(id));
  }, [dispatch, id]);

  return (
    <>
      {loading && <Spinner />}
      {course && (
        <>
          <Header course={course} />
          <CourseNavBar />
          <Details course={course} />
        </>
      )}

      {/* <Lectures /> */}
    </>
  );
};

export default Course;
