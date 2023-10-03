import { fireEvent, render, screen } from '@testing-library/react';

import GenreInput from 'components/GenreInput/GenreInput';
import React from 'react';

const { getByText } = screen;

describe('GenreInput', () => {
  const genres = [
    { id: 1, name: 'Action' },
    { id: 2, name: 'Comedy' },
  ];

  test('renders correctly', () => {
    render(
      <GenreInput
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

  test('Add Id to array when select the button', () => {
    const setSelectedGenresMock = jest.fn();
    const initialSelectedGenres = [];
    render(
      <GenreInput
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

  test('Remove Id to array when deselect the button', () => {
    const setSelectedGenresMock = jest.fn();
    const initialSelectedGenres = ['1'];
    render(
      <GenreInput
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
