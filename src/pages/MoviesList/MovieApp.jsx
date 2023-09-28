/* eslint-disable prefer-const */
import React, { useEffect, useState } from "react";
import MovieList from "components/MovieList/MovieList";
import Footer from "components/Footer/Footer";
import SidePanel from "components/SidePanel/SidePanel";
import { Container } from "pages/MoviesList/styles";
import axios from "axios";
import Header from "components/Header/Header";
/**
 * MovieApp Component
 * Main component that represents the movie application.
 */
export default function MovieApp() {
  const [movies, setMovies] = useState([]);
  const [selectedGenres, setSelectedGenres] = useState([]);
  const [availabilities, setAvailabilities] = useState([]);
  const [selectedKeyword, setSelectedKeyword] = useState([]);

  const [release, setRelease] = useState([]);
  const [params, setParams] = useState({
    page: 1,
    region: "",
    "release_date.gte": "",
    "release_date.lte": "2024-03-21",
    show_me: 0,
    sort_by: "popularity.desc",
    with_genres: "",
    with_keywords: "",
    with_original_language: "",
    with_watch_monetization_types: "",
    with_release_type: "",
  });
  /**
   * Function to handle movie search and update parameters for API request.
   * Fetches movies based on the updated parameters.
   *
   * @param {Event} e - The event object from the form submission.
   */
  const getMovies = (e) => {
    let updatedParams = params;
    const apiKey = "4db3b4ee5893cead9657d41699ec4c26";
    const apiUrl = `${process.env.REACT_APP_BASE_URL}discover/movie?api_key=${apiKey}`;
    if (e) {
      e.preventDefault();
      updatedParams = {
        ...params,
        region: e.target.countries ? e.target?.countries.value : "",
        "release_date.gte": e.target.start_date.value,
        "release_date.lte": e.target.end_date.value,
        show_me: e.target.show_me.value,
        sort_by: e.target.sort.value || "popularity.desc",
        with_genres: selectedGenres.join(",") || "",
        with_keywords: selectedKeyword.join("|"),
        with_original_language: e.target.language.value || "en",
        with_watch_monetization_types: availabilities.join("|"),
        with_release_type: release.join("|"),
      };
      setParams(updatedParams);
    }

    axios
      .get(apiUrl, { params: updatedParams })
      .then((response) => {
        setMovies(response.data.results);
      })
      .catch((error) => {
        console.error("Error fetching movie data:", error);
      });
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <>
      <Header />
      <Container>
        <SidePanel
          getMovies={getMovies}
          setSelectedGenres={setSelectedGenres}
          selectedGenres={selectedGenres}
          setAvailabilities={setAvailabilities}
          availabilities={availabilities}
          setRelease={setRelease}
          release={release}
          setSelectedKeyword={setSelectedKeyword}
          selectedKeyword={selectedKeyword}
        />
        <MovieList
          movies={movies}
          setMovies={setMovies}
          setParams={setParams}
          params={params}
        />
      </Container>

      <Footer />
    </>
  );
}
