import {
  LEADERBOARD_REQUEST,
  LEADERBOARD_REQUEST_SUCCESS,
  LEADERBOARD_REQUEST_FAILED,
} from "../Constants/types";
import axios from "axios";
import baseUrl from "../../baseurl";
export const leaderBoards = () => async (dispatch) => {
  try {
    dispatch({
      type: LEADERBOARD_REQUEST,
    });
    const token = localStorage.getItem("token");
    const { data } = await axios({
      method: "GET",
      url: `${baseUrl}/leaderboard`,
      headers: {
        token: `Bearer ${token}`,
      },
    });
    // const decryptedData = await decrypt(data.data);
    if (!data.success) {
      dispatch({
        type: LEADERBOARD_REQUEST_FAILED,
      });
    } else {
      dispatch({
        type: LEADERBOARD_REQUEST_SUCCESS,
        payload: data.data,
      });
    }
  } catch (error) {
    console.log(error);
    dispatch({
      type: LEADERBOARD_REQUEST_FAILED,
    });
  }
};
