import React from "react";
import { ActionButton } from "./ActionButton";
import { FilteredBenefitsCounter } from "./FilteredBenefitsCounter";

export default {
  title: "Components/Atoms/ActionButton",
  component: ActionButton,
};

const Template = (args) => <ActionButton {...args} />;

export const Primary = Template.bind({});
export const Rounded = Template.bind({});
export const WithCounter = Template.bind({});
export const StartAgain = Template.bind({});
export const Selected = Template.bind({});

Primary.args = {
  text: "Example Action 🚀",
};

Rounded.args = {
  text: "Example Rounded Action 🚀",
  rounded: true,
};

WithCounter.args = {
  text: "Example With Counter",
  children: <FilteredBenefitsCounter count={10} />,
  className:
    "bg-white text-text-gray-dk border border-gray-md hover:bg-bg-gray-dk hover:text-white focus:bg-bg-gray-dk focus:text-white",
};

StartAgain.args = {
  notRound: true,
  className: "bg-bg-gray-dk text-white",
  icon: "icon-loop2 my-1 mr-4",
  text: "Start again and clear answers",
};
