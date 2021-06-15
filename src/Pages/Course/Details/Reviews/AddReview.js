import "./AddReview.css";
import image from "./profile.png";

const AddReview = ({ show, setShow }) => {
  return (
    <div className={"background-area " + (show ? "" : "hide")}>
      <div className="content-area">
        <div className="close" onClick={() => setShow(false)}>
          +
        </div>
        <img src={image} alt="profile picture" />
        <form action="">
          <div className="student-rate">
            <ul className="stars gold-stars">
              <li>
                <i className="far fa-star"></i>
              </li>
              <li>
                <i className="far fa-star"></i>
              </li>
              <li>
                <i className="far fa-star"></i>
              </li>
              <li>
                <i className="far fa-star"></i>
              </li>
              <li>
                <i className="far fa-star"></i>
              </li>
            </ul>
          </div>
          <textarea
            className="your-review"
            placeholder="Write your review about this course here . . ."
          ></textarea>
          <input type="submit" className="submit-your-review" />
        </form>
      </div>
    </div>
  );
};

export default AddReview;
