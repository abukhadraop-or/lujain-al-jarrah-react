import axios from 'axios';

/**
 * Function to fetch data from an API and set the data using the provided callback.
 *
 * @param {string} apiUrl - The endpoint URL of the API.
 * @param {Function} setData - The callback function to set the fetched data.
 * @param {string} [key] - Optional parameter to specify nested data object key if present.
 */
const fetchDataFromApi = (apiUrl, setData, key) => {
  const Url = `${process.env.REACT_APP_BASE_URL}${apiUrl}?api_key=${process.env.REACT_APP_API_KEY}`;
  axios
    .get(Url)
    .then(({ data }) => {
      setData(key ? data[key] : data);
    })
    .catch((error) => {
      console.error(`Error fetching data from API: ${error.message}`);
    });
};

/**
 * Function to fetch data from an API with query parameters and append it to existing data using the provided callback.
 *
 * @param {string} apiUrl - The endpoint URL of the API.
 * @param {Function} setData - The callback function to set the fetched data.
 * @param {Object} params - Query parameters to be included in the API request.
 */
const fetchDataFromApiList = (apiUrl, setData, params) => {
  const Url = `${process.env.REACT_APP_BASE_URL}${apiUrl}?api_key=${process.env.REACT_APP_API_KEY}`;
  axios
    .get(Url, { params })
    .then(({ data }) => {
      setData((prev) => [...prev, ...data.results]);
    })
    .catch((error) => {
      console.error(`Error fetching data from API: ${error.message}`);
    });
};

export { fetchDataFromApi, fetchDataFromApiList };
