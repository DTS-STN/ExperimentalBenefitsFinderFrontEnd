import { ACTION_TYPES as LANGUAGE_ACTION_TYPES } from "./language";
import { ACTION_TYPES as BENEFIT_ACTION_TYPES } from "./benefits";

export const ACTION_TYPES = {
  ...LANGUAGE_ACTION_TYPES,
  ...BENEFIT_ACTION_TYPES,
};

export { LANGUAGES, changeLanguageCreator } from "./language";
export { BENEFITS, eligibleBenefitCreator } from "./benefits";
