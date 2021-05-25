import {
  GET_COURSES_FAIL_HOME,
  GET_COURSES_REQUEST_HOME,
  GET_COURSES_SUCCESS_HOME,
  GET_COURSE_INFO_FAIL,
  GET_COURSE_INFO_REQUEST,
  GET_COURSE_INFO_SUCCESS,
  GET_COURSE_REVIEWS_FAIL,
  GET_COURSE_REVIEWS_REQUEST,
  GET_COURSE_REVIEWS_SUCCESS,
} from "../constants/courseConstants";

export const getCoursesHomeReducer = (
  state = {
    courses: {
      "English Language": [],
      "Arabic Language": [],
      Mathematics: [],
    },
  },
  action
) => {
  switch (action.type) {
    case GET_COURSES_REQUEST_HOME:
      return { ...state, loading: true };
    case GET_COURSES_SUCCESS_HOME:
      return { ...state, loading: false, courses: action.payload };
    case GET_COURSES_FAIL_HOME:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export const courseInfoReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_COURSE_INFO_REQUEST:
      return { loading: true };
    case GET_COURSE_INFO_SUCCESS:
      return { loading: false, course: action.payload };
    case GET_COURSE_INFO_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const courseReviewsReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_COURSE_REVIEWS_REQUEST:
      return { loading: true };
    case GET_COURSE_REVIEWS_SUCCESS:
      return { loading: false, reviews: action.payload };
    case GET_COURSE_REVIEWS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
