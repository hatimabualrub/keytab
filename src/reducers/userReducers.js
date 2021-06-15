import {
  USER_RESET,
  USER_SIGNIN_FAIL,
  USER_SIGNIN_REQUEST,
  USER_SIGNIN_SUCSSES,
  USER_SIGNUP_FAIL,
  USER_SIGNUP_REQUEST,
  USER_SIGNUP_SUCSSES,
} from "../constants/userConstants";

export const userSigninReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_SIGNIN_REQUEST:
      return { loading: true };
    case USER_SIGNIN_SUCSSES:
      return { loading: false, userInfo: action.payload };
    case USER_SIGNIN_FAIL:
      return { loading: false, error: action.payload };
    case USER_RESET:
      return {};
    default:
      return state;
  }
};

export const userSignupReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_SIGNUP_REQUEST:
      return { loading: true };
    case USER_SIGNUP_SUCSSES:
      return { loading: false, userInfo: action.payload };
    case USER_SIGNUP_FAIL:
      return { loading: false, error: action.payload };
    case USER_RESET:
      return {};
    default:
      return state;
  }
};
