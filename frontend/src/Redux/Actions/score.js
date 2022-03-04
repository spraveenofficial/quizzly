import {
  SCORE_CHANGE,
  SET_SCORE_NULL,
} from "../Constants/types";

export const scoreChange = (score) => async (dispatch) => {
  dispatch({
    type: SCORE_CHANGE,
    payload: score,
  });
};

export const setBacktoNull = () => async (dispatch) => {
  dispatch({
    type: SET_SCORE_NULL,
  });
};
