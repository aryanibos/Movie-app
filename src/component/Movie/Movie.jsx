import { useNavigate } from "react-router-dom";
import styles from "./Movie.module.css";

function Movie(props) {
    const Navigate = useNavigate();
    return (
        <div className={styles.movie} onClick={() => Navigate("/detail/"+movie.id)}>
            <img
                className={styles.movie__image}
                src={props.poster} alt=""
            />
            <h3 className={styles.movie__title}>{props.title}</h3>
            <p className={styles.movie__date}>{props.year}</p>
        </div>
    );

}
export default Movie;