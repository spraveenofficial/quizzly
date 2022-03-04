import {
  SCORE_CHANGE,
  SET_SCORE_NULL,
  SELECT_ANSWER,
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

export const SelectAnswer = (id, option) => async (dispatch) => {
  dispatch({
    type: SELECT_ANSWER,
    payload: { id: id, option: option },
  });
};
