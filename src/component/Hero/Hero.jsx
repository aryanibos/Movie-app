import styles from "./Hero.module.css";
import { useEffect, useState } from "react";

function Hero() {
    const [movie, setMovie] = useState("");

    useEffect(() => {
        async function fetchMovie() {
            const url = "https://www.omdbapi.com/?apikey=fcf50ae6&i=tt2975590";
            const response = await fetch(url);
            const data = await response.json();

            setMovie(data);
        }
        fetchMovie();
    }, []);

    return (
        <div className={styles.container}>
            <section className={styles.hero}>
                <div className={styles.hero__content}>
                    <div className={styles.hero__text}>
                        <h2 className={styles.hero__title}>{movie.Title}</h2>
                        <h3 className={styles.hero__genre}>
                            Genre: {movie.Genre}
                        </h3>
                        <p className={styles.hero__description}> {movie.Plot} </p>
                        <button className={styles.hero__button}>Watch</button>
                    </div>
                    <div className={styles.hero__imageContainer}>
                        <img
                            className={styles.hero__image}
                            src={movie.Poster}
                            alt={movie.Title}
                        />
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Hero;
