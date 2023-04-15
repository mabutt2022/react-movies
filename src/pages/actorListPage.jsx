export default function ActorsListPage(props) {
  let movies = props.movies;
  let actorArray = [];
  movies.map((movie, idx) => {
    let cast = movie.cast
    actorArray = [...actorArray, ...cast]
  });
  let actorArrayNew = new Set(actorArray);
  const uniqueActors = Array.from(actorArrayNew);
    return (
      <div>        
        <h3>Actors</h3>
        {uniqueActors.map((actor, idx) => {
          return (
            <div key={idx}>
             <p>{actor}</p>
            </div>
          );
        })}
      </div>
    );
  }