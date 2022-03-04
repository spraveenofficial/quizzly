import {
  ADD_QUIZ_REQUEST,
  ADD_QUIZ_REQUEST_SUCCESS,
  ADD_QUIZ_REQUEST_FAILED,
  HOMEPAGE_LOAD_QUIZ_REQUEST,
  HOMEPAGE_LOAD_QUIZ_SUCCESS,
  HOMEPAGE_LOAD_QUIZ_FAILED,
  LOAD_QUIZ_REQUEST,
  LOAD_QUIZ_SUCCESS,
  LOAD_QUIZ_FAILED,
} from "../Constants/types";
import baseUrl from "../../baseurl";
import axios from "axios";

export const addQuiz = (datas) => async (dispatch) => {
  try {
    dispatch({
      type: ADD_QUIZ_REQUEST,
    });
    const token = localStorage.getItem("token");
    const { data } = await axios({
      method: "POST",
      url: `${baseUrl}/create-quiz`,
      headers: {
        token: `Bearer ${token}`,
      },
      data: datas,
    });
    if (!data.success) {
      dispatch({
        type: ADD_QUIZ_REQUEST_FAILED,
        payload: data.message,
      });
    } else {
      dispatch({
        type: ADD_QUIZ_REQUEST_SUCCESS,
        payload: data.message,
      });
    }
  } catch (error) {
    console.log(error);
    dispatch({
      type: ADD_QUIZ_REQUEST_FAILED,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const homePageQuiz = () => async (dispatch) => {
  try {
    dispatch({
      type: HOMEPAGE_LOAD_QUIZ_REQUEST,
    });
    const token = localStorage.getItem("token");
    const { data } = await axios({
      method: "GET",
      url: `${baseUrl}/quiz`,
      headers: {
        token: `Bearer ${token}`,
      },
    });
    if (!data.success) {
      dispatch({
        type: HOMEPAGE_LOAD_QUIZ_FAILED,
        payload: data.message,
      });
    } else {
      dispatch({
        type: HOMEPAGE_LOAD_QUIZ_SUCCESS,
        payload: data.data,
      });
    }
  } catch (error) {
    console.log(error);
    dispatch({
      type: HOMEPAGE_LOAD_QUIZ_FAILED,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const eachQuiz = (params) => async (dispatch) => {
  try {
    dispatch({
      type: LOAD_QUIZ_REQUEST,
    });
    const token = localStorage.getItem("token");
    const { data } = await axios({
      method: "GET",
      url: `${baseUrl}/quiz/${params}`,
      headers: {
        token: `Bearer ${token}`,
      },
    });
    if (!data.success) {
      dispatch({
        type: LOAD_QUIZ_FAILED,
        payload: data.message,
      });
    } else {
      dispatch({
        type: LOAD_QUIZ_SUCCESS,
        payload: data.data,
      });
    }
  } catch (error) {
    console.log(error);
    dispatch({
      type: LOAD_QUIZ_FAILED,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

