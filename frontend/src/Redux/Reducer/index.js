import { combineReducers } from "redux";
import { auth } from "./auth";
import { register, login } from "./user";
export default combineReducers({ auth, register, login });
