import { createContext, ReactNode, useEffect, useState } from "react";
import { getMovieAndTvShows } from "../hooks/movieAndTv";

type MovieContextProps ={
    children: ReactNode;
}
type ContextProps = {
    topMovie: any[]
    popularMovie: any[]
    movieChosen: any
}

export const MovieContext = createContext<ContextProps>(null!)

export const MovieProvider = ({children}:MovieContextProps) =>{

    const [topMovie, setTopMovie] = useState<any []>([])
    const [popularMovie, setPopularMovie] = useState<any []>([])
    const [movieChosen,setMovieChosen ] = useState<any>({})
    const fetchMovie = async (path: string) =>{
        const data = await getMovieAndTvShows(path)
        setPopularMovie(data?.results)
    }
    const fetchMovieTop = async (path: string) =>{
        const data = await getMovieAndTvShows(path)
        setTopMovie(data?.results)  
    }
    const fetchMovieRandom = async () =>{
        //const filterTvShows = movieLista.filter((shows)=> shows.media_type === "movie")
        const data = await getMovieAndTvShows("movie/top_rated?api_key=8426a1374a213b578abf04fbd0c08f8a&language=pt-BR")
        const movie =  data?.results
        let randomMovie = Math.floor(Math.random() * (movie.length - 1))
        setMovieChosen(movie[randomMovie]);
    } 
    useEffect(()=>{
        fetchMovieRandom()
        fetchMovie("movie/popular?api_key=8426a1374a213b578abf04fbd0c08f8a&language=pt-BR")
        fetchMovieTop("movie/top_rated?api_key=8426a1374a213b578abf04fbd0c08f8a&language=pt-BR")
    },[])
    return(
        <MovieContext.Provider value={{topMovie, popularMovie,movieChosen}}>
            {children}
        </MovieContext.Provider>
    )
}