import React, { useEffect, useState } from 'react';

import PropTypes from 'prop-types';
import { Select } from 'antd';
import { Text } from 'components/shared-styled-comp/shared-styled-comp';
import fetchDataFromApi from 'utils/function';

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
  const [ErrorMessage, setErrorMessage] = useState(null);

  /**
   * Handles the search of a keyword.
   * @param {object} e - Event object.
   */
  const handleSearch = async () => {
    const params = {
      query: searchVal,
      page: 1,
    };
    const fetchedData = await fetchDataFromApi(
      'search/keyword',
      'results',
      params,
    );
    if (fetchedData.name === 'AxiosError') {
      setErrorMessage(fetchedData.message);
    } else {
      setResults(fetchedData);
    }
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
        {results &&
          !ErrorMessage &&
          results.map((keyword) => (
            <Option key={keyword.id} value={keyword.id}>
              {keyword.name}
            </Option>
          ))}
        {ErrorMessage && <div> {ErrorMessage}</div>}
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
