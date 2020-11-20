import { ACTION_TYPES, QUESTIONS } from "../../actions";

export const question = function (state = "", action) {
  switch (action.type) {
    case ACTION_TYPES.GET_NEXT_QUESTION:
      switch (action.question_id) {
        case QUESTIONS.QUESTION:
          return "next question";
        default:
          return state;
      }
    default:
      return state;
  }
};

//
// here we supposed to return the next question from who knows where
//
