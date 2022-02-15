import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Routes, Route} from 'react-router-dom';
import React, {useEffect, useState} from "react";
import Home from "./components/Home/Home";
import Header from "./components/Header/Header.js";

export default function App() {

  let API_URL = "https://api.themoviedb.org/3/trending/movie/day?api_key=0b7a45b84863262f053eb799d51f84fb";
  const [movies, setMoviesData] = useState();
  
  const fetchData = async () => {
    try{
        const response = await fetch(API_URL);
        const data = await response.json(); 
        let newData = [];
        for (let item of data.results) {
          item["caption"] = "No caption added";
          newData.push(item);
        }
        setMoviesData(newData); 
    } catch(err) {
        console.log(err);
    }
  }

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

  useEffect(() => {
    fetchData();
  }, [])

  return(
    <>
        <Header/>
        <Routes>
           <Route path="/" element={<Home movies={movies} updater={updateMovie}/>} />
        </Routes>
    </>
  );
}

