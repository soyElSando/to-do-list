import { render, screen } from '@testing-library/react';
import {App} from './App';
import {mock} from "./MockTasks";

test('renders header', () => {
  render(<App />);
  const header = screen.getByText("Lista de tareas");
  expect(header).toBeInTheDocument();
});


test('renders tareas', () => {
  render(<App />);
  const tasks = screen.getByText(mock[0]);
  expect(tasks).toBeInTheDocument();
});