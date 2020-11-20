import { GET_NEXT_QUESTION } from "./actionTypes";

export const QUESTIONS = {
  QUESTION: [
    { id: 1, question: "Are you a canadian resident?" },
    { id: 2, question: "Are you a canadian resident/citizen " },
    { id: 3, question: "Are you 16 or older" },
  ],
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
