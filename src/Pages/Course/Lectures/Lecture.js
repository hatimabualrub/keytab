import "./Lecture.css";

const Lecture = ({ lesson }) => {
  return (
    <div className="lecture-box">
      <div className="lecture">
        <div className="thumbnail">
          <img src={"/images/" + lesson._id} alt="thumbnail" />
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
