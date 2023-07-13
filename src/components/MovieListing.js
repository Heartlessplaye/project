import React from "react";
import { useSelector } from "react-redux";
import { getAllMovies } from "../features/movie/movieSlice";
import MovieCard from "../components/MovieCard"
import './MovieListing.scss';
const MovieListing = () => {
  const movies = useSelector(getAllMovies);
  let renderMovies = "";
  renderMovies  = 
    movies.Response === "True" ? (
      movies.Search.map((movie,index) => (
        <MovieCard movie= {movie} key= {index}/>
      ))
    ) : (
      <div className="movies-error">
        <h3>{movies.Error}</h3>
      </div>
    );
  return (
     <div className="movie-wrapper">
        <div className="movie-list">
           <h2>Movies</h2>
           <div className="movie-container">
              {renderMovies}
           </div>
        </div>
     </div>
  );
};
 
export default MovieListing;
