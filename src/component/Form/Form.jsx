import styles from "./Form.module.css";
import React, { useContext, useState } from 'react';
import { nanoid } from "nanoid";
import MovieContext from "../../context/MovieContext";

function Form(props) {
    const {createMovie} = useContext(MovieContext);
    const [title, setTitle] = useState('');
    const [year, setYear] = useState('');
    const [type, setType] = useState('Movie');
    const [poster, setPoster] = useState('');
    // const { movies, setMovies } = props;
    const [isTitleError, setisTitleError] = useState(false);
    const [isDateError, setisDateError] = useState(false);
    const [isPosterError, setisPosterError] = useState(false);


    const handleSubmit = (e) => {
        e.preventDefault();
        validate() && addMovie();
    };

    function addMovie() {
        const movie = {
            id: nanoid(),
            title: title,
            year: year,
            type: type,
            poster: poster || "https://picsum.photos/300/400",
        };
        // setMovies([...movies, movie]);
        setTitle('');
        setYear('');
        setType('Movie');
        setPoster('');
        createMovie(movie)
    }

    function validate() {
        if (title === "" && year === "") {
            setisDateError(true);
            setisTitleError(true);
            alert('Title Harus Di Isi dan Tahun Harus Di Isi');
            return false;
        } else if (title === "") {
            setisTitleError(true);
            setisDateError(false);
            alert('Title Harus Di Isi');
            return false;
        } else if (year === "") {
            setisDateError(true);
            setisTitleError(false);
            alert('Tahun Harus Di Isi');
            return false;
        } else if (poster === "") {
            setisPosterError(true);
            alert('Poster Harus Di Isi');
            return false;
        } else {
            setisTitleError(false);
            setisDateError(false);
            alert('Data Berhasil Di Input');
            return true;
        }
    }

    function handleTitle(e) {
        setTitle(e.target.value);
    }

    function handleYear(e) {
        setYear(e.target.value);
    }

    function handleType(e) {
        setType(e.target.value);
    }

    function handlePoster(e) {
        setPoster(e.target.value);
    }

    return (
        <div className={styles.container}>
            <section className={styles.sec_form}>
                <div className={styles.form__right}>
                    <img
                        className={styles.form__image}
                        src={poster || "https://picsum.photos/536/354"}
                        alt="placeholder"
                    />
                </div>
                <div className={styles.form__left}>
                    <h2 className={styles.form__title}>Add Movie</h2>
                    <form onSubmit={handleSubmit} className={styles.form}>
                        <div className={styles.form__group}>
                            <label htmlFor="title">Title:</label>
                            <input
                                id="title"
                                value={title}
                                onChange={handleTitle}
                                name="title"
                                className={isTitleError ? styles.inputError : ''}
                            />
                        </div>
                        <div className={styles.form__group}>
                            <label htmlFor="year">Year:</label>
                            <input
                                id="year"
                                value={year}
                                onChange={handleYear}
                                name="year"
                                className={isDateError ? styles.inputError : ''}
                            />
                        </div>
                        <div className={styles.form__group}>
                            <label htmlFor="type">Type:</label>
                            <select
                                id="type"
                                value={type}
                                onChange={handleType}
                                className={styles.form__input}
                            >
                                <option value="Movie">Movie</option>
                                <option value="TV Show">TV Show</option>
                                <option value="Horor">Horor</option>
                                <option value="Drama">Drama</option>
                                <option value="Action">Action</option>
                                <option value="Comedy">Comedy</option>
                            </select>
                        </div>
                        <div className={styles.form__group}>
                            <label htmlFor="poster">Poster:</label>
                            <input
                                id="poster"
                                value={poster}
                                onChange={handlePoster}
                                name="poster"
                                className={isPosterError ? styles.inputError : ''}
                            />
                        </div>
                        <button className={styles.form__button} type="submit">Submit</button>
                    </form>
                </div>
            </section>
        </div>
    );
}

export default Form;
