import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import { Primary } from "./EmailPrint.stories";

it("renders EmailPrint in its primary state", () => {
  render(<Primary {...Primary.args} />);
  const emailText = screen.getByText(Primary.args.emailText);
  const printText = screen.getByText(Primary.args.printText);
  expect(emailText).toBeTruthy();
  expect(printText).toBeTruthy();

  const iconEmail = document.getElementsByTagName("span")[0];
  const iconPrint = document.getElementsByTagName("span")[1];
  expect(iconEmail.classList).toContain("icon-envelop");
  expect(iconPrint.classList).toContain("icon-printer");
});
