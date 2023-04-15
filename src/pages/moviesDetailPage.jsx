import { useParams } from "react-router-dom";

export default function MovieDetailPage(props) {
  let movies = props.movies;
  const {movieName} = useParams();
    return (
      <div>
        {movies.map((movie, idx) => {
          if (movie.title === movieName) {
            let cast = movie.cast            
            return (
              <div key={idx}>
                <h1>Title: {movie.title}</h1>
                <h2>Release Date: {movie.releaseDate}</h2>
                <img src={movie.posterPath} alt="" />
                <h2>Actors</h2>
                {cast.join(", ")};
              </div>
            );
          }
        })}
      </div>
    );
  }