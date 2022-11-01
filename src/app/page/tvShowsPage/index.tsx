import { useContext } from "react"
import { Carousel } from "../../components/carousel"
import { Header } from "../../components/header"
import { TvShowsContext } from "../../context/tvShowsContext"
import { ContainerTvShows } from "./styled"

export const TvShowsPage = ()=>{
    const {popularTvShows,topTvShows} = useContext(TvShowsContext)


    return(
        <ContainerTvShows>
            <Header />
            <h3>Top Tv Shows </h3>
            <Carousel 
                dataMovieAndTvShows={topTvShows}
                slidesPerView={6}
            />
            <h3>Popular Tv Shows</h3>
            <Carousel 
                dataMovieAndTvShows={popularTvShows}
                slidesPerView={6}
            />
        </ContainerTvShows>
    )
}