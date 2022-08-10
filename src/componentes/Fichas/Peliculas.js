import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Button } from "../../generalStyles";


const Films = (props) => {
    const [filmsArray, setFilmsArray] = useState([]);
    const [films, setFilms] = useState([]);

    useEffect(() => {
        const result = filmsArray.map(film => axios.get(film))
        Promise.all(result)
        .then(res => setFilms(res.map(r=> r.data)))
        console.log(films)
    },[filmsArray])
 

    //Botón de mostrar o esconder fichas de películas
    const [active, setActive] = useState(false)
    const [filmsButton, setFilmsButton] = useState('Show Films')

    const handleClick = () => {
        setActive(!active);
        setFilmsButton(active? 'Show Films' : 'Hide Films');
        
        if (filmsButton ==='Show Films') {
            setFilmsArray(props.shipFilms)
        } else{
            setFilmsArray([])
        }

        console.log('filmsArray', filmsArray)
        console.log('films', films)
        console.log(active);
     }


    return(
        <>
        <Button onClick={handleClick}>{filmsButton}</Button>
        {films.map((film, index) => 
            <div key={index}>
                <p>Title: {film.title}</p> 
                <p>Episode: {film.episode_id}</p> 
                <p>Opening: {film.opening_crawl}</p> 
                <p>Director: {film.director}</p> 
                <p>Producer: {film.producer}</p> 
                <p>Release date: {film.release_date}</p> 
                <p>Created: {film.created}</p> 
                <p>Edited: {film.title}</p> 
                <p>URL: {film.url}</p>
            </div>
        )}
        </>
    )
}



export default Films;