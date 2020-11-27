import { language } from "./language";
import { benefits } from "./benefits";
import { questions } from "./questions";
import { combineReducers } from "redux";

export const rootReducer = combineReducers({
  language,
  questions,
  benefits,
});
