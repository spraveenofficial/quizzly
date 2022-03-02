import {
  ADD_QUIZ_REQUEST,
  ADD_QUIZ_REQUEST_SUCCESS,
  ADD_QUIZ_REQUEST_FAILED,
} from "../Constants/types";

export const addQuiz = (
  state = { loading: false, message: "", success: false },
  action
) => {
  switch (action.type) {
    case ADD_QUIZ_REQUEST:
      return { loading: true };
    case ADD_QUIZ_REQUEST_SUCCESS:
      return { loading: false, message: action.payload, success: true };
    case ADD_QUIZ_REQUEST_FAILED:
      return { loading: false, message: action.payload, success: false };
    default:
      return state;
  }
};
