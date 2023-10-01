import { render, screen } from '@testing-library/react';

/* eslint-disable no-undef */
import React from 'react';
import Sort from 'components/Sort/Sort';

const { getByText, getByLabelText } = screen;
describe('Sort', () => {
  it('renders correctly', () => {
    render(<Sort />);

    const sortLabel = getByText('Sort');
    expect(sortLabel).toBeInTheDocument();

    const sortDropdown = getByLabelText('Sort Results By');
    expect(sortDropdown).toBeInTheDocument();
  });
});
