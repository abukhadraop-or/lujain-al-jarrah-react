/* eslint-disable no-undef */
import { render, screen } from '@testing-library/react';

import LanguageInput from 'components/LanguageInput/LanguageInput';
import React from 'react';

const { getByText, queryByText } = screen;

describe('LanguageInput Component', () => {
  const sampleLangData = [
    { iso_639_1: 'en', english_name: 'English' },
    { iso_639_1: 'es', english_name: 'Spanish' },
  ];

  it('renders LanguageInput component with provided language options', () => {
    render(<LanguageInput lang={sampleLangData} />);

    expect(getByText('Languages')).toBeInTheDocument();
    expect(getByText('English')).toBeInTheDocument();
    expect(getByText('Spanish')).toBeInTheDocument();
  });

  it('renders LanguageInput component with empty language options', () => {
    render(<LanguageInput lang={[]} />);

    expect(getByText('Languages')).toBeInTheDocument();
    expect(queryByText('English')).not.toBeInTheDocument();
    expect(queryByText('Spanish')).not.toBeInTheDocument();
  });
});
