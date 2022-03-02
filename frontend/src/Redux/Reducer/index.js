import { combineReducers } from "redux";
import { auth } from "./auth";
import { register, login } from "./user";
import { leaderBoard } from "./leaderboard";
import { score } from "./score";
import { addQuiz, homePageQuiz } from "./quiz";
export default combineReducers({
  auth,
  register,
  login,
  leaderBoard,
  addQuiz,
  score,
  homePageQuiz,
});
