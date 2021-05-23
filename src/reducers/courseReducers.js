import {
  GET_COURSES_FAIL_HOME,
  GET_COURSES_REQUEST_HOME,
  GET_COURSES_SUCCESS_HOME,
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
