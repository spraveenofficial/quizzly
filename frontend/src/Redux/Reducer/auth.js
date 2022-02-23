import { SET_AUTH, REMOVE_AUTH, LOAD_USER } from "../Constants/types";

const initialState = {
  token: localStorage.getItem("token"),
  isAuthenticated: false,
  loading: true,
  user: null,
};

export default function seAuth(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case LOAD_USER:
      return {
        ...state,
        isAuthenticated: false,
        loading: false,
        user: null,
      };
    case SET_AUTH:
      return {
        ...state,
        isAuthenticated: true,
        loading: false,
        user: payload,
      };
    case REMOVE_AUTH:
      localStorage.removeItem("erpToken");
      localStorage.removeItem("aliveToken");
      return {
        ...state,
        token: null,
        isAuthenticated: false,
        loading: false,
        user: null,
      };
    default:
      return state;
  }
}
