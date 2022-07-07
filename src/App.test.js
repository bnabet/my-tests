import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
  render(<App />);
  const alertButton = screen.getByTestId("alert-button");

  screen.debug(alertButton);
});
