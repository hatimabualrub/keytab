import {
  GET_COURSE_LESSONS_FAIL,
  GET_COURSE_LESSONS_REQUEST,
  GET_COURSE_LESSONS_SUCCESS,
} from "../constants/lessonConstants";

export const courseLessonsReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_COURSE_LESSONS_REQUEST:
      return { loading: true };
    case GET_COURSE_LESSONS_SUCCESS:
      return { loading: false, lessons: action.payload };
    case GET_COURSE_LESSONS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
