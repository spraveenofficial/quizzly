import {
  ADD_QUIZ_REQUEST,
  ADD_QUIZ_REQUEST_SUCCESS,
  ADD_QUIZ_REQUEST_FAILED,
  HOMEPAGE_LOAD_QUIZ_REQUEST,
  HOMEPAGE_LOAD_QUIZ_SUCCESS,
  HOMEPAGE_LOAD_QUIZ_FAILED,
  LOAD_QUIZ_REQUEST,
  LOAD_QUIZ_SUCCESS,
  LOAD_QUIZ_FAILED,
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

export const homePageQuiz = (
  state = { loading: false, success: false, quiz: null },
  action
) => {
  switch (action.type) {
    case HOMEPAGE_LOAD_QUIZ_REQUEST:
      return { loading: true };
    case HOMEPAGE_LOAD_QUIZ_SUCCESS:
      return { loading: false, success: true, quiz: action.payload };
    case HOMEPAGE_LOAD_QUIZ_FAILED:
      return { loading: false, success: false, quiz: null };
    default:
      return state;
  }
};

export const eachQuiz = (
  state = { loading: false, success: false, quiz: null, error: false },
  action
) => {
  switch (action.type) {
    case LOAD_QUIZ_REQUEST:
      return { ...state, loading: true };
    case LOAD_QUIZ_SUCCESS:
      return { loading: false, success: true, quiz: action.payload };
    case LOAD_QUIZ_FAILED:
      return { loading: false, success: false, quiz: null, error: true };
    default:
      return state;
  }
};
