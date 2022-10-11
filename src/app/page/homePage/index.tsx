import { useContext, useEffect, useState } from "react"

import { MovieContext } from "../../context/movieContext"
import { TrendingContext } from "../../context/trendingContext"
import { TvShowsContext } from "../../context/tvShowsContext"
import { ContainerHomePage } from "./styled"
import { Carousel } from "../../components/carousel";
import { Header } from "../../components/header"
import { Banner } from "../../components/banner"

export const Home = () =>{

    const {popularMovie,topMovie,movieChosen} = useContext(MovieContext)
    const {popularTvShows,topTvShows} = useContext(TvShowsContext)
    const {weekTrending} = useContext(TrendingContext)
    
    console.log(weekTrending)
    return(
        <ContainerHomePage>
            <Header />
            <Banner 
                title={movieChosen?.title}
                overview={movieChosen?.overview}
                vote_average={movieChosen?.vote_average}
                backdrop_path={movieChosen?.backdrop_path}
            />
            <h3>week</h3>
            <Carousel 
                dataMovieAndTvShows={weekTrending}  
                slidesPerView={6}
            />
            <h3>Top movie</h3>
            <Carousel 
                dataMovieAndTvShows={topMovie}  
                slidesPerView={6}
            />
            <h3>Top Tv Shows</h3>
            <Carousel 
                dataMovieAndTvShows={topTvShows} 
                slidesPerView={6}
            />
            <h3>popular movie</h3>
            <Carousel 
                dataMovieAndTvShows={popularMovie} 
                slidesPerView={6}
            />
            <h3>popular Tv Shows</h3>
            <Carousel 
                dataMovieAndTvShows={popularTvShows} 
                slidesPerView={6}
            />
        </ContainerHomePage>
    )
}