import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Login from './src/pages/Login';

test("muestra un saludo con el nombre proporcionado", () => {
  render(<Login />);
  expect(screen.getByText("Bienvenido a Dev's Memes")).toBeInTheDocument();
});
