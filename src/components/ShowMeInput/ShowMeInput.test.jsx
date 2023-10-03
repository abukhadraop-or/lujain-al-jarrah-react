import { render, screen } from '@testing-library/react';

import React from 'react';
import ShowMeInput from './ShowMeInput';

const { getByText, getByLabelText } = screen;

describe('ShowMeInput Component', () => {
  const data = [
    { id: 'every_thing', label: 'Movies I Have Seen', value: 0 },
    { id: 'seen', label: 'Everything', value: 1 },
    { id: 'not_seen', label: 'Movies I Have not Seen', value: 2 },
  ];

  test('renders ShowMeInput component with correct label and radio options', () => {
    render(<ShowMeInput />);

    expect(getByText('Show Me')).toBeInTheDocument();

    data.forEach((item) => {
      const radioElement = getByLabelText(item.label);
      expect(radioElement).toBeInTheDocument();
      expect(radioElement).toHaveAttribute('type', 'radio');
      expect(radioElement).toHaveAttribute('id', `${item.id}`);
      expect(radioElement).toHaveAttribute('name', 'show_me');
      expect(radioElement).toHaveAttribute('value', `${item.value}`);
    });
  });
});
