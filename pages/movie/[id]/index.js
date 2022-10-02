import React from "react";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const Movie = () => {
  const key = process.env.NEXT_PUBLIC_API_KEY;
  const [movie, setMovie] = useState({});
  const [credits, setCredits] = useState({});
  const router = useRouter();
  const { id } = router.query;

  const fetchMovie = async () => {
    const res1 = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${key}`
    );

    const res2 = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${key}&language=en-US`
    );

    setMovie(res1.data);
    setCredits(res2.data);
  };

  useEffect(() => {
    fetchMovie();
  });

  return movie ? (
    <Box display="flex" padding={10} gap={5}>
      <img
        style={{ objectFit: "cover" }}
        src={`https://image.tmdb.org/t/p/w400/${movie.poster_path}`}
        alt="img"
      />
      <Box>
        <Typography color="#F5F5F1" gutterBottom variant="h6" component="div">
          {movie.title}
        </Typography>

        <Typography color="#777777" fontWeight={100} gutterBottom>
          Genre:{" "}
          {movie.genres &&
            movie.genres.map((genre, id) => (
              <Typography key={id} color="#F5F5F1" display="inline" fontWeight={100}>
                {genre.name}
                {", "}
              </Typography>
            ))}
        </Typography>

        <Typography color="#777777" fontWeight={100} gutterBottom>
          Release date:{" "}
          <Typography display="inline" color="#F5F5F1" fontWeight={100}>
            {movie.release_date}
          </Typography>
        </Typography>

        {credits && (
          <Typography color="#777777" fontWeight={100} gutterBottom>
            Credits:{" "}
            {credits.cast &&
              credits.cast.map((cast, id) => (
                  <Typography key={id} display="inline" color="#F5F5F1" fontWeight={100}>
                  {cast.name}
                  {", "}
                </Typography>
              ))}
          </Typography>
        )}

        <Typography color="#777777" fontWeight={100} gutterBottom>
          Overview:{" "}
          <Typography display="inline" color="#F5F5F1" fontWeight={100}>
            {movie.overview}
          </Typography>
        </Typography>
      </Box>
    </Box>
  ) : (
    ""
  );
};

export default Movie;
