import React from "react";
import { BenefitFilter } from "./BenefitFilter";

export default {
  title: "Components/molecules/BenefitFilter",
  component: BenefitFilter,
};

const Template = (args) => <BenefitFilter {...args} />;

export const Primary = Template.bind({});
export const Eligible = Template.bind({});
export const PotentialHelp = Template.bind({});
export const Others = Template.bind({});

Primary.args = {
  text: "Filter by",
  eligibleText: "Eligible benefits",
  helpText: "Potential help",
  othersText: "Others",
  eligibleCount: 15,
  helpCount: 8,
  othersCount: 30,
};

Eligible.args = {
  text: "Filter by",
  eligibleText: "Eligible benefits",
  helpText: "Potential help",
  othersText: "Others",
  eligibleCount: 15,
  helpCount: 8,
  othersCount: 30,
  isSelectedEligible: true,
  isSelectedHelp: false,
  isSelectedOthers: false,
};

PotentialHelp.args = {
  text: "Filter by",
  eligibleText: "Eligible benefits",
  helpText: "Potential help",
  othersText: "Others",
  eligibleCount: 15,
  helpCount: 8,
  othersCount: 30,
  isSelectedEligible: false,
  isSelectedHelp: true,
  isSelectedOthers: false,
};

Others.args = {
  text: "Filter by",
  eligibleText: "Eligible benefits",
  helpText: "Potential help",
  othersText: "Others",
  eligibleCount: 15,
  helpCount: 8,
  othersCount: 30,
  isSelectedEligible: false,
  isSelectedHelp: false,
  isSelectedOthers: true,
};
