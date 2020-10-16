import React from "react";
import { ActionButton } from "./ActionButton";

export default {
  title: "Components/Atoms/ActionButton",
  component: ActionButton,
};

const Template = (args) => <ActionButton {...args} />;

export const Primary = Template.bind({});
export const Rounded = Template.bind({});

Primary.args = {
  text: "Example Action 🚀",
};

Rounded.args = {
  text: "Example Rounded Action 🚀",
  rounded: true,
};
