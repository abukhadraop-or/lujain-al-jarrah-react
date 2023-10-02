import { fireEvent, render, screen } from '@testing-library/react';

import GenereInput from 'components/GenereInput/GenereInput';
/* eslint-disable no-undef */
import React from 'react';

const { getByText } = screen;

describe('GenereInput', () => {
  const genres = [
    { id: 1, name: 'Action' },
    { id: 2, name: 'Comedy' },
  ];
  it('renders correctly', () => {
    render(
      <GenereInput
        setSelectedGenres={() => {}}
        selectedGenres={[]}
        genres={genres}
      />,
    );

    genres.forEach((genre) => {
      const genreButton = getByText(genre.name);
      expect(genreButton).toBeInTheDocument();
    });
  });

  it('Add Id to array when select the button', () => {
    const setSelectedGenresMock = jest.fn();
    const initialSelectedGenres = [];
    render(
      <GenereInput
        setSelectedGenres={setSelectedGenresMock}
        selectedGenres={initialSelectedGenres}
        genres={genres}
      />,
    );

    const genreButton = getByText('Action');
    expect(genreButton).toBeInTheDocument();

    fireEvent.click(genreButton);

    const myFunction = setSelectedGenresMock.mock.calls[0][0];
    const result = myFunction(initialSelectedGenres);
    expect(result).toEqual(['1']);
  });

  it('Remove Id to array when deselect the button', () => {
    const setSelectedGenresMock = jest.fn();
    const initialSelectedGenres = ['1'];
    render(
      <GenereInput
        setSelectedGenres={setSelectedGenresMock}
        selectedGenres={initialSelectedGenres}
        genres={genres}
      />,
    );

    const genreButton = getByText('Action');
    expect(genreButton).toBeInTheDocument();

    fireEvent.click(genreButton);

    const myFunction = setSelectedGenresMock.mock.calls[0][0];
    const result = myFunction(initialSelectedGenres);
    expect(result).toEqual([]);
  });
});
