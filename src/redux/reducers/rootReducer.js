import { language } from "./language/languageReducer";
import { benefit } from "./benefit/benefitReducer";
import { combineReducers } from "redux";

export const rootReducer = combineReducers({
  language,
  benefit,
});
