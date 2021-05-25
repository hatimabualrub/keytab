import axios from "axios";
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

export const getCourseInfo = (courseId) => async (dispatch, getState) => {
  dispatch({ type: GET_COURSE_INFO_REQUEST });

  const {
    userSignin: {
      userInfo: { token },
    },
  } = getState();
  try {
    const { data } = await axios.get("/courses/view/" + courseId, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    dispatch({ type: GET_COURSE_INFO_SUCCESS, payload: data });
  } catch (e) {
    dispatch({
      type: GET_COURSE_INFO_FAIL,
      payload:
        e.response && e.response.data.message
          ? e.response.data.message
          : e.message,
    });
  }
};

export const getCourseReviews = (courseId) => async (dispatch) => {
  dispatch({ type: GET_COURSE_REVIEWS_REQUEST });
  try {
    const { data } = await axios.get("/courses/reviews/" + courseId);

    console.log(data);
    dispatch({ type: GET_COURSE_REVIEWS_SUCCESS, payload: data });
  } catch (e) {
    dispatch({
      type: GET_COURSE_REVIEWS_FAIL,
      payload:
        e.response && e.response.data.message
          ? e.response.data.message
          : e.message,
    });
  }
};
