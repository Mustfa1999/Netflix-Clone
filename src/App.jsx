import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Routes, Route} from 'react-router-dom';
import React, {useEffect, useState} from "react";
import Home from "./components/Home/Home";
import Navbar from "./components/NavBar/NavBar.js";
import FavList from './components/FavList/FavList.js';

export default function App() {

  const API_LINK = process.env.REACT_APP_API;
  const [movies, setMoviesData] = useState();
  const [favMovies, setFavMovie] = useState();

  const fetchData = async () => {
    try{
        let response = await fetch(`${API_LINK}/trending`);
        let data = await response.json(); 
        let caption = "No caption added";
        let newData = data.map(movie => {return { ...movie, caption };})
        setMoviesData(newData); 
    } catch(err) {
        console.log(err);
    }
  }

  const fetchFavData = async () => {
    try{
        let response = await fetch(`${API_LINK}/getMovies`);
        let data = await response.json();
        setFavMovie(data); 
    } catch(err) {
        console.log(err);
    }
  }

  useEffect(() => {
    fetchData();
  }, [])

  useEffect(() => {
    fetchFavData();
  }, [])

  const updateMovie = (mydata, id) => {
    let updatedMovies = movies.map(movie => {
        if (movie.id === id) {
            movie.caption = mydata.userCaption;
            return movie;
        }
        else return movie
    })
    setMoviesData(updatedMovies);
  }

  return(
    <>
        <Navbar/>
        <Routes>
           <Route path="/" element={<Home movies={movies} updater={updateMovie}/>} />
           <Route path="/favorite" element={<FavList favMovies={favMovies}/>} />
        </Routes>
    </>
  );
}

