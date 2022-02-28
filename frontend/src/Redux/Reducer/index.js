import { combineReducers } from "redux";
import { auth } from "./auth";
import { register, login } from "./user";
import { leaderBoard } from "./leaderboard";
export default combineReducers({ auth, register, login, leaderBoard });
