import React from "react";
import { EmailPrintButton } from "./EmailPrintButton";

export default {
  title: "Components/Atoms/EmailPrintButton",
  component: EmailPrintButton,
};

const Template = (args) => <EmailPrintButton {...args} />;

export const Email = Template.bind({});
export const Print = Template.bind({});

Email.args = {
  id: "email",
  icon: "icon-envelop",
  text: "Email",
};

Print.args = {
  id: "print",
  icon: "icon-printer",
  text: "Print",
};