// Test away!
import React from 'react';
import { render } from 'react-testing-library';
import Display from './Display';

test('it renders', () => {
    render(<Display />);
});

test('it displays closed if closed prop is true', () => {
    const {getByText} = render(<Display closed={true}/>);
    getByText(/closed/i);
});

test('it displays open if closed prop is false', () => {
    const {getByText} = render(<Display closed={false}/>);
    getByText(/open/i);
});

test('it displays locked if locked prop is true', () => {
    const {getByText} = render(<Display locked={true}/>);
    getByText(/^locked/i);
});

test('it displays unlocked if locked prop is false', () => {
    const {getByText} = render(<Display locked={false}/>);
    getByText(/unlocked/i);
});