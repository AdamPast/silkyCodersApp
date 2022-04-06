import { fireEvent, getByDisplayValue, render, screen, getByText } from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect"
import userEvent from "@testing-library/user-event"
import App from './App';

test('renders component', async() => {
    const { getByText } = render(<App/>)
    expect(getByText('Przelicznik temperatur')).toBeInTheDocument()
});

