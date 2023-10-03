import { fireEvent, render, screen } from '@testing-library/react';

import React from 'react';
import SearchAllAvailableInput from './SearchAllAvailableInput';

const { getByText, getByTestId } = screen;
describe('SearchAllAvailableInput', () => {
  test('renders correctly', () => {
    render(
      <SearchAllAvailableInput
        setAvailabilities={() => {}}
        availabilities={[]}
      />,
    );
    const allCheckbox = getByText('Search all availabilities?');
    expect(allCheckbox).toBeInTheDocument();
  });

  test('toggles searchAllActive state when "Search all availabilities?" checkbox is clicked', () => {
    render(
      <SearchAllAvailableInput
        setAvailabilities={() => {}}
        availabilities={[]}
      />,
    );
    const allCheckbox = getByText('Search all availabilities?');
    fireEvent.click(allCheckbox);
    expect(allCheckbox).not.toBeChecked();
  });

  test('calls changeAvailabilities function when availability checkboxes are clicked', () => {
    const setAvailabilitiesMock = jest.fn();
    render(
      <SearchAllAvailableInput
        setAvailabilities={setAvailabilitiesMock}
        availabilities={[]}
      />,
    );
    const allCheckbox = getByText('Search all availabilities?');
    fireEvent.click(allCheckbox);
    const checkboxFlatrate = getByTestId('checkbox-flatrate');
    expect(checkboxFlatrate).toBeInTheDocument();
  });
});
