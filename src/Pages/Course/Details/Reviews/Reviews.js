import React, { useState } from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import "../Details.css";
import Review from "./Review";
import { getCourseReviews } from "../../../../actions/courseActions";
import AddReview from "./AddReview";

const Reviews = ({ courseId, userState }) => {
  const [showAddReview, setShowAddReview] = useState(false);
  const courseReviews = useSelector((state) => state.courseReviews);
  const { reviews } = courseReviews;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCourseReviews(courseId));
  }, [dispatch, courseId]);

  return (
    <div className="reviews box">
      <div className="box-header">
        <h2>Reviews</h2>
        {userState.isUserEnrolled && (
          <div className="add-review">
            <span onClick={() => setShowAddReview(true)}>Add your review</span>
          </div>
        )}
      </div>
      <AddReview show={showAddReview} setShow={setShowAddReview} />
      {reviews && reviews.length > 0 ? null : <h2>No Reviews Yet</h2>}
      {reviews &&
        reviews.map((review, index) => <Review key={index} review={review} />)}
    </div>
  );
};

export default Reviews;
