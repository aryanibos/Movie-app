import Navbar from "../../component/Navbar/Navbar";
import Footer from "../../component/Footer/Footer";
import MovieList from "../../component/MovieList/MovieList";
import ENDPOINTS from "../../utils/constans/endpoints";
import { useEffect, useState } from "react";
import axios from "axios";

function PopularMovie() {
    const [movies, setMovie] = useState([]);

    useEffect(() => {
        let ignore = false;
        async function fetchPopular() {
            try {
                const response = await axios(ENDPOINTS.POPULAR);
                if (!ignore) setMovie(response.data.results ?? []);
            } catch (error) {
                if (!ignore) console.error("Gagal memuat daftar film:", error);
            }
        }
        fetchPopular();
        return () => {
            ignore = true;
        };
    }, []);
    return (
        <>
            <Navbar />
            <MovieList movies={movies} title="Popular Movies"/>
            <Footer />
        </>
    );
}
export default PopularMovie;