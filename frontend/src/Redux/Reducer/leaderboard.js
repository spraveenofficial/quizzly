import {
  LEADERBOARD_REQUEST,
  LEADERBOARD_REQUEST_SUCCESS,
  LEADERBOARD_REQUEST_FAILED,
} from "../Constants/types";
export const leaderBoard = (
  state = { loading: false, success: false, leaderBoard: null },
  action
) => {
  switch (action.type) {
    case LEADERBOARD_REQUEST:
      return { loading: true, success: false, leaderBoard: null };
    case LEADERBOARD_REQUEST_SUCCESS:
      return { loading: false, success: true, leaderBoard: action.payload };
    case LEADERBOARD_REQUEST_FAILED:
      return { loading: false, success: false, leaderBoard: null };
    default:
      return state;
  }
};
