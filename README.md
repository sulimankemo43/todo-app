# My Todos

A simple, accessible, and responsive To-Do list application built with React. Users can add, delete, and mark tasks as complete, with full keyboard and screen reader support.

## Live Demo

[View the live app on Vercel](https://todo-app-ruby-pi-37.vercel.app)

## Features

- **Add tasks** with a name and an optional description
- **Delete tasks** from the list
- **Mark tasks complete** with a visual strike-through, and undo to make them active again
- **Input validation** with clear error messages (empty names and overly long names are rejected)
- **Responsive design** that works on desktop, tablet, and mobile
- **Accessible**: keyboard navigable, semantic HTML, ARIA labels, and visible focus states
- **Progressive Web App (PWA)**: installable and works offline

## Tech Stack

- React (with Vite)
- Plain CSS (no UI libraries)
- Vitest and React Testing Library for testing
- vite-plugin-pwa for PWA support

## Getting Started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open the URL shown in the terminal (usually `http://localhost:5173`).

## Testing

Run the test suite:

```bash
npm test
```

Run tests with a coverage report:

```bash
npm run coverage
```

The project has over 90% test coverage across all components.

## Building for Production

```bash
npm run build
npm run preview
```

## Project Structure

```
src/
  components/      Reusable UI components (Button, InputField, TodoItem, AddTodoForm)
  test/            Unit and integration tests
  App.jsx          Main application logic and state
  main.jsx         Application entry point
  index.css        Global styles
```