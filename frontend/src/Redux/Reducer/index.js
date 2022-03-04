import { combineReducers } from "redux";
import { auth } from "./auth";
import { register, login, user } from "./user";
import { leaderBoard } from "./leaderboard";
import { quiz } from "./score";
import { addQuiz, homePageQuiz, eachQuiz } from "./quiz";
export default combineReducers({
  auth,
  register,
  login,
  leaderBoard,
  addQuiz,
  quiz,
  homePageQuiz,
  eachQuiz,
  user,
});
