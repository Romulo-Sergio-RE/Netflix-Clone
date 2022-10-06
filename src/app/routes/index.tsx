import { BrowserRouter, Route, Routes } from "react-router-dom"
import { MovieProvider } from "../context/movieContext"
import { TrendingProvider } from "../context/trendingContext"
import { TvShowsProvider } from "../context/tvShowsContext"
import { Favorites } from "../page/favoritesPage"
import { Home } from "../page/homePage"
import { MoviePage } from "../page/moviePage"
import { TvShowsPage } from "../page/tvShowsPage"
import { TrendingPage } from "../page/trendingPage"

export const RoutesPage = ()=>{
    return(
       <BrowserRouter>
        <MovieProvider>
         <TvShowsProvider>
          <TrendingProvider>
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/tvshows" element={<TvShowsPage />}/>
                <Route path="/movie" element={<MoviePage />}/>
                <Route path="/mylist" element={<Favorites />}/>
                <Route path="/toptrending" element={<TrendingPage />}/>
            </Routes>
          </TrendingProvider>
         </TvShowsProvider>
        </MovieProvider>
       </BrowserRouter>
    )
}