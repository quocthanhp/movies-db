import { Grid } from "@mui/material";
import Movie from './Movie'

const MoviesList = ({ moviesList }) => {
  return (
    <Grid
      container
      spacing={2}
      columns={{ xs: 4, sm: 8, md: 14 }}
      padding={{ xs: 7, md: 10 }}
      style={{ width: "95%", marginLeft: "auto", marginTop: "auto" }}
      
    >
      {moviesList.map((movie) => (
        <Grid key={movie.id} item xs={12} sm={3} md={3} margin>
          <Movie key={movie.id} movie={movie} />
        </Grid>
      ))}
    </Grid>
  );
}

export default MoviesList