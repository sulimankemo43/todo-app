import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import AddTodoForm from "../components/AddTodoForm";

describe("AddTodoForm component", () => {
  it("renders both input fields and the submit button", () => {
    render(<AddTodoForm onAdd={() => {}} />);
    expect(screen.getByLabelText("Name")).toBeInTheDocument();
    expect(screen.getByLabelText("Description")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Add Todo" })).toBeInTheDocument();
  });

  it("calls onAdd with the entered values", async () => {
    const handleAdd = vi.fn();
    render(<AddTodoForm onAdd={handleAdd} />);

    await userEvent.type(screen.getByLabelText("Name"), "Read book");
    await userEvent.type(screen.getByLabelText("Description"), "Chapter 3");
    await userEvent.click(screen.getByRole("button", { name: "Add Todo" }));

    expect(handleAdd).toHaveBeenCalledWith("Read book", "Chapter 3");
  });

  it("clears the inputs after a successful add", async () => {
    render(<AddTodoForm onAdd={() => {}} />);

    const nameInput = screen.getByLabelText("Name");
    await userEvent.type(nameInput, "Some task");
    await userEvent.click(screen.getByRole("button", { name: "Add Todo" }));

    expect(nameInput).toHaveValue("");
  });

  it("shows an error and does not call onAdd when name is empty", async () => {
    const handleAdd = vi.fn();
    render(<AddTodoForm onAdd={handleAdd} />);

    await userEvent.click(screen.getByRole("button", { name: "Add Todo" }));

    expect(screen.getByRole("alert")).toHaveTextContent("Task name is required.");
    expect(handleAdd).not.toHaveBeenCalled();
  });

  it("rejects a name that is only spaces", async () => {
    const handleAdd = vi.fn();
    render(<AddTodoForm onAdd={handleAdd} />);

    await userEvent.type(screen.getByLabelText("Name"), "   ");
    await userEvent.click(screen.getByRole("button", { name: "Add Todo" }));

    expect(screen.getByRole("alert")).toBeInTheDocument();
    expect(handleAdd).not.toHaveBeenCalled();
  });

  it("rejects a name longer than 60 characters", async () => {
    const handleAdd = vi.fn();
    render(<AddTodoForm onAdd={handleAdd} />);

    const longName = "a".repeat(61);
    await userEvent.type(screen.getByLabelText("Name"), longName);
    await userEvent.click(screen.getByRole("button", { name: "Add Todo" }));

    expect(screen.getByRole("alert")).toHaveTextContent(/60 characters or fewer/i);
    expect(handleAdd).not.toHaveBeenCalled();
  });
});