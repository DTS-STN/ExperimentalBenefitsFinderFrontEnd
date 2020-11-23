import { ACTION_TYPES, BENEFITS } from "../../actions";

export const benefit = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPES.GET_ELIGIBLE_BENEFIT:
      switch (action.benefit_id) {
        case BENEFITS.BENEFITS:
          return "eligible benefits";
        default:
          return state;
      }
    default:
      return state;
  }
};
