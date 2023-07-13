import React, { useEffect } from 'react'
import MovieListing from './MovieListing'

import { useDispatch } from 'react-redux'
import { addMovies, fetchMovies, fetchShows } from '../features/movie/movieSlice'

const Home = () => {

  const dispatch = useDispatch();
  const movieText = "night";
  const showText = "ghost";
  useEffect(() => {
    dispatch(fetchMovies(movieText));
    dispatch(fetchShows(showText));
  },[dispatch]);

  return (
    <div className='home'>
      <div className='banner-img'></div>
      <MovieListing/>
    </div>
  )
}

export default Home
