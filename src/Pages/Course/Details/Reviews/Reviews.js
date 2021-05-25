import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import "../Details.css";
import Review from "./Review";
import { getCourseReviews } from "../../../../actions/courseActions";

const Reviews = ({ courseId }) => {
  const courseReviews = useSelector((state) => state.courseReviews);
  const { reviews } = courseReviews;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCourseReviews(courseId));
  }, [dispatch, courseId]);

  return (
    <div className="reviews box">
      {reviews && reviews.length > 0 ? (
        <h2>Reviews</h2>
      ) : (
        <h2>No Reviews Yet</h2>
      )}
      {reviews &&
        reviews.map((review, index) => <Review key={index} review={review} />)}
    </div>
  );
};

export default Reviews;
