import {
  ENROLL_COURSE_CLEAR,
  ENROLL_COURSE_FAIL,
  ENROLL_COURSE_REQUEST,
  ENROLL_COURSE_SUCCESS,
  GET_COURSES_FAIL_HOME,
  GET_COURSES_REQUEST_HOME,
  GET_COURSES_SUCCESS_HOME,
  GET_COURSE_INFO_FAIL,
  GET_COURSE_INFO_REQUEST,
  GET_COURSE_INFO_SUCCESS,
  GET_COURSE_REVIEWS_FAIL,
  GET_COURSE_REVIEWS_REQUEST,
  GET_COURSE_REVIEWS_SUCCESS,
  GET_CREATED_COURSES_FAIL,
  GET_CREATED_COURSES_REQUEST,
  GET_CREATED_COURSES_SUCCESS,
  GET_ENROLLED_COURSES_FAIL,
  GET_ENROLLED_COURSES_REQUEST,
  GET_ENROLLED_COURSES_SUCCESS,
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

export const courseEnrollmentReducer = (state = {}, action) => {
  switch (action.type) {
    case ENROLL_COURSE_REQUEST:
      return { loading: true, success: false };
    case ENROLL_COURSE_SUCCESS:
      return { loading: false, success: true };
    case ENROLL_COURSE_FAIL:
      return { loading: false, error: action.payload, success: false };
    case ENROLL_COURSE_CLEAR:
      return { success: false };
    default:
      return state;
  }
};

export const enrolledCoursesReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_ENROLLED_COURSES_REQUEST:
      return { loading: true };
    case GET_ENROLLED_COURSES_SUCCESS:
      return { loading: false, courses: action.payload };
    case GET_ENROLLED_COURSES_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const createdCoursesReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_CREATED_COURSES_REQUEST:
      return { loading: true };
    case GET_CREATED_COURSES_SUCCESS:
      return { loading: false, courses: action.payload };
    case GET_CREATED_COURSES_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
