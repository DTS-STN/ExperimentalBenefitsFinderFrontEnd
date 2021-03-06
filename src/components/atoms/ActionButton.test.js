import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import {
  Primary,
  Rounded,
  WithCounter,
  StartAgain,
} from "./ActionButton.stories";

it("renders ActionButton in its primary state", () => {
  render(<Primary {...Primary.args} />);
  expect(screen.getByRole("button")).toHaveTextContent(Primary.args.text);
});

it("renders ActionButton in its rounded state", () => {
  render(<Rounded {...Rounded.args} />);
  expect(screen.getByRole("button")).toHaveTextContent(Rounded.args.text);
  expect(screen.getByRole("button").classList).toContain("rounded-full");
});

it("renders ActionButton in its withCounter state", () => {
  render(<WithCounter {...WithCounter.args} />);
  expect(screen.getByRole("button")).toHaveTextContent(WithCounter.args.text);
  expect(screen.getByRole("button").classList).toContain("bg-white");
});

it("renders StartAgainButton in its icon state", () => {
  render(<StartAgain {...StartAgain.args} />);
  expect(screen.getByText(StartAgain.args.text)).toBeTruthy();
  expect(document.getElementsByTagName("span")[0].classList).toContain(
    "icon-loop2"
  );
});
