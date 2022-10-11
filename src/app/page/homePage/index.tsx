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
    console.log(movieChosen)
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
                typeCard={"bigCard"} 
                slidesPerView={6}
            />
            <h3>Popular Movie</h3>
            <Carousel 
                dataMovieAndTvShows={popularMovie} 
                typeCard={""} 
                slidesPerView={8}
            />
            <h3>Popular Tv shows</h3>
            <Carousel 
                dataMovieAndTvShows={popularTvShows} 
                typeCard={""} 
                slidesPerView={8}
            />
            <h3>Top Movie</h3>
            <Carousel 
                dataMovieAndTvShows={topMovie} 
                typeCard={""}
                slidesPerView={8}
            />

            <h3>Top Tv shows</h3>
            <Carousel 
                dataMovieAndTvShows={topTvShows} 
                typeCard={""} 
                slidesPerView={8}
            />
        </ContainerHomePage>
    )
}
/*
            <h3>Popular Movie</h3>
            <Carousel 
                dataMovieAndTvShows={popularMovie} 
                typeCard={"bigCard"} 
                slidesPerView={6}
            />
            <h3>Top Movie</h3>
            <Carousel 
                dataMovieAndTvShows={topMovie} 
                typeCard={""}
                slidesPerView={8}
            />
            <h3>Top Popular</h3>
            <Carousel 
                dataMovieAndTvShows={popularTvShows} 
                typeCard={""} 
                slidesPerView={8}
            />
            <h3>Top Tv shows</h3>
            <Carousel 
                dataMovieAndTvShows={topTvShows} 
                typeCard={""} 
                slidesPerView={8}
            />
            <h3>day</h3>
            <Carousel 
                dataMovieAndTvShows={dayTrending} 
                typeCard={""} 
                slidesPerView={8}
            />
            <h3>week</h3>
            <Carousel 
                dataMovieAndTvShows={weekTrending} 
                typeCard={""} 
                slidesPerView={8}
            />

*/