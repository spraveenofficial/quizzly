import {
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_REGISTER_FAIL,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL,
  USER_LOGOUT,
  UPDATE_USER_QUIZ_REQUEST,
  UPDATE_USER_QUIZ_SUCCESS,
  UPDATE_USER_QUIZ_FAILED,
  USER_RECENT_QUIZ_REQUEST,
  USER_RECENT_QUIZ_SUCCESS,
  USER_RECENT_QUIZ_FAILED,
} from "../Constants/types";
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

export const logout = () => async (dispatch) => {
  dispatch({
    type: USER_LOGOUT,
  });
  localStorage.removeItem("token");
};

export const updateUserQuiz =
  (quizId, score, timeTaken) => async (dispatch) => {
    try {
      dispatch({
        type: UPDATE_USER_QUIZ_REQUEST,
      });
      const token = localStorage.getItem("token");
      const { data } = await axios({
        url: `${baseUrl}/completedquiz`,
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          token: `Bearer ${token}`,
        },
        data: {
          quizId,
          score,
          timeTaken,
        },
      });
      if (!data.success) {
        dispatch({
          type: UPDATE_USER_QUIZ_FAILED,
          payload: data.message,
        });
      } else {
        dispatch({
          type: UPDATE_USER_QUIZ_SUCCESS,
          payload: data.message,
        });
        localStorage.setItem("token", data.token);
      }
    } catch (error) {
      dispatch({
        type: UPDATE_USER_QUIZ_FAILED,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

export const requestRecentQuiz = () => async (dispatch) => {
  try {
    dispatch({
      type: USER_RECENT_QUIZ_REQUEST,
    });
    const token = localStorage.getItem("token");
    const { data } = await axios({
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        token: `Bearer ${token}`,
      },
      url: `${baseUrl}/recent-quiz`,
    });
    if (!data.success) {
      dispatch({
        type: USER_RECENT_QUIZ_FAILED,
        payload: data.message,
      });
    } else {
      dispatch({
        type: USER_RECENT_QUIZ_SUCCESS,
        payload: data.data,
      });
    }
  } catch (error) {
    dispatch({
      type: USER_RECENT_QUIZ_FAILED,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
