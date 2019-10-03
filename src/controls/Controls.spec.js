import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, fireEvent } from '@testing-library/react';
import Controls from './Controls';

test('it renders', () => {
    render(<Controls />);
});

test('lock gate is disable when gate is open', () => {
    const {getByText} = render(<Controls />);
    expect(getByText(/lock gate/i)).toHaveAttribute('disabled');
});

test('open gate is disable when gate is locked', () => {
    const {getByText} = render(<Controls locked={true} closed={true}/>);
    expect(getByText(/open gate/i)).toHaveAttribute('disabled');
});