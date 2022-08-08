import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";


const Films = (/* {pilotArray} */) => {
    const [film, setFilm] = useState({});

    useEffect(() => {
        const obtenerPelicula = async () =>{
            const url = `https://swapi.dev/api/films/1/`;
            const result = await axios.get(url);
            setFilm(result.data)
        }
        obtenerPelicula();
    },[film]);

    return(
        <>
       <p>Title: {film.title}</p> 
       <p>Episode: {film.episode_id}</p> 
       <p>Opening: {film.opening_crawl}</p> 
       <p>Director: {film.director}</p> 
       <p>Producer: {film.producer}</p> 
       <p>Release date: {film.release_date}</p> 
       <p>Created: {film.created}</p> 
       <p>Edited: {film.title}</p> 
       <p>URL: {film.url}</p>
       </>
    );

}



export default Films;