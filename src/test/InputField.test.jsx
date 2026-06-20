import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import InputField from "../components/InputField";

describe("InputField component", () => {
  it("renders label linked to input", () => {
    render(<InputField id="my-field" label="Username" value="" onChange={() => {}} />);
    const input = screen.getByLabelText("Username");
    expect(input).toBeInTheDocument();
  });

  it("shows the current value", () => {
    render(<InputField id="my-field" label="Username" value="Karim" onChange={() => {}} />);
    expect(screen.getByLabelText("Username")).toHaveValue("Karim");
  });

  it("calls onChange when typing", async () => {
    const handleChange = vi.fn();
    render(<InputField id="my-field" label="Username" value="" onChange={handleChange} />);
    await userEvent.type(screen.getByLabelText("Username"), "a");
    expect(handleChange).toHaveBeenCalled();
  });

  it("displays the placeholder", () => {
    render(
      <InputField id="my-field" label="Username" value="" onChange={() => {}} placeholder="Enter name" />
    );
    expect(screen.getByPlaceholderText("Enter name")).toBeInTheDocument();
  });
});