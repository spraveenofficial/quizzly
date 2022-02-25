import {
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_REGISTER_FAIL,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL,
} from "../Constants/auth";
import baseUrl from "../../baseurl";
import axios from "axios";

export const signup = (name, email, password) => async (dispatch) => {
  try {
    dispatch({
      type: USER_REGISTER_REQUEST,
    });
    const { data } = await axios({
      method: "POST",
      url: `${baseUrl}/signup`,
      data: {
        name: name,
        email: email,
        password: password,
      },
    });
    if (!data.success) {
      dispatch({
        type: USER_REGISTER_FAIL,
        payload: data.message,
      });
    } else {
      dispatch({
        type: USER_REGISTER_SUCCESS,
        payload: data.message,
      });
    }
  } catch (error) {
    dispatch({
      type: USER_REGISTER_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const login = (email, password) => async (dispatch) => {
  try {
    dispatch({
      type: USER_LOGIN_REQUEST,
    });
    const { data } = await axios({
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      url: `${baseUrl}/login`,
      data: {
        email: email,
        password: password,
      },
    });
    if (!data.success) {
      dispatch({
        type: USER_LOGIN_FAIL,
        payload: data.message,
      });
    } else {
      dispatch({
        type: USER_LOGIN_SUCCESS,
        payload: data.message,
      });
      localStorage.setItem("token", data.token);
    }
  } catch (error) {
    dispatch({
      type: USER_LOGIN_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
