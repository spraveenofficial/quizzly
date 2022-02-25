import {
  USER_LOAD_REQUEST,
  USER_LOAD_SUCCESS,
  USER_LOAD_FAILURE,
} from "../Constants/types";

// export default function auths(state = initialState, action) {
//   const { type, payload } = action;
//   switch (type) {
//     case USER_LOAD_REQUEST:
//       return {
//         ...state,
//         isAuthenticated: false,
//         loading: true,
//         user: null,
//       };
//     case USER_LOAD_SUCCESS:
//       return {
//         ...state,
//         isAuthenticated: true,
//         loading: false,
//         user: payload,
//       };
//     case USER_LOAD_FAILURE:
//       return {
//         ...state,
//         token: null,
//         isAuthenticated: false,
//         loading: false,
//         user: null,
//       };
//     default:
//       return state;
//   }
// }

export const auth = (
  state = { isAuthenticated: false, loading: false, user: null },
  action
) => {
  console.log(action.type);
  switch (action.type) {
    case USER_LOAD_REQUEST:
      return { isAuthenticated: false, loading: true, user: null };
    case USER_LOAD_SUCCESS:
      return { isAuthenticated: true, loading: false, user: action.payload };
    case USER_LOAD_FAILURE:
      return { isAuthenticated: false, loading: false, user: null };
    default:
      return state;
  }
};
