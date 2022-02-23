import {
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_REGISTER_FAIL,
} from "../Constants/auth";

import axios from "axios";

export const signup = (name, email, password) => async (dispatch) => {
  try {
    dispatch({
      type: USER_REGISTER_REQUEST,
    });
    const { data } = await axios({
      method: "POST",
      url: "/signup",
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
