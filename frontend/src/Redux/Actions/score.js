import { SCORE_CHANGE } from "../Constants/types";

export const scoreChange = (score) => async (dispatch) => {
  dispatch({
    type: SCORE_CHANGE,
    payload: score,
  });
};
