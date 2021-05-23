import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";

import "../Home.css";
import CourseCard from "./CourseCard";
import { getCoursesHome } from "../../../actions/courseActions";

const Subject = (props) => {
  const getCoursesHomeReducer = useSelector((state) => state.getCoursesHome);
  const courses = getCoursesHomeReducer.courses[props.name];

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCoursesHome(props.name));
  }, [dispatch, props]);

  return (
    <div className="subjects">
      <h1>{props.name}</h1>

      <div className="courses">
        {courses.length > 0
          ? courses.map((course, index) => (
              <CourseCard key={index} course={course} />
            ))
          : null}
      </div>
    </div>
  );
};

export default Subject;
