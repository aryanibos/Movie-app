import styles from "./Movies.module.css";
import Movie from "../Movie/Movie";


function Movies(props) {
    const { movies } = props;

    console.log(movies);

    return (
        <div>
            <div className={styles.container}>
                <section className={styles.movies}>
                    <h2 className={styles.movies__title}>Latest Movies</h2>
                    <div className={styles.movie__container}>
                        {movies.map((movie) => {
                            return <Movie key={movie.id}
                                poster={movie.poster}
                                title={movie.title}
                                year={movie.year}
                            />;
                        })}
                    </div>
                </section>
            </div>
        </div>
    );
}
export default Movies;
