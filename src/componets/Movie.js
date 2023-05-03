import PropTypes from "prop-types";
import {Link} from "react-router-dom";

function Movie({id,frontImage,title,genres,summary}){
    return (
        <div>
          <img src={frontImage} alt={'non_image'}/>
            <h2>
              <Link to={`/movie/${id}`}>
                {title}
              </Link>
            </h2>
            <ul>
              {genres.map(genre=>
                <li key={genre}>{genre}</li>
              )}
            </ul>
            <p>{summary}</p>
        </div>
    )
}

Movie.propTypes={
    id:PropTypes.number.isRequired,
    frontImage: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default Movie;