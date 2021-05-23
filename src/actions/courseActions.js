import axios from "axios";
import {
  GET_COURSES_FAIL_HOME,
  GET_COURSES_REQUEST_HOME,
  GET_COURSES_SUCCESS_HOME,
} from "../constants/courseConstants";

export const getCoursesHome = (subject) => async (dispatch, getState) => {
  dispatch({ type: GET_COURSES_REQUEST_HOME });
  const {
    getCoursesHome: { courses },
  } = getState();
  try {
    const { data } = await axios.get("/courses/view/all?subject=" + subject);

    courses[subject] = data;
    dispatch({ type: GET_COURSES_SUCCESS_HOME, payload: courses });
  } catch (e) {
    dispatch({
      type: GET_COURSES_FAIL_HOME,
      payload:
        e.response && e.response.data.message
          ? e.response.data.message
          : e.message,
    });
  }
};
