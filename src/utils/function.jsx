import axios from 'axios';

/**
 * Function to fetch data from an API and set the data using the provided callback.
 *
 * @param {string} apiUrl - The endpoint URL of the API.
 * @param {string} [key] - Optional parameter to specify nested data object key if present.
 */
const fetchDataFromApi = async (apiUrl, key, params) => {
  const url = `${process.env.REACT_APP_BASE_URL}${apiUrl}?api_key=${process.env.REACT_APP_API_KEY}`;
  try {
    const response = await axios.get(url, { params });
    return key ? response.data[key] : response.data;
  } catch (err) {
    console.log(err);
    return err;
  }
};

export default fetchDataFromApi;
