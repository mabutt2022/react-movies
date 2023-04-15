import { Link } from 'react-router-dom';

export default function MovieCard(props) {
    let image = props.movie.posterPath;
    return (
        <div>
            <Link to={`/movies/${props.movie.title}`}>
                <div className='item-card' style={{ height: "300px", width: "300px", backgroundImage: `url(${image})`, alignContent: 'center', backgroundRepeat: 'no-repeat' }}>
                    <div>Title: {props.movie.title}
                        <br />
                        Release Date: {props.movie.releaseDate}
                    </div>
                </div>
            </Link>
            <hr />
        </div>
    );
}