import { GET_ELIGIBLE_BENEFIT } from "./actionTypes";

export const BENEFITS = {
  benefits: [],
};

export const eligibleBenefitCreator = function (benefit_id) {
  return {
    type: GET_ELIGIBLE_BENEFIT,
    benefit_id,
  };
};
