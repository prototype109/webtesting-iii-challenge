import React from 'react';
import { render, fireEvent } from 'react-testing-library';
import Dashboard from './Dashboard';

test('it renders', () => {
    render(<Dashboard />);
});

// test('it has a default state where gate unlocked and open', () => {
//     const {getByText} = render(<Dashboard />);
//     getByText(/help/i);
//     getByText(/open/i);
// });

// test('it cannot be opened when locked', () => {
//     const {getByText} = render(<Dashboard />);
//     fireEvent.click(getByText(/close gate/i));
//     fireEvent.click(getByText(/lock gate/i));
//     fireEvent.click(getByText(/open gate/i));
// });