import axios from "axios";
import {
  ADD_REVIEW_FAIL,
  ADD_REVIEW_REQUEST,
  ADD_REVIEW_SUCCESS,
  CREATE_COURSE_FAIL,
  CREATE_COURSE_REQUEST,
  CREATE_COURSE_SUCCESS,
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
  SEARCH_COURSE_FAIL,
  SEARCH_COURSE_REQUEST,
  SEARCH_COURSE_SUCCESS,
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
    dispatch({ type: ENROLL_COURSE_CLEAR });
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

export const enrollCourse = (courseId) => async (dispatch, getState) => {
  dispatch({ type: ENROLL_COURSE_REQUEST });
  const {
    userSignin: {
      userInfo: { token },
    },
  } = getState();

  try {
    await axios.post(
      "/courses/enroll",
      { courseId },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    dispatch({ type: ENROLL_COURSE_SUCCESS });
  } catch (e) {
    dispatch({
      type: ENROLL_COURSE_FAIL,
      payload:
        e.response && e.response.data.message
          ? e.response.data.message
          : e.message,
    });
  }
};

export const getEnrolledCourses = () => async (dispatch, getState) => {
  dispatch({ type: GET_ENROLLED_COURSES_REQUEST });
  const {
    userSignin: {
      userInfo: { token },
    },
  } = getState();
  try {
    const { data } = await axios.get("/courses/view/enrolled", {
      headers: { Authorization: `Bearer ${token}` },
    });
    dispatch({ type: GET_ENROLLED_COURSES_SUCCESS, payload: data });
  } catch (e) {
    dispatch({
      type: GET_ENROLLED_COURSES_FAIL,
      payload:
        e.response && e.response.data.message
          ? e.response.data.message
          : e.message,
    });
  }
};

export const getCreatedCourses = () => async (dispatch, getState) => {
  dispatch({ type: GET_CREATED_COURSES_REQUEST });
  const {
    userSignin: {
      userInfo: { token },
    },
  } = getState();
  try {
    const { data } = await axios.get("/courses/view/created", {
      headers: { Authorization: `Bearer ${token}` },
    });
    dispatch({ type: GET_CREATED_COURSES_SUCCESS, payload: data });
  } catch (e) {
    dispatch({
      type: GET_CREATED_COURSES_FAIL,
      payload:
        e.response && e.response.data.message
          ? e.response.data.message
          : e.message,
    });
  }
};

export const createCourse = (course, image) => async (dispatch, getState) => {
  dispatch({ type: CREATE_COURSE_REQUEST });
  const {
    userSignin: {
      userInfo: { token },
    },
  } = getState();
  try {
    const { data } = await axios.post("/courses/create", course, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const fd = new FormData();
    fd.append("image", image, image.name);
    await axios.post(`/images/${data.courseId}`, fd, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    dispatch({ type: CREATE_COURSE_SUCCESS, payload: data.courseId });
  } catch (e) {
    dispatch({
      type: CREATE_COURSE_FAIL,
      payload:
        e.response && e.response.data.message
          ? e.response.data.message
          : e.message,
    });
  }
};

export const searchCourses =
  (title, subject, gradeLevel) => async (dispatch, getState) => {
    dispatch({ type: SEARCH_COURSE_REQUEST });
    const {
      userSignin: {
        userInfo: { token },
      },
    } = getState();

    let query = `title=${title}`;
    if (subject) {
      query += `&subject=${subject}`;
    }
    if (gradeLevel) {
      query += `&gradeLevel=${gradeLevel}`;
    }

    try {
      const { data } = await axios.get(`/courses/view/all?${query}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      dispatch({ type: SEARCH_COURSE_SUCCESS, payload: data });
    } catch (e) {
      dispatch({
        type: SEARCH_COURSE_FAIL,
        payload:
          e.response && e.response.data.message
            ? e.response.data.message
            : e.message,
      });
    }
  };

export const addCourseReview = (request) => async (dispatch, getState) => {
  dispatch({ type: ADD_REVIEW_REQUEST });
  const {
    userSignin: {
      userInfo: { token },
    },
  } = getState();
  try {
    await axios.post("/courses/review", request, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    dispatch({ type: ADD_REVIEW_SUCCESS });
  } catch (e) {
    dispatch({
      type: ADD_REVIEW_FAIL,
      payload:
        e.response && e.response.data.message
          ? e.response.data.message
          : e.message,
    });
  }
};
