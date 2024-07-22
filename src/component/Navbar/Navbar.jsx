import styles from './Navbar.module.css';
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <div className={styles.container}>
            <nav className={styles.navbar}>
                <h3 className={styles.navbar__brand}>Movie App</h3>
                <ul className={styles.navbar__list}>
                    <li>
                        <Link className={styles.navbar__item} to="/">Home</Link>
                    </li>
                    <li >
                        <Link className={styles.navbar__item} to="/movie/create">Add Movie</Link>
                    </li>
                    <li>
                        <Link className={styles.navbar__item} to="/movie/popular">Popular</Link>
                    </li>
                    <li>
                        <Link className={styles.navbar__item} to="/movie/now">Now Playing</Link>
                    </li>
                    <li >
                        <Link className={styles.navbar__item} to="/movie/top">Top Rated</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default Navbar;