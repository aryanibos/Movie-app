const API_KEY = import.meta.env.VITE_API_KEY;
const BASE_URL = "https://api.themoviedb.org/3"

const ENDPOINTS = {
    LATEST: `${BASE_URL}/movie/latest?api_key=${API_KEY}`,
    DETAIL: `${BASE_URL}/movie/`,
    POPULAR: `${BASE_URL}/movie/popular?api_key=${API_KEY}`,
    TOPRATED: `${BASE_URL}/movie/top_rated?api_key=${API_KEY}`,
    NOWPLAYING: `${BASE_URL}/movie/now_playing?api_key=${API_KEY}`
}

export default ENDPOINTS;