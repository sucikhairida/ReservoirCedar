// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders ReservoirCedar title', () => {
    render(<App />);
    const titleElement = screen.getByText(/ReservoirCedar/i);
    expect(titleElement).toBeInTheDocument();
});
