import { SCORE_CHANGE, SET_SCORE_NULL } from "../Constants/types";
const initialState = {
  id: "",
  title: "",
  path: "",
  timeRequired: "",
  questions: [],
  difficulty: "",
  score: 0,
  loading: false,
};

export const score = (state = initialState, action) => {
  switch (action.type) {
    case SCORE_CHANGE:
      return { ...state, score: state.score + action.payload };
    case SET_SCORE_NULL:
      return { ...initialState };
    default:
      return state;
  }
};
