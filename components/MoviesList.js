import { Grid } from "@mui/material";
import Movie from './Movie'

const MoviesList = ({ moviesList }) => {
  return (
    <Grid
      container
      spacing={{ xs: 2 }}
      columns={{ xs: 4, sm: 8, md: 14 }}
      padding={{ xs: 7, md: 10 }}
      marginLeft={{ xs: "auto", sm: "0", md: "2rem" }}
    >
      {moviesList.map((movie) => (
        <Grid item xs={12} sm={3} md={3} margin>
          <Movie key={movie.id} movie={movie} />
        </Grid>
      ))}
    </Grid>
  );
}

export default MoviesList