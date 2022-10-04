import React, { useEffect, useState } from 'react';
import { Header } from './components/header';

function App() {
  const [filmes, setFilmes] = useState([])
  const api_key = "8426a1374a213b578abf04fbd0c08f8a"
  // filmes populares "https://api.themoviedb.org/3/movie/popular?api_key=8426a1374a213b578abf04fbd0c08f8a&language=pt-BR"
  // filmes top rated "https://api.themoviedb.org/3/movie/top_rated?api_key=8426a1374a213b578abf04fbd0c08f8a&language=pt-BR"
  // serie populares "https://api.themoviedb.org/3/tv/popular?api_key=8426a1374a213b578abf04fbd0c08f8a&language=en-US"
  // serie top rated "https://api.themoviedb.org/3/tv/top_rated?api_key=8426a1374a213b578abf04fbd0c08f8a&language=en-US"
  // trending day https://api.themoviedb.org/3/trending/all/day?api_key=8426a1374a213b578abf04fbd0c08f8a
  // trending week https://api.themoviedb.org/3/trending/all/week?api_key=8426a1374a213b578abf04fbd0c08f8a
  useEffect(()=>{
    fetch("")
      .then((response)=>response.json())
      .then((data)=>setFilmes(data.results))
  },[])
  console.log(filmes)
  return (
    <div>

    </div>
  );
}

export default App;
