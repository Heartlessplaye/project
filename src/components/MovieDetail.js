import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { fetchDetails, getSelected, removeSelected} from '../features/movie/movieSlice';
import star from '../images/star.png'
import  './MovieDetail.scss'
import votes from '../images/thumbs-up.png'
import film from '../images/video-camera.png'
import year from '../images/calendar.png'
const MovieDetail = () => {
  const {imdbID} = useParams();
  const dispatch = useDispatch();
  const details = useSelector(getSelected);
  console.log(details);
  useEffect(() => {
    dispatch(fetchDetails(imdbID));
    return () => {
      dispatch(removeSelected);
    }
  },[dispatch,imdbID]);
  
  return (
    <div className='movie-section'>
      <div className="section-left">
        <div className="movie-title">
          {details.Title}
        </div>
        <div className="movie-rating">
          <span>
            IMDB Rating <img src = {star} className='star'/>: {details.imdbRating}
          </span>
          <span>
            IMDB Votes <img className='votes' src = {votes}/>: {details.imdbVotes}
          </span>
          <span>
            Runtime <img className='film' src = {film}/>: {details.Runtime}
          </span>
          <span>
            Year <img className='year' src = {year}/>: {details.Year}
          </span>
        </div>
        <div className='movie-plot'>
          {details.Plot}
        </div>
        <div className='movie-info'>
            <div>
              <span>Director</span>
              <span>{details.Director}</span>
            </div>
            <div>
              <span>Stars</span>
              <span>{details.Actors}</span>
            </div>
            <div>
              <span>Generes</span>
              <span>{details.Genre}</span>
            </div>
            <div>
              <span>Languages</span>
              <span>{details.Language}</span>
            </div>
            <div>
              <span>Awards</span>
              <span>{details.Awards}</span>
            </div>
        </div>
      </div>
       <div className='section-right'>
          <img src={details.Poster} alt={details.Title} />
       </div>
    </div>
  )
}

export default MovieDetail
