import axios from "axios";
import ENDPOINTS from "../../utils/constans/endpoints";
import styles from "./Detail.module.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Detail() {
    const params = useParams();
    const id = params.id;
    const IMAGE = "http://image.tmdb.org/t/p/w300"
    const [movie, setMovie] = useState("");

    useEffect(() => {
        async function fetchDetail() {
            const API_KEY = import.meta.env.VITE_API_KEY;
            const response = await axios(`${ENDPOINTS.DETAIL}${id}?api_key=${API_KEY}`);
            return setMovie(response.data)
        }
        fetchDetail();
    }, []);

    return (
        <div className={styles.backdrop} style={{ backgroundImage: `linear-gradient(rgba(0,0,0,.5), rgba(0,0,0,.5)), url(${IMAGE + movie.backdrop_path})` }}>
            <section className={styles.detail}>
                <div className={styles.detail__content}>
                    <div className={styles.detail__text}>
                        <h2 className={styles.detail__title}>{movie.title}</h2>
                        <div className={styles.detail__genre}>
                            {movie.genres && movie.genres.map(movie => (
                                <span key={movie.id}>{movie.name}</span>
                            ))}
                        </div>
                        <div className={styles.detail__statistic}>
                            <div>
                                <h2>{movie.popularity}</h2>
                                <p>Popularity</p>
                            </div>
                            <div>
                                <h2>{movie.vote_average}</h2>
                                <p>Vote</p>
                            </div>
                            <div>
                                <h2>{movie.vote_count}</h2>
                                <p>Total Vote</p>
                            </div>
                        </div>
                        <p className={styles.detail__description}>{movie.overview}</p>
                        <button className={styles.detail__button}>Watch</button>
                    </div>
                    <div className={styles.detail__imageContainer}>
                        <img
                            className={styles.detail__image}
                            src={IMAGE + movie.poster_path}
                            alt={movie.Title}
                        />
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Detail;
