import { fireEvent, render, screen } from '@testing-library/react';

/* eslint-disable no-undef */
import React from 'react';
import ReleaseDateInput from './ReleaseDateInput';

const { getByText, getByLabelText, getByTestId } = screen;

describe('ReleaseDateInput', () => {
  const countryData = [
    { iso_3166_1: 'US', english_name: 'United States' },
    { iso_3166_1: 'CA', english_name: 'Canada' },
  ];

  const mockSetRelease = jest.fn();

  test('renders correctly', () => {
    render(
      <ReleaseDateInput
        country={countryData}
        setRelease={mockSetRelease}
        release={[]}
      />,
    );

    const releaseDatesText = getByText('Release Dates');
    const searchAllReleasesCheckbox = getByLabelText('Search all releases?');
    expect(releaseDatesText).toBeInTheDocument();
    expect(searchAllReleasesCheckbox).toBeInTheDocument();
  });

  test('triggers searchAllReleaseHandler when Search all releases? checkbox is clicked', () => {
    render(
      <ReleaseDateInput
        country={countryData}
        setRelease={mockSetRelease}
        release={[]}
      />,
    );

    const searchAllReleasesCheckbox = getByLabelText('Search all releases?');
    fireEvent.click(searchAllReleasesCheckbox);

    expect(mockSetRelease).toHaveBeenCalledWith([]);
  });

  test('triggers searchAllCountryHandler when Search all countries? checkbox is clicked', () => {
    render(
      <ReleaseDateInput
        country={countryData}
        setRelease={mockSetRelease}
        release={[]}
      />,
    );
    const searchAllReleasesCheckbox = getByLabelText('Search all releases?');
    fireEvent.click(searchAllReleasesCheckbox);
    const searchAllCountriesCheckbox = getByTestId('country');
    fireEvent.click(searchAllCountriesCheckbox);

    expect(searchAllCountriesCheckbox.checked).toBe(false);
  });
});
