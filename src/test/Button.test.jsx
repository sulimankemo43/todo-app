import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Button from "../components/Button";

describe("Button component", () => {
  it("renders the label text", () => {
    render(<Button label="Click me" />);
    expect(screen.getByText("Click me")).toBeInTheDocument();
  });

  it("calls onClick when clicked", async () => {
    const handleClick = vi.fn();
    render(<Button label="Press" onClick={handleClick} />);
    await userEvent.click(screen.getByRole("button", { name: "Press" }));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it("uses ariaLabel when provided", () => {
    render(<Button label="X" ariaLabel="Close dialog" />);
    expect(screen.getByRole("button", { name: "Close dialog" })).toBeInTheDocument();
  });
});
