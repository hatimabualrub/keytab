import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import {
  courseEnrollmentReducer,
  courseInfoReducer,
  courseReviewsReducer,
  createCourseReducer,
  createdCoursesReducer,
  enrolledCoursesReducer,
  getCoursesHomeReducer,
  searchCourseReducer,
} from "./reducers/courseReducers";
import {
  addLessonReducer,
  courseLessonsReducer,
  lessonInfoReducer,
} from "./reducers/lessonReducers";
import { userSigninReducer, userSignupReducer } from "./reducers/userReducers";

const initialState = {
  userSignin: {
    userInfo: localStorage.getItem("userInfo")
      ? JSON.parse(localStorage.getItem("userInfo"))
      : null,
  },
};

const reducer = combineReducers({
  userSignin: userSigninReducer,
  userSignup: userSignupReducer,
  getCoursesHome: getCoursesHomeReducer,
  courseInfo: courseInfoReducer,
  courseReviews: courseReviewsReducer,
  courseEnrollment: courseEnrollmentReducer,
  courseLessons: courseLessonsReducer,
  lessonInfo: lessonInfoReducer,
  enrolledCourses: enrolledCoursesReducer,
  createdCourses: createdCoursesReducer,
  createCourse: createCourseReducer,
  addLesson: addLessonReducer,
  searchCourse: searchCourseReducer,
});

const store = createStore(reducer, initialState, applyMiddleware(thunk));

export default store;
