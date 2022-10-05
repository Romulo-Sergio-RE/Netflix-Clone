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
        fetchTopTvShows("tv/popular?api_key=8426a1374a213b578abf04fbd0c08f8a&language=en-US")
        fetchPopularTvShows("tv/top_rated?api_key=8426a1374a213b578abf04fbd0c08f8a&language=en-US")
    },[])
  
    return(
        <TvShowsContext.Provider value={{topTvShows, popularTvShows}}>
            {children}
        </TvShowsContext.Provider>
    )
}