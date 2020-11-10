import React from "react";
import { StartAgainButton } from "./StartAgainButton";

export default {
  title: "Components/Atoms/StartAgainButton",
  component: StartAgainButton,
};

const Template = (args) => <StartAgainButton {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  notRound: true,
  buttonText: "Start again and clear answers",
  icon: <span className="icon-loop2 my-1 mr-4" />,
};
