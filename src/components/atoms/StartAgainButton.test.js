import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import { Primary } from "./StartAgainButton.stories";

it("renders StartAgainButton in its primary state", () => {
  render(<Primary {...Primary.args} />);
  const buttonText = screen.getByText(Primary.args.buttonText);
  expect(buttonText).toBeTruthy();

  const iconLoop = document.getElementsByTagName("span")[0];
  expect(iconLoop.classList).toContain("icon-loop2");
});
