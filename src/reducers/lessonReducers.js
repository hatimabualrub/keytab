import {
  ADD_LESSON_FAIL,
  ADD_LESSON_REQUEST,
  ADD_LESSON_SUCCESS,
  ADD_LESSON_RESET,
  GET_COURSE_LESSONS_FAIL,
  GET_COURSE_LESSONS_REQUEST,
  GET_COURSE_LESSONS_SUCCESS,
  GET_LESSON_INFO_FAIL,
  GET_LESSON_INFO_REQUEST,
  GET_LESSON_INFO_SUCCESS,
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

export const lessonInfoReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_LESSON_INFO_REQUEST:
      return { loading: true };
    case GET_LESSON_INFO_SUCCESS:
      return { loading: false, lesson: action.payload };
    case GET_LESSON_INFO_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const addLessonReducer = (state = {}, action) => {
  switch (action.type) {
    case ADD_LESSON_REQUEST:
      return { loading: true };
    case ADD_LESSON_SUCCESS:
      return { loading: false, success: true };
    case ADD_LESSON_FAIL:
      return { loading: false, error: action.payload };
    case ADD_LESSON_RESET:
      return {};
    default:
      return state;
  }
};
