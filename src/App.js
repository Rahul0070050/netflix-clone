import React from 'react';
import MovieList from './components/movies';
import Navbar from './components/navbar';
import Home from './pages/home';

import { useStyle } from './style/index'
import { urls } from './utils';

function App() {
  // globsl styles
  useStyle()

  return (
    <div>
      <Navbar />
      <Home />
      <MovieList category={'Trending movies'} url={`https://api.themoviedb.org/3/trending/movie/week?api_key=${process.env.REACT_APP_API_KEY}`}/>
      <MovieList category={'Trending today'} url={urls.trandingToday}/>
      <MovieList category={'Action movies'} url={urls.getMoviesByCategory(28)}/>
    </div>
  );
}

export default App;
