import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import {
  courseInfoReducer,
  courseReviewsReducer,
  getCoursesHomeReducer,
} from "./reducers/courseReducers";
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
});

const store = createStore(reducer, initialState, applyMiddleware(thunk));

export default store;
