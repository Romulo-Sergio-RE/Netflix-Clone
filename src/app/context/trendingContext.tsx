import { createContext, ReactNode, useEffect, useState } from "react";
import { getMovieAndTvShows } from "../hooks/movieAndTv";

type TrendingContextProps ={
    children: ReactNode;
}
type ContextProps = {
    dayTrending: any[]
    weekTrending: any[]
}

export const TrendingContext = createContext<ContextProps>(null!)

export const TrendingProvider = ({children}:TrendingContextProps) =>{

    const API_KEY = "8426a1374a213b578abf04fbd0c08f8a"
    const [dayTrending, setDayTrending] = useState<any []>([])
    const [weekTrending, setWeekTrending] = useState<any []>([])
    
    const fetchDayTrending = async (path: string) =>{
        const data = await getMovieAndTvShows(path)
        setDayTrending(data?.results)
    }
    const fetchWeekTrending = async (path: string) =>{
        const data = await getMovieAndTvShows(path)
        setWeekTrending(data?.results)  
    }

    useEffect(()=>{
        fetchDayTrending(`trending/all/day?api_key=${API_KEY}`)
        fetchWeekTrending(`trending/all/week?api_key=${API_KEY}`)
    },[])

    return(
        <TrendingContext.Provider value={{dayTrending, weekTrending}}>
            {children}
        </TrendingContext.Provider>
    )
}