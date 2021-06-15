import React, { useState } from 'react';
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Comment from './Comment';

import "../Details.css";
import Review from "./Review";
import { getCourseReviews } from "../../../../actions/courseActions";
import {WithPopUp} from '../../../../hoc/WithPopUp';

const Reviews = ({ courseId }) => {
  const courseReviews = useSelector((state) => state.courseReviews);
  const { reviews } = courseReviews;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCourseReviews(courseId));
  }, [dispatch, courseId]);

  const [isInputVisible, setisInputVisible] = useState(false);
  const EnhencedComment = WithPopUp(Comment);
  
  return (
    <div className="reviews box">
      
      <div  className="box-header">
        <h2>Reviews</h2>
        <div className="add-review"><span onClick={() => setisInputVisible(!isInputVisible)}>Add your review</span></div>
      </div>
      {isInputVisible && <EnhencedComment />}
      
      {reviews && reviews.length > 0 ? (
        null
      ) : (
        <h2>No Reviews Yet</h2>
      )}
      {reviews &&
        reviews.map((review, index) => <Review key={index} review={review} />)}
      
    </div>
  );
};

export default Reviews;
