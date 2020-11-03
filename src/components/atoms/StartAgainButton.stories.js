import React from "react";
import { StartAgainButton } from "./StartAgainButton";

export default {
  title: "Components/Atoms/StartAgainButton",
  component: StartAgainButton,
};

const Template = (args) => <StartAgainButton {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  text: "Start again and clear answers",
  icon: "icon-loop2",
};
