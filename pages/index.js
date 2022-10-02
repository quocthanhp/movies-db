import React from "react";
import MoviesList from "../components/MoviesList";
import axios from "axios";
//import { wrapper } from "../redux/store";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

export default function Home() {
  const key = process.env.NEXT_PUBLIC_API_KEY;
  const api = `https://api.themoviedb.org/3/search/movie?api_key=${key}`;
  const [moviesList, setMoviesList] = useState([]);
  const query = useSelector((store) => store.search.query);

  useEffect(() => {
    fetchData("game");
  }, []);

  useEffect(() => {
    fetchData(query);
  }, [query]);

  const fetchData = async (query) => {
    if (query) {
      const movies = await axios.get(`${api}&query=${query}`);
      setMoviesList(movies.data.results);
      console.log(movies.data);
    }
  };

  return <MoviesList moviesList={moviesList} />;
}
