import { Link } from 'react-router-dom';

export default function MovieCard(props) {
    let image = props.movie.posterPath;
    return (
        <div>
            <Link to={`/movies/${props.movie.title}`}>
                <div style={{ height: "300px", width: "300px", backgroundImage: `url(${image})`, objectFit: 'cover' }}>
                    <div>{props.movie.title}</div><br />
                    <div>{props.movie.releaseDate}</div>
                </div>
            </Link>
            <hr />
        </div>
    );
}