import React, { useEffect, useState } from 'react';

import PropTypes from 'prop-types';
import { Select } from 'antd';
import { Text } from 'components/shared-styled-comp/shared-styled-comp';
import axios from 'axios';

const { Option } = Select;

/**
 * Keyword Component
 * This component allows users to search and select keywords.
 *
 * @param {function} setSelectedKeyword - Function to set the selected keywords.
 * @param {Array} selectedKeyword - Array of selected keywords.
 * @returns {JSX.Element} JSX element representing the Keyword component.
 */
export default function Keyword({ setSelectedKeyword, selectedKeyword }) {
  const [searchVal, setSearchVal] = useState('');
  const [results, setResults] = useState([]);

  /**
   * Handles the search of a keyword.
   * @param {object} e - Event object.
   */
  const handleSearch = () => {
    const apiKey = '4db3b4ee5893cead9657d41699ec4c26';
    const URL = `https://api.themoviedb.org/3/search/keyword?api_key=${apiKey}`;
    const params = {
      query: searchVal,
      page: 1,
    };
    axios
      .get(URL, { params })
      .then(({ data }) => {
        setResults(data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    const interval = setTimeout(() => {
      handleSearch();
    }, 500);
    return () => clearTimeout(interval);
  }, [searchVal]);

  return (
    <div>
      <Text> Keywords</Text>
      <Select
        mode="multiple"
        placeholder="Keyword"
        value={selectedKeyword}
        onChange={setSelectedKeyword}
        onSearch={setSearchVal}
        optionFilterProp="children"
        style={{
          width: '100%',
        }}
        data-testid="keyword"
      >
        {results.map((keyword) => (
          <Option key={keyword.id} value={keyword.id}>
            {keyword.name}
          </Option>
        ))}
      </Select>
    </div>
  );
}
Keyword.propTypes = {
  setSelectedKeyword: PropTypes.func,
  selectedKeyword: PropTypes.arrayOf(PropTypes.string),
};
Keyword.defaultProps = {
  setSelectedKeyword: () => {},
  selectedKeyword: [],
};
