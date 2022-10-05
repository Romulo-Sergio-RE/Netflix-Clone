import React, { useContext} from 'react';
import { Header } from './components/header';
import { MovieContext } from './context/movieContext';
import { TvShowsContext } from './context/tvShowsContext';
import { getMovieAndTvShows } from './hooks/movieAndTv';

function App() {
  const {popularMovie,topMovie} = useContext(MovieContext)
  console.log(popularMovie)
  return (
    <div>

    </div>
  );
}

export default App;
