import { BrowserRouter, Route, Routes } from "react-router-dom"
import { FavoritesProvider } from "../context/favoritesContext"
import { MovieProvider } from "../context/movieContext"
import { TrendingProvider } from "../context/trendingContext"
import { TvShowsProvider } from "../context/tvShowsContext"
import { Favorites } from "../page/favoritesPage"
import { Home } from "../page/homePage"
import { KnowMore } from "../page/knowMorePage"
import { MoviePage } from "../page/moviePage"
import { TvShowsPage } from "../page/tvShowsPage"

export const RoutesPage = ()=>{
    return(
       <BrowserRouter>
        <MovieProvider>
         <TvShowsProvider>
          <TrendingProvider>
            <FavoritesProvider>
              <Routes>
                  <Route path="/" element={<Home />}/>
                  <Route path="/tvshows" element={<TvShowsPage />}/>
                  <Route path="/movie" element={<MoviePage />}/>
                  <Route path="/mylist" element={<Favorites />}/>
                  <Route path="/KnowMore" element={<KnowMore />}/>
              </Routes>
            </FavoritesProvider>
          </TrendingProvider>
         </TvShowsProvider>
        </MovieProvider>
       </BrowserRouter>
    )
}