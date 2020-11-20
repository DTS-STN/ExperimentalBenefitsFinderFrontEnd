import { GET_NEXT_QUESTION } from "./actionTypes";

export const QUESTIONS = {
  QUESTION: "",
};

export const nextQuestion = function (question_id) {
  return {
    type: GET_NEXT_QUESTION,
    question_id,
  };
};

// All this is based on suppositions
//  are we getting all the questions at once ?  or one by one ?
//   either way we need some kind of id to know what it is next
