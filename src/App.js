import React, { useEffect, useState } from 'react'
import './App.scss'
import { BrowserRouter as Router, Route, Routes, Switch }from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './components/Home'
import MovieDetail from './components/MovieDetail'
import PageNotFound from './components/PageNotFound'
function App() {
   

  return (
    <div className='App'>
      
        <Router>
           <Header/>
           <div className='container'>
           <Routes>
            <Route path='/' Component = {Home}/>
            <Route path='/movie/:imdbID' Component = {MovieDetail}/>
            <Route path= "*" Component = {PageNotFound}/>
            </Routes>
            </div>
           <Footer/>
        </Router>
    </div>
  )
}

export default App


//  Header  Router Footer 
//   Home  MovieDetail Error