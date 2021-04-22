import axios from "axios";
import {
  USER_SIGNIN_FAIL,
  USER_SIGNIN_REQUEST,
  USER_SIGNIN_SUCSSES,
  USER_SIGNUP_FAIL,
  USER_SIGNUP_REQUEST,
  USER_SIGNUP_SUCSSES,
} from "../constants/userConstants";

export const requestSignin = (email, password) => async (dispatch) => {
  dispatch({ type: USER_SIGNIN_REQUEST });
  try {
    const { data } = await axios.post("/users/signin", {
      email,
      password,
    });
    dispatch({ type: USER_SIGNIN_SUCSSES, payload: data });
    localStorage.setItem("userInfo", JSON.stringify(data));
    console.log(data);
  } catch (e) {
    dispatch({
      type: USER_SIGNIN_FAIL,
      payload:
        e.response && e.response.data.message
          ? e.response.data.message
          : e.message,
    });
  }
};

export const requestSignup = (name, email, password) => async (dispatch) => {
  dispatch({ type: USER_SIGNUP_REQUEST });
  try {
    const { data } = await axios.post("/users/signup", {
      name,
      email,
      password,
    });

    dispatch({ type: USER_SIGNUP_SUCSSES, payload: data });
    dispatch({ type: USER_SIGNIN_SUCSSES, payload: data });

    localStorage.setItem("userInfo", JSON.stringify(data));
  } catch (e) {
    dispatch({
      type: USER_SIGNUP_FAIL,
      payload:
        e.response && e.response.data.message
          ? e.response.data.message
          : e.message,
    });
  }
};
