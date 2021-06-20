import { useHistory } from "react-router-dom";

import "./Lecture.css";

const Lecture = ({ lesson }) => {
  const history = useHistory();
  const lectureClickHandler = () => {
    history.push("/lesson/" + lesson._id);
  };

  return (
    <div className="lecture-box" onClick={lectureClickHandler}>
      <div className="lecture">
        <div className="thumbnail">
          <img
            src={"https://keytab-api.glitch.me/images/" + lesson._id}
            alt="thumbnail"
          />
        </div>
        <div className="lecture-information">
          <h3>
            {lesson.order}. {lesson.title}
          </h3>
          <p>{lesson.description}</p>
          <i className="fas fa-play-circle"></i> <label>Play</label>
        </div>
      </div>
    </div>
  );
};

export default Lecture;
