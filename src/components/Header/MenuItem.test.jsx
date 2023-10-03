import { fireEvent, render, screen } from '@testing-library/react';

import React from 'react';
import MenuItem from './MenuItem';

/* eslint-disable react/jsx-boolean-value */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-undef */

const { getByText, queryByText } = screen;

describe('MenuItem', () => {
  const mockMenuItem = {
    title: 'Menu Title',
    subMenuItems: ['Item 1', 'Item 2', 'Item 3'],
    isOpen: false,
    onClick: jest.fn(),
  };

  test('renders menu item with closed submenu', () => {
    render(<MenuItem {...mockMenuItem} />);

    expect(getByText('Menu Title')).toBeInTheDocument();
    expect(queryByText('Item 1')).toBeNull();
    expect(queryByText('Item 2')).toBeNull();
    expect(queryByText('Item 3')).toBeNull();
  });

  test('renders menu item with open submenu', () => {
    render(<MenuItem {...mockMenuItem} isOpen={true} />);

    expect(getByText('Menu Title')).toBeInTheDocument();
    expect(getByText('Item 1')).toBeInTheDocument();
    expect(getByText('Item 2')).toBeInTheDocument();
    expect(getByText('Item 3')).toBeInTheDocument();
  });

  test('calls onClick when menu item is clicked', () => {
    render(<MenuItem {...mockMenuItem} />);

    fireEvent.click(getByText('Menu Title'));
    expect(mockMenuItem.onClick).toHaveBeenCalledTimes(1);
  });
});
