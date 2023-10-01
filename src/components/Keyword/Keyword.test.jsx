import { render, screen } from '@testing-library/react';

import Keyword from 'components/Keyword/Keyword';
/* eslint-disable no-undef */
import React from 'react';

const { getByText } = screen;

describe('Keyword component', () => {
  test('renders the component', () => {
    render(<Keyword />);
    const TextElement = getByText('Keywords');
    expect(TextElement).toBeInTheDocument();
  });
});
