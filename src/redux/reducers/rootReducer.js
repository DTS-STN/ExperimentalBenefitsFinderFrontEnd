import { language } from "./language/languageReducer";
import { questions } from "./questions/questionsReducer";
import { combineReducers } from "redux";

export const rootReducer = combineReducers({
  language,
  questions,
});
