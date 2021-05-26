import axios from "axios";
import {
  GET_COURSE_LESSONS_FAIL,
  GET_COURSE_LESSONS_REQUEST,
  GET_COURSE_LESSONS_SUCCESS,
} from "../constants/lessonConstants";

export const getCourseLectures = (courseId) => async (dispatch, getState) => {
  dispatch({ type: GET_COURSE_LESSONS_REQUEST });
  const {
    userSignin: {
      userInfo: { token },
    },
  } = getState();
  try {
    const { data } = await axios.get("/lessons/view/course/" + courseId, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    dispatch({ type: GET_COURSE_LESSONS_SUCCESS, payload: data });
  } catch (e) {
    dispatch({
      type: GET_COURSE_LESSONS_FAIL,
      payload:
        e.response && e.response.data.message
          ? e.response.data.message
          : e.message,
    });
  }
};