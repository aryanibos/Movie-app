import { useState } from "react";
import Navbar from "../component/Navbar/Navbar";
import Hero from "../component/Hero/Hero";
import Movies from "../component/Movies/Movies";
import Footer from "../component/Footer/Footer";
import Form from "../component/Form/Form";
import { useContext } from "react";
import MovieContext from "../context/MovieContext";

function Home() {
    const {movies} = useContext(MovieContext);
    return (
        <div>
            <Navbar />
            <Hero />
            <Movies movies={movies} />
            <Form movies={movies}/>
            <Footer />
        </div>

    )
}


export default Home;