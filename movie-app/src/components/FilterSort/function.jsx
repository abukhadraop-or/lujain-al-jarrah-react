import axios from "axios";
/**
 * Fetches movie genres from API.
 */
const getGenres = (setGenres) => {
  const apiKey = "4db3b4ee5893cead9657d41699ec4c26";
  const apiUrl = `https://api.themoviedb.org/3/genre/movie/list?language=en&api_key=${apiKey}`;
  axios
    .get(apiUrl)
    .then((response) => {
      setGenres(response.data.genres);
    })
    .catch((error) => {
      console.log(error);
    });
};
/**
 * Fetches available languages from API.
 */
const getLanguages = (setLang) => {
  const apiKey = "4db3b4ee5893cead9657d41699ec4c26";
  const apiUrl = `https://api.themoviedb.org/3/configuration/languages?api_key=${apiKey}`;
  axios.get(apiUrl).then((response) => {
    setLang(response.data);
  });
};
/**
 * Fetches available countries from API.
 */
const getCountry = (setCountry) => {
  const apiKey = "4db3b4ee5893cead9657d41699ec4c26";
  const apiUrl = `https://api.themoviedb.org/3/configuration/countries?language=en-US&api_key=${apiKey}`;
  axios.get(apiUrl).then((response) => {
    setCountry(response.data);
  });
};
/**
 * Handles availability search option change.
 * @param {object} e - Event object.
 */
const searchAllActiveHandler = (
  e,
  setSearchAllActive,
  searchAllActive,
  setAvailabilities,
) => {
  console.log(e.target.value);
  setSearchAllActive(!searchAllActive);
  if (e.target.value) {
    console.log("enter");
    setAvailabilities([]);
  }
};
/**
 * Handles the change of release search option.
 * @param {object} e - Event object.
 */
const searchAllReleaseHandler = (
  e,
  setSearchAllRelease,
  searchAllRelease,
  setRelease,
) => {
  console.log(e.target.value);
  setSearchAllRelease(!searchAllRelease);
  if (e.target.value) {
    console.log("enter");
    setRelease([]);
  }
};
/**
 * Handles the change of country search option.
 * @param {object} e - Event object.
 */
const searchAllCountryHandler = (e, setSearchAllCountry, searchAllCountry) => {
  console.log(e.target.value);
  setSearchAllCountry(!searchAllCountry);
  // if (e.target.value) {
  //   console.log("enter");
  //   setRelease([]);
  // }
};
/**
 * Toggles the display of the content filter and fetches genres, languages, and countries.
 * @param {object} e - Event object.
 */
const showContentFilter = (
  e,
  setIsActiveFilter,
  setGenres,
  setLang,
  setCountry,
) => {
  e.preventDefault();
  setIsActiveFilter((prevIsActive) => !prevIsActive);
  getGenres(setGenres);
  getLanguages(setLang);
  getCountry(setCountry);
};
/**
 * Adds or removes a genre to/from the selected genres list.
 * @param {object} e - Event object.
 */
const addGenres = (e, setSelectedGenres, selectedGenres) => {
  e.preventDefault();
  if (selectedGenres.includes(e.target.value)) {
    setSelectedGenres((prev) =>
      prev.filter((genre) => genre !== e.target.value),
    );
  } else {
    setSelectedGenres((prev) => [...prev, e.target.value]);
  }
  console.log(selectedGenres);
};
/**
 * Toggles the display of the content.
 * @param {object} e - Event object.
 */
const showContent = (e, setIsActive, isActive) => {
  e.preventDefault();
  setIsActive(!isActive);
};
/**
 * Handles the change of availabilities selection.
 * @param {object} e - Event object.
 */
const changeAvailabilities = (e, setAvailabilities, availabilities) => {
  if (availabilities.includes(e.target.value)) {
    setAvailabilities((prev) =>
      prev.filter((availability) => availability !== e.target.value),
    );
  } else {
    setAvailabilities((prev) => [...prev, e.target.value]);
  }

  // console.log(availabilities);
};
/**
 * Handles the change of release type selection.
 * @param {object} e - Event object.
 */
const changeRelease = (e, setRelease, release) => {
  console.log(e.target.value);
  if (release.includes(e.target.value)) {
    setRelease((prev) => prev.filter((rel) => rel !== e.target.value));
  } else {
    setRelease((prev) => [...prev, e.target.value]);
  }
};

export {
  searchAllActiveHandler,
  searchAllReleaseHandler,
  searchAllCountryHandler,
  showContentFilter,
  addGenres,
  showContent,
  changeAvailabilities,
  changeRelease,
};
