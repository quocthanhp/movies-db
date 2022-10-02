import { Box, Card, CardActions, CardContent, CardMedia, IconButton, Tooltip, Typography } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Link from 'next/link'
const Movie = ({movie}) => {
  return (
    <Link href={'/movie/[id]'} as={`/movie/${movie.id}`}>
      <Card style={{ backgroundColor: "#221F1F" }}>
        <CardMedia
          sx={{ objectFit: "cover" }}
          component="img"
          width="310"
          height="350"
          image={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
        />
        <CardContent>
          <Typography color="#F5F5F1" gutterBottom variant="h6" component="div">
            {movie.name ? movie.name : movie.title}
          </Typography>
          <Typography color="#F5F5F1" fontWeight={100}>
            {`${movie.overview.substring(0, 100)}...`}
          </Typography>
        </CardContent>
      </Card>
    </Link>
  );
}

export default Movie