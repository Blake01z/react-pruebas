import { render, screen, fireEvent } from '@testing-library/react';
import ButtonCounter from './Testing';

describe('ButtonCounter', () => {
    test('renders button with label', () => {
        render(<ButtonCounter label="Click me" />);
        const buttonElement = screen.getByText(/Click me/i);
        expect(buttonElement).toBeInTheDocument();
    });

    test('increments count on button click', () => {
        render(<ButtonCounter label="Click me" />);
        const buttonElement = screen.getByText(/Click me/i);
        fireEvent.click(buttonElement);
        const countElement = screen.getByText(/Count: 1/i);
        expect(countElement).toBeInTheDocument();
    });

    test('initial count is 0', () => {
        render(<ButtonCounter label="Click me" />);
        const countElement = screen.getByText(/Count: 0/i);
        expect(countElement).toBeInTheDocument());
    });
});
