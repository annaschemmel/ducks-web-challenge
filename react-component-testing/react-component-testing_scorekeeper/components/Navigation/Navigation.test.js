import { render, screen } from "@testing-library/react";
import Navigation from ".";

jest.mock("next/router", () => ({
  useRouter() {
    return { pathname: jest.fn() };
  },
}));

test("renders with two links 'Play' and 'History'", () => {
  render(<Navigation players={[]} />);
  const PlayLink = screen.getByRole("link", { name: "Play" });
  const HistoryLink = screen.getByRole("link", { name: "History" });
  expect(PlayLink).toBeInTheDocument();
  expect(HistoryLink).toBeInTheDocument();
});
