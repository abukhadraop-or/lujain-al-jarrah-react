import { fireEvent, render, screen, waitFor } from '@testing-library/react';

import MovieList from 'components/MovieList/MovieList';
import React from 'react';
import axios from 'axios';

const { getByText } = screen;

jest.mock('axios');

describe('MovieList', () => {
  const mockMovies = [
    {
      id: 1,
      title: 'Movie 1',
      release_date: '2022-01-01',
      overview: 'Description 1',
      poster_path: '/path1.jpg',
    },
    {
      id: 2,
      title: 'Movie 2',
      release_date: '2022-02-15',
      overview: 'Description 2',
      poster_path: '/path2.jpg',
    },
  ];

  const mockSetMovies = jest.fn();
  const mockSetParams = jest.fn();
  const mockParams = {
    page: 1,
    region: 'US',
    'release_date.gte': '2022-01-01',
    'release_date.lte': '2022-12-31',
    show_me: 1,
    sort_by: 'popularity.desc',
    with_genres: '28,12,18',
    with_keywords: 'action',
    with_original_language: 'en',
    with_watch_monetization_types: 'subscription',
    with_release_type: 'theatrical',
  };

  test('loads more movies when button is clicked', async () => {
    const mockResponseData = {
      data: {
        results: mockMovies,
      },
    };
    axios.get.mockResolvedValueOnce(mockResponseData);

    render(
      <MovieList
        movies={mockMovies}
        setMovies={mockSetMovies}
        setParams={mockSetParams}
        params={mockParams}
      />,
    );

    fireEvent.click(getByText('Load more'));
    await waitFor(() => {}, { timeout: 100 });

    expect(axios.get).toHaveBeenCalledWith(
      expect.stringContaining(
        'https://api.themoviedb.org/3/discover/movie?api_key=',
      ),
      {
        params: {
          ...mockParams,
          page: 2,
        },
      },
    );
  });
});
