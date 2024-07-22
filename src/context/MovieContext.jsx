import React, { createContext, useState } from 'react'
import data from '../utils/constans/data';

const MovieContext = createContext();

export const MovieContextProvider = ({children}) => {
    const [movies, setMovie] = useState(data);

    const createMovie = (data) => {
        setMovie([...movies, data])
    }
  return (
    <MovieContext.Provider value={{movies, createMovie}}>{children}</MovieContext.Provider>
  )
}

export default MovieContext