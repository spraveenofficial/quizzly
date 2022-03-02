import {
  ADD_QUIZ_REQUEST,
  ADD_QUIZ_REQUEST_SUCCESS,
  ADD_QUIZ_REQUEST_FAILED,
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
