import {
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_REGISTER_FAIL,
} from "../Constants/auth";

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
