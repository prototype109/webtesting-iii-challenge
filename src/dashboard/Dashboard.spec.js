import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, fireEvent } from '@testing-library/react';
import Dashboard from './Dashboard';

test('it renders', () => {
    render(<Dashboard />);
});

test('it checks the state of the door when "close gate" button clicked', () => {

    const {getByText} = render(<Dashboard />);

    getByText(/close gate/i);

    fireEvent.click(getByText(/close gate/i));

    getByText(/open gate/i);
});

test('it checks the state of the door when "lock gate" button clicked', () => {

        const {getByText} = render(<Dashboard />);
        getByText(/close gate/i);
    
        fireEvent.click(getByText(/close gate/i));
    
        getByText(/lock gate/i);

        fireEvent.click(getByText(/lock gate/i));

        getByText(/unlock gate/i);
});

test('it checks if gate can be cannot be opened or closed when locked', () => {

    const {getByText, queryByText} = render(<Dashboard />);
    getByText(/close gate/i);

    fireEvent.click(getByText(/close gate/i));

    getByText(/lock gate/i);

    fireEvent.click(getByText(/lock gate/i));

    expect(queryByText(/close gate/i)).toBe(null);

    expect(getByText(/open gate/i)).not.toBeDisabled();
});