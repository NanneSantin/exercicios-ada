import PropTypes from 'prop-types';
import { Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function MovieList({ movies }) {
    return (
        <div className="movie-list d-flex flex-wrap">
            {movies.map(movie => (
                <Card key={movie.id} style={{ width: '20rem', marginRight: '10px', marginBottom: '10px' }}>
                    <Card.Body>
                        <Card.Title>{movie.title}</Card.Title>
                        <Card.Text>
                            <strong>Gênero:</strong> {movie.genre}
                            <br />
                            <strong>Ano de Lançamento:</strong> {movie.releaseYear}
                            <br />
                            <strong>Classificação:</strong> {movie.rating} ⭐
                        </Card.Text>
                    </Card.Body>
                </Card>
            ))}
        </div>
    );
}

MovieList.propTypes = {
    movies: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        genre: PropTypes.string.isRequired,
        releaseYear: PropTypes.number.isRequired,
        rating: PropTypes.number.isRequired,
    })).isRequired,
};

export default MovieList;

