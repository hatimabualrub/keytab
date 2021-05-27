import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

import { getLessonInfo } from "../../actions/lessonActions";
import Spinner from "../../Components/Spinner/Spinner";
import "./CourseLecture.css";
import Details from "./LectureDetails";
import LectureVideo from "./LectureVideo";
import { NavButtons } from "./NavButtons";

const CourseLecture = () => {
  const lessonInfo = useSelector((state) => state.lessonInfo);
  const { loading, lesson } = lessonInfo;
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getLessonInfo(id));
  }, [dispatch, id]);

  return (
    <>
      {loading && <Spinner />}
      {lesson && (
        <>
          <div className="embed-lecture">
            <LectureVideo lesson={lesson.lesson} />
            <Details lesson={lesson.lesson} />
          </div>
          <NavButtons lessonNav={lesson.lessonNav} />
        </>
      )}
    </>
  );
};

export default CourseLecture;
