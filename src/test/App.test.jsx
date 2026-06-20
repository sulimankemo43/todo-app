import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "../App";

async function addTask(name, details) {
  await userEvent.type(screen.getByLabelText("Name"), name);
  if (details) {
    await userEvent.type(screen.getByLabelText("Description"), details);
  }
  await userEvent.click(screen.getByRole("button", { name: "Add Todo" }));
}

describe("App integration", () => {
  it("shows an empty message when there are no tasks", () => {
    render(<App />);
    expect(screen.getByText(/no tasks yet/i)).toBeInTheDocument();
  });

  it("adds a new task to the list", async () => {
    render(<App />);
    await addTask("Walk the dog", "Evening");

    expect(screen.getByText("Walk the dog")).toBeInTheDocument();
    expect(screen.getByText("Evening")).toBeInTheDocument();
  });

  it("deletes a task from the list", async () => {
    render(<App />);
    await addTask("Task to remove");

    await userEvent.click(screen.getByRole("button", { name: /delete task task to remove/i }));

    expect(screen.queryByText("Task to remove")).not.toBeInTheDocument();
  });

  it("marks a task as complete and back to active", async () => {
    render(<App />);
    await addTask("Toggle me");

    await userEvent.click(screen.getByRole("button", { name: /mark task toggle me as complete/i }));
    expect(screen.getByText("Undo")).toBeInTheDocument();

    await userEvent.click(screen.getByRole("button", { name: /mark task toggle me as active/i }));
    expect(screen.getByText("Complete")).toBeInTheDocument();
  });

  it("keeps other tasks when one is deleted", async () => {
    render(<App />);
    await addTask("First task");
    await addTask("Second task");

    await userEvent.click(screen.getByRole("button", { name: /delete task first task/i }));

    expect(screen.queryByText("First task")).not.toBeInTheDocument();
    expect(screen.getByText("Second task")).toBeInTheDocument();
  });
});