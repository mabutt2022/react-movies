import MovieCard from '../components/movieCard.jsx'

export default function MoviesListPage(props) {
  let movies = props.movies;
    return (
      <div className='grid-container'>
        {movies.map((movie, idx) => <MovieCard key={idx} movie={movie} />)}
      </div>
    );
  }