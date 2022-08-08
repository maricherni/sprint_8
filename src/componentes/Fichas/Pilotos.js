import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

const Pilots = (props) => {

    //Array de pilotsos importada de la ficha de la nave
    const [shipPilots, setShipPilots] = useState();
    const [pilots, setPilots] = useState([]);
    
    useEffect(() => {
       setShipPilots(props.pilotsArray);
    },[props.pilotsArray])

    useEffect(() => {
        console.log(shipPilots) 

        /* const result = shipPilots.map(pilots => axios.get(pilots))
        Promise.all(result)
        .then(res => setPilots(res.map(r=> r.data)))
        console.log(pilots) */
    },[shipPilots])

       
     
   
    return(
        <>
        {pilots.map((pilot, index) => 
            <div key={index}>
            
            <p >Name: {pilot.name}</p> 
            <p >Gender: {pilot.gender}</p> 
            <p >Birth: {pilot.birth_year}</p> 
            <p >Height: {pilot.height}cm</p> 
            <p >Mass: {pilot.mass}Kg</p> 
            <p >Eyes-color: {pilot.eye_color}</p> 
            <p >Hair-color: {pilot.hair_color}</p> 
            <p >Skin-color: {pilot.skin_color}</p> 
            <p >Created: {pilot.created}</p> 
            <p >Edited: {pilot.edited}</p> 
            <p >URL: {pilot.url}</p> 
            </div>
        )}

       </>
       
    )

}



export default Pilots;