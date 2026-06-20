import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import TodoItem from "../components/TodoItem";

const sampleTodo = {
  id: 1,
  title: "Buy milk",
  details: "Two liters",
  done: false,
};

describe("TodoItem component", () => {
  it("shows the task title and details", () => {
    render(<TodoItem todo={sampleTodo} onDelete={() => {}} onToggle={() => {}} />);
    expect(screen.getByText("Buy milk")).toBeInTheDocument();
    expect(screen.getByText("Two liters")).toBeInTheDocument();
  });

  it("shows Complete button for an active task", () => {
    render(<TodoItem todo={sampleTodo} onDelete={() => {}} onToggle={() => {}} />);
    expect(screen.getByRole("button", { name: /mark task buy milk as complete/i })).toBeInTheDocument();
  });

  it("shows Undo button for a completed task", () => {
    const doneTodo = { ...sampleTodo, done: true };
    render(<TodoItem todo={doneTodo} onDelete={() => {}} onToggle={() => {}} />);
    expect(screen.getByText("Undo")).toBeInTheDocument();
  });

  it("calls onToggle when the toggle button is clicked", async () => {
    const handleToggle = vi.fn();
    render(<TodoItem todo={sampleTodo} onDelete={() => {}} onToggle={handleToggle} />);
    await userEvent.click(screen.getByText("Complete"));
    expect(handleToggle).toHaveBeenCalledWith(1);
  });

  it("calls onDelete when the delete button is clicked", async () => {
    const handleDelete = vi.fn();
    render(<TodoItem todo={sampleTodo} onDelete={handleDelete} onToggle={() => {}} />);
    await userEvent.click(screen.getByText("Delete"));
    expect(handleDelete).toHaveBeenCalledWith(1);
  });
});