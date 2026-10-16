import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import styles from "./Movie.module.css";

function Movie(props) {
    const Navigate = useNavigate();
    return (
        <div className={styles.movie} onClick={() => props.id && Navigate("/detail/"+props.id)}>
            <img
                className={styles.movie__image}
                src={props.poster} alt=""
            />
            <h3 className={styles.movie__title}>{props.title}</h3>
            <p className={styles.movie__date}>{props.year}</p>
        </div>
    );

}
Movie.propTypes = {
    id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    poster: PropTypes.string,
    title: PropTypes.string,
    year: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

export default Movie;