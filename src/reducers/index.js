import { combineReducers } from "redux";
import { user } from "./user";
import { counter } from "./counter";

export const rootReducer = combineReducers({
  counter,
  user
});
