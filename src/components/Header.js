import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import user from '../images/user.png'
import './Header.scss';
import { useDispatch } from 'react-redux';
import { fetchMovies, fetchShows } from '../features/movie/movieSlice';
const Header = () => {
  const [term, setTerm] = useState("");
  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    if(term === "") {alert("please enter search field!!"); }
    dispatch(fetchMovies(term));
    dispatch(fetchShows(term));
    setTerm("");
  };
  return (
    <div className='header'>
        <Link to= "/">
            <div className='brand'>
                Binge Watch
            </div>
        </Link>

        <div className="search-bar">
          <form onSubmit={submitHandler}>
            <input type = "text" value = {term} placeholder='search here...' onChange={(e) => setTerm(e.target.value)}/>
            <button type='submit'>search</button>
          </form>
        </div>
        <div className="user-image">
            <img src = {user}/>
        </div>
      
    </div>
  )
}

export default Header
