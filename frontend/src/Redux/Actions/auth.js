import {
  USER_LOAD_REQUEST,
  USER_LOAD_SUCCESS,
  USER_LOAD_FAILURE,
} from "../Constants/types";
import axios from "axios";
import baseUrl from "../../baseurl";

export const loadUser = () => async (dispatch) => {
  try {
    dispatch({
      type: USER_LOAD_REQUEST,
    });
    const token = localStorage.getItem("token");
    const { data } = await axios({
      method: "GET",
      url: `${baseUrl}/verify`,
      headers: {
        token: `Bearer ${token}`,
      },
    });
    if (!data.success) {
      localStorage.removeItem("token");
      dispatch({
        type: USER_LOAD_FAILURE,
      });
    } else {
      dispatch({
        type: USER_LOAD_SUCCESS,
        payload: data.data,
      });
    }
  } catch (error) {
    localStorage.removeItem("token");
    dispatch({
      type: USER_LOAD_FAILURE,
    });
  }
};
