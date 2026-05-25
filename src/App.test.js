import { render, screen, waitFor } from "@testing-library/react";
import App from "./App";

beforeEach(() => {
  localStorage.setItem("portfolio_locale", "en");
});

test("renders portfolio shell", async () => {
  render(<App />);
  await waitFor(
    () => {
      expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(
        /Bilal Alqatrawi/i
      );
    },
    { timeout: 8000 }
  );
}, 10000);
