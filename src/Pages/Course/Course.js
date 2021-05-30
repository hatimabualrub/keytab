import { useEffect, useState } from "react";
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
  const { course, loading } = courseInfo;
  const dispatch = useDispatch();
  const { id } = useParams();

  const [view, setview] = useState("details");

  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(getCourseInfo(id));
  }, [dispatch, id]);

  const toggleView = (newView) => {
    setview(newView);
  };

  return (
    <>
      {loading && <Spinner />}
      {course && (
        <>
          <Header course={course} />
          <CourseNavBar
            course={course}
            toggleView={toggleView}
            viewState={view}
          />
          {view === "details" && <Details course={course} />}
        </>
      )}

      {view === "lectures" && <Lectures courseId={course.course._id} />}
    </>
  );
};

export default Course;
