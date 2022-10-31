import { useContext, useEffect, useState } from "react"
import { Header } from "../../components/header"
import { FavoritesContext } from "../../context/favoritesContext"
import { TrendingContext } from "../../context/trendingContext"
import { getMovieAndTvShows } from "../../hooks/movieAndTv"

interface propsMovie{
    title:string
}
export const Favorites = ()=>{

    const {favorites}= useContext(FavoritesContext)
    return(
        <div>
            <Header />
            favoritos

        </div>
    )
}