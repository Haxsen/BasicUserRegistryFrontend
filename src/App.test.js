import { render, screen } from '@testing-library/react';
import { fireEvent } from '@testing-library/react';
import { waitFor } from '@testing-library/react';
import { worker } from './mocks/browser';
import React from 'react';
import App from './App';
import mockAxios from 'jest-mock-axios';

beforeAll(() => {
  worker.start();
});

afterAll(() => {
  worker.stop();
});


test('renders User Registry link', () => {
  render(<App />);
  const linkElement = screen.getByText(/User Registry/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders form elements', () => {
  render(<App />);
  const inputElement = screen.getByLabelText('Username:');
  const buttonElement = screen.getByText('Register');
  expect(inputElement).toBeInTheDocument();
  expect(buttonElement).toBeInTheDocument();
});

test('input field updates when user types', () => {
  render(<App />);
  const inputElement = screen.getByLabelText('Username:');
  fireEvent.change(inputElement, { target: { value: 'test-user' } });
  expect(inputElement).toHaveValue('test-user');
});

test('form submits correctly when register button is clicked', async () => {
  render(<App />);
  const buttonElement = screen.getByText('Register');
  fireEvent.click(buttonElement);

  // Mock the API response
  mockAxios.post.mockResolvedValueOnce({ data: { success: true } });

  await waitFor(() => screen.getByText("User registered successfully!"));
  expect(screen.getByText("User registered successfully!")).toBeInTheDocument();
});

afterEach(() => {
  mockAxios.reset();
});