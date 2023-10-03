import { fireEvent, render, screen, waitFor } from '@testing-library/react';

/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import SidePanel from 'components/SidePanel/SidePanel';

const { getByText, getByLabelText } = screen;

describe('SidePanel', () => {
  const mockProps = {
    getMovies: jest.fn(),
    setSelectedGenres: jest.fn(),
    selectedGenres: [],
    setAvailabilities: jest.fn(),
    availabilities: [],
    setRelease: jest.fn(),
    release: [],
  };

  test('renders component with default values', () => {
    render(<SidePanel {...mockProps} />);
    expect(getByText('Sort')).toBeInTheDocument();
    expect(getByText('Filter')).toBeInTheDocument();
  });

  test('toggles content display when "Sort" is clicked', async () => {
    render(<SidePanel />);
    const sortButton = getByText('Sort');
    fireEvent.click(sortButton);

    const sortSelect = getByLabelText('Sort Results By');
    await waitFor(() => expect(sortSelect).toBeInTheDocument());
  });

  test('toggles content filter display when "Filter" is clicked', async () => {
    render(<SidePanel />);
    const filterButton = getByText('Filter');
    fireEvent.click(filterButton);

    const showMeRadio = getByLabelText('Movies I Have not Seen');
    await waitFor(() => expect(showMeRadio).toBeInTheDocument());
  });
});
