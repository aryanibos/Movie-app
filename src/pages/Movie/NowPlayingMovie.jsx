import Navbar from "../../component/Navbar/Navbar";
import Footer from "../../component/Footer/Footer";
import MovieList from "../../component/MovieList/MovieList";
import ENDPOINTS from "../../utils/constans/endpoints";
import { useEffect, useState } from "react";
import axios from "axios";

function NowPlayingMovie() {
    const [movies, setMovie] = useState([]);

    useEffect(() => {
        async function fetchPopular() {
            const response = await axios(ENDPOINTS.NOWPLAYING);
            return setMovie(response.data.results)
        }
        fetchPopular();
    }, []);
    return (
        <>
            <Navbar />
            <MovieList movies={movies} title="Now Playing Movies" />
            <Footer />
        </>
    );
}
export default NowPlayingMovie;