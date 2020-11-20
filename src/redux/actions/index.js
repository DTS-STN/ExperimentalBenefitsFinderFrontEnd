import { ACTION_TYPES as LANGUAGE_ACTION_TYPES } from "./language";
import { ACTION_TYPES as QUESTION_ACTION_TYPES } from "./questions";

//Action types used on the reducers

export const ACTION_TYPES = {
  ...LANGUAGE_ACTION_TYPES,
  ...QUESTION_ACTION_TYPES,
};

// State and functions also used on each reducer

export { LANGUAGES, changeLanguageCreator } from "./language";
export { QUESTION, nextQuestion } from "./questions";

//
// this file is just to setup the subfolders
//
