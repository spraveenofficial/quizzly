import {
  SCORE_CHANGE,
  SET_SCORE_NULL,
  SELECT_ANSWER,
} from "../Constants/types";
const initialState = {
  selectedOptions: [],
  score: 0,
};

export const quiz = (state = initialState, action) => {
  switch (action.type) {
    case SCORE_CHANGE:
      return { ...state, score: state.score + action.payload };
    case SET_SCORE_NULL:
      return { ...initialState };
    case SELECT_ANSWER:
      return {
        ...state,
        selectedOptions: [...state.selectedOptions, action.payload],
      };
    default:
      return state;
  }
};
