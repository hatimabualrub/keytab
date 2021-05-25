import "./Lecture.css";
const Lecture = () => {
  return (
    <div className="lecture-box">
      <div className="lecture">
        <div className="thumbnail">
          <img src="images/thumb.jpg" alt="thumbnail" />
        </div>
        <div className="lecture-information">
          <h3>1. lecture one</h3>
          <p>This lecture talking about nothing </p>
          <i className="fas fa-play-circle"></i> <label>10 min</label>
        </div>
      </div>
    </div>
  );
};

export default Lecture;
