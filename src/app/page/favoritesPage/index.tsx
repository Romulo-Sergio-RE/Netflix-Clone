import { useContext, useEffect, useState } from "react"
import { Header } from "../../components/header"
import { TrendingContext } from "../../context/trendingContext"
import { getMovieAndTvShows } from "../../hooks/movieAndTv"

interface propsMovie{
    title:string
}
export const Favorites = ()=>{
    return(
        <div>
            <Header />
            favoritos

        </div>
    )
}