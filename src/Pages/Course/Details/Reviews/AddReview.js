import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

import { addCourseReview } from "../../../../actions/courseActions";
import Spinner from "../../../../Components/Spinner/Spinner";
import image from "./profile.png";
import "./AddReview.css";

const AddReview = ({ show, setShow }) => {
  const [ratingIndex, setratingIndex] = useState(0);
  const [rate, setRate] = useState(0);
  const [review, setReview] = useState("");
  const [emptyRate, setEmptyRate] = useState(false);

  const addReview = useSelector((state) => state.addReview);
  const { loading, success } = addReview;

  const dispatch = useDispatch();
  const location = useLocation();
  const route = location.pathname;
  const courseId = route.slice(route.lastIndexOf("/") + 1);

  const submitHandler = (e) => {
    e.preventDefault();
    if (rate === 0) {
      return setEmptyRate(true);
    }
    const request = {
      courseId,
      rate,
      review,
    };

    dispatch(addCourseReview(request));
    console.log(courseId);
    console.log(rate);
    console.log(review);
  };

  useEffect(() => {
    if (success === true) {
      window.location.reload();
    }
  }, [success]);

  return (
    <div className={"background-area " + (show ? "" : "hide")}>
      {loading && <Spinner />}
      <div className="content-area">
        <div className="close" onClick={() => setShow(false)}>
          +
        </div>
        <img src={image} alt="profile" />
        <form onSubmit={submitHandler}>
          <div className="student-rate">
            <ul
              className={
                "stars gold-stars add-rate " + (emptyRate && "rate-error")
              }
            >
              <li>
                <i
                  className={
                    "far fa-star " + ((ratingIndex >= 1 || rate >= 1) && "fas")
                  }
                  onMouseEnter={() => setratingIndex(1)}
                  onMouseLeave={() => setratingIndex(0)}
                  onClick={() => setRate(1)}
                ></i>
              </li>
              <li>
                <i
                  className={
                    "far fa-star " + ((ratingIndex >= 2 || rate >= 2) && "fas")
                  }
                  onMouseEnter={() => setratingIndex(2)}
                  onMouseLeave={() => setratingIndex(0)}
                  onClick={() => setRate(2)}
                ></i>
              </li>
              <li>
                <i
                  className={
                    "far fa-star " + ((ratingIndex >= 3 || rate >= 3) && "fas")
                  }
                  onMouseEnter={() => setratingIndex(3)}
                  onMouseLeave={() => setratingIndex(0)}
                  onClick={() => setRate(3)}
                ></i>
              </li>
              <li>
                <i
                  className={
                    "far fa-star " + ((ratingIndex >= 4 || rate >= 4) && "fas")
                  }
                  onMouseEnter={() => setratingIndex(4)}
                  onMouseLeave={() => setratingIndex(0)}
                  onClick={() => setRate(4)}
                ></i>
              </li>
              <li>
                <i
                  className={
                    "far fa-star " + ((ratingIndex >= 5 || rate >= 5) && "fas")
                  }
                  onMouseEnter={() => setratingIndex(5)}
                  onMouseLeave={() => setratingIndex(0)}
                  onClick={() => setRate(5)}
                ></i>
              </li>
            </ul>
            {emptyRate && (
              <p className="rate-error-message ">Please Rate The Course</p>
            )}
          </div>
          <textarea
            className="your-review"
            placeholder="Write your review about this course here . . ."
            value={review}
            onChange={(e) => setReview(e.target.value)}
            required
          ></textarea>
          <input type="submit" className="submit-your-review" />
        </form>
      </div>
    </div>
  );
};

export default AddReview;
