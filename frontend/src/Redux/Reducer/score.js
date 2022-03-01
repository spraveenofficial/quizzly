import { SCORE_CHANGE, LOAD_QUIZ_REQUEST } from "../Constants/types";
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
    // case USER_LOGIN_REQUEST:
    //   return { ...state, loading: true };
    // case USER_LOGIN_SUCCESS:
    //   return { loading: false, message: action.payload, success: true };
    case SCORE_CHANGE:
      return { ...state, score: state.score + action.payload };
    default:
      return state;
  }
};
