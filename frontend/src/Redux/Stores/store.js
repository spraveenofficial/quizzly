import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import auth from "../Reducer/index";

const initialState = {};

const middleWare = [thunk];

const store = createStore(
  auth,
  initialState,
  composeWithDevTools(applyMiddleware(...middleWare))
);

export default store;
