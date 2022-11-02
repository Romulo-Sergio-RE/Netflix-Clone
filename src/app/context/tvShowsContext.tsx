import { createContext, ReactNode, useEffect, useState } from "react";
import { getMovieAndTvShows } from "../hooks/movieAndTv";

type TvShowsContextProps ={
    children: ReactNode;
}
type ContextProps = {
    topTvShows: any[]
    popularTvShows: any[]
}

export const TvShowsContext = createContext<ContextProps>(null!)

export const TvShowsProvider = ({children}:TvShowsContextProps) =>{

    const API_KEY = "";

    const [topTvShows, setTopTvShows] = useState<any []>([])
    const [popularTvShows, setPopularTvShows] = useState<any []>([])
   
    const fetchTopTvShows = async (path: string) =>{
        const data = await getMovieAndTvShows(path)
        setTopTvShows(data?.results)
    }
    const fetchPopularTvShows = async (path: string) =>{
        const data = await getMovieAndTvShows(path)
        setPopularTvShows(data?.results)  
    }

    useEffect(()=>{
        fetchTopTvShows(`tv/popular?api_key=${API_KEY}&language=en-US`)
        fetchPopularTvShows(`tv/top_rated?api_key=${API_KEY}&language=en-US`)
    },[])
  
    return(
        <TvShowsContext.Provider value={{topTvShows, popularTvShows}}>
            {children}
        </TvShowsContext.Provider>
    )
}