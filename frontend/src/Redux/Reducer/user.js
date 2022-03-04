import {
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_REGISTER_FAIL,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL,
  UPDATE_USER_QUIZ_REQUEST,
  UPDATE_USER_QUIZ_SUCCESS,
  UPDATE_USER_QUIZ_FAILED
} from "../Constants/types";

export const register = (
  state = { loading: false, message: "", success: false },
  action
) => {
  switch (action.type) {
    case USER_REGISTER_REQUEST:
      return { loading: true };
    case USER_REGISTER_SUCCESS:
      return { loading: false, message: action.payload, success: true };
    case USER_REGISTER_FAIL:
      return { loading: false, message: action.payload, success: false };
    default:
      return state;
  }
};

export const login = (
  state = { loading: false, message: "", success: false },
  action
) => {
  switch (action.type) {
    case USER_LOGIN_REQUEST:
      return { loading: true };
    case USER_LOGIN_SUCCESS:
      return { loading: false, message: action.payload, success: true };
    case USER_LOGIN_FAIL:
      return { loading: false, message: action.payload, success: false };
    default:
      return state;
  }
};

export const user = (
  state = { loading: false, success: false, data: null },
  action
) => {
  switch (action.type) {
    case UPDATE_USER_QUIZ_REQUEST:
      return { loading: true, success: false, data: action.payload };
    case UPDATE_USER_QUIZ_SUCCESS:
      return { loading: false, success: true, data: action.payload };
    case UPDATE_USER_QUIZ_FAILED: 
      return { loading: false, success: false, data: action.payload };
    default:
      return state;
  }
};
