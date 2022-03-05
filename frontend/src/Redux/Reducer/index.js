import { combineReducers } from "redux";
import { auth } from "./auth";
import { register, login, user } from "./user";
import { leaderboard } from "./leaderboard";
import { quiz } from "./score";
import { addQuiz, homePageQuiz, eachQuiz } from "./quiz";
export default combineReducers({
  auth,
  register,
  login,
  leaderboard,
  addQuiz,
  quiz,
  homePageQuiz,
  eachQuiz,
  user,
});
