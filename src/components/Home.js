import React, { useEffect } from 'react'
import MovieListing from './MovieListing'
import API_URL from '../common/apis/movieApi'
import {API_KEY} from '../common/apis/movieApiKey'
import { useDispatch } from 'react-redux'
import { addMovies } from '../features/movie/movieSlice'
const Home = () => {
  const movieText = 'Harry';
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchMovies = async () => {
      const response = await API_URL.get(`?apiKey=${API_KEY}&s=${movieText}&type=movie`)
      .catch((err) => {
        console.log('Error ',err);
      });
      dispatch(addMovies(response.data));
      console.log(response.data);

    }

    fetchMovies();
  },[]);

  return (
    <div className='home'>
      <div className='banner-img'></div>
      <MovieListing/>
    </div>
  )
}

export default Home
