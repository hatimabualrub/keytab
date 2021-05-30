import axios from "axios";
import {
  ADD_LESSON_FAIL,
  ADD_LESSON_REQUEST,
  ADD_LESSON_SUCCESS,
  GET_COURSE_LESSONS_FAIL,
  GET_COURSE_LESSONS_REQUEST,
  GET_COURSE_LESSONS_SUCCESS,
  GET_LESSON_INFO_FAIL,
  GET_LESSON_INFO_REQUEST,
  GET_LESSON_INFO_SUCCESS,
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

export const getLessonInfo = (lessonId) => async (dispatch, getState) => {
  dispatch({ type: GET_LESSON_INFO_REQUEST });
  const {
    userSignin: {
      userInfo: { token },
    },
  } = getState();

  try {
    const { data } = await axios.get("/lessons/view/" + lessonId, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    dispatch({ type: GET_LESSON_INFO_SUCCESS, payload: data });
  } catch (e) {
    dispatch({
      type: GET_LESSON_INFO_FAIL,
      payload:
        e.response && e.response.data.message
          ? e.response.data.message
          : e.message,
    });
  }
};

export const addLesson = (lesson, image) => async (dispatch, getState) => {
  dispatch({ type: ADD_LESSON_REQUEST });
  const {
    userSignin: {
      userInfo: { token },
    },
  } = getState();
  try {
    const { data } = await axios.post("/lessons/create", lesson, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const fd = new FormData();
    fd.append("image", image, image.name);
    await axios.post(`/images/${data.lessonId}`, fd, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    dispatch({ type: ADD_LESSON_SUCCESS });
  } catch (e) {
    dispatch({
      type: ADD_LESSON_FAIL,
      payload:
        e.response && e.response.data.message
          ? e.response.data.message
          : e.message,
    });
  }
};
