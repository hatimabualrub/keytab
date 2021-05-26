import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCourseLectures } from "../../../actions/lessonActions";
import Spinner from "../../../Components/Spinner/Spinner";

import Lecture from "./Lecture";

const Lectures = ({ courseId }) => {
  const courseLessons = useSelector((state) => state.courseLessons);
  const { loading, lessons } = courseLessons;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCourseLectures(courseId));
  }, [dispatch, courseId]);

  return (
    <>
      {loading && <Spinner />}
      {lessons &&
        lessons.map((lesson) => <Lecture key={lesson._id} lesson={lesson} />)}
    </>
  );
};

export default Lectures;
