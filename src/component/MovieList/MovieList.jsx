import styles from "./MovieList.module.css";
import Movie from "../Movie/Movie";


function MovieList(props) {
    const { movies, title } = props;
    const IMAGE = "http://image.tmdb.org/t/p/w300"

    return (
        <div>
            <div className={styles.container}>
                <section className={styles.movies}>
                    <h2 className={styles.movies__title}>{title}</h2>
                    <div className={styles.movie__container}>
                        {movies.map((movie) => (
                            <Movie key={movie.id}
                                poster={IMAGE + movie.poster_path}
                                title={movie.title}
                                year={movie.release_date}
                            />
                        ))}
                    </div>
                </section>
            </div>
        </div>
    );
}
export default MovieList;
