import MovieCard from '../components/movieCard.jsx'

export default function MoviesListPage(props) {
  let movies = props.movies;
    return (
      <div>
        {movies.map((movie, idx) => <MovieCard key={idx} movie={movie} />)}
      </div>
    );
  }