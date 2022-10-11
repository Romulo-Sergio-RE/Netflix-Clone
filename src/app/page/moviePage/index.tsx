import { useContext } from "react"
import { Carousel } from "../../components/carousel"
import { Header } from "../../components/header"
import { MovieContext } from "../../context/movieContext"
import { TrendingContext } from "../../context/trendingContext"
import { ContainerMovie } from "./styled"

export const MoviePage = ()=>{
    
    const {weekTrending} = useContext(TrendingContext)
    const {popularMovie,topMovie} = useContext(MovieContext)
    const filterMovie = weekTrending.filter((movie)=> movie.media_type === "movie")
    
    console.log(filterMovie)
    return(
        <ContainerMovie>
            <Header />
            <h3>Movie week</h3>
            <Carousel 
                dataMovieAndTvShows={filterMovie}
                slidesPerView={6}
            />
            <h3>Top Movie </h3>
            <Carousel 
                dataMovieAndTvShows={topMovie}
                slidesPerView={6}
            />
            <h3>Popular Movie</h3>
            <Carousel 
                dataMovieAndTvShows={popularMovie}
                slidesPerView={6}
            />
        </ContainerMovie>
    )
}