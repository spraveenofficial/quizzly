import { combineReducers } from "redux";
import auth from "./auth";
import { register } from "./user";
export default combineReducers({ auth, register });
