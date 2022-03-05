import {
  LEADERBOARD_REQUEST,
  LEADERBOARD_REQUEST_SUCCESS,
  LEADERBOARD_REQUEST_FAILED,
} from "../Constants/types";
export const leaderboard = (
  state = { loading: false, success: false, leaderboard: null },
  action
) => {
  switch (action.type) {
    case LEADERBOARD_REQUEST:
      return { loading: true, success: false, leaderboard: null };
    case LEADERBOARD_REQUEST_SUCCESS:
      return { loading: false, success: true, leaderboard: action.payload };
    case LEADERBOARD_REQUEST_FAILED:
      return { loading: false, success: false, leaderboard: null };
    default:
      return state;
  }
};
