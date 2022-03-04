import {
  USER_LOAD_REQUEST,
  USER_LOAD_SUCCESS,
  USER_LOAD_FAILURE,
  USER_LOGOUT,
} from "../Constants/types";

export const auth = (
  state = { isAuthenticated: false, loading: true, user: null },
  action
) => {
  switch (action.type) {
    case USER_LOAD_REQUEST:
      return { isAuthenticated: false, loading: true, user: null };
    case USER_LOAD_SUCCESS:
      return { isAuthenticated: true, loading: false, user: action.payload };
    case USER_LOAD_FAILURE:
      return { isAuthenticated: false, loading: false, user: null };
    case USER_LOGOUT:
      return { isAuthenticated: false, loading: false, user: null };
    default:
      return state;
  }
};
