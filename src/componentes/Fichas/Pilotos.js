import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { PilotsCards, FeaturesContainer, FeaturesLeft, FeaturesRight } from "./StyledFichas";
import { Button } from "../../generalStyles";

const Pilots = (props) => {

    //Array de pilotsos importada de la ficha de la nave
    const [shipPilots, setShipPilots] = useState([]);
    const [pilots, setPilots] = useState([]);


    useEffect(() => {
        const result = shipPilots.map(pilots => axios.get(pilots))
        Promise.all(result)
        .then(res => setPilots(res.map(r=> r.data)))
        console.log(pilots)
    },[shipPilots])


    //Botón de mostrar o esconder fichas de los pilotos
    const [active, setActive] = useState(false)
    const [pilotsButton, setPilotsButton] = useState('Show Pilots')

    const handleClick = () => {
        setActive(!active);
        setPilotsButton(active? 'Show Pilots' : 'Hide Pilots');
        
        if (pilotsButton ==='Show Pilots') {
            setShipPilots(props.pilotsArray)
        } else{
            setShipPilots([])
        }

        console.log('shipPilots', shipPilots)
        console.log('pilots', pilots)
        console.log(active);
     }
     
   
    return(
        <>
        <Button onClick={handleClick}>{pilotsButton}</Button>
        {pilots.map((pilot, index) => 
            <div key={index}>
            <PilotsCards>
                <FeaturesContainer>
                    <FeaturesLeft>
                        <p >Name: {pilot.name}</p> 
                        <p >Gender: {pilot.gender}</p> 
                        <p >Birth: {pilot.birth_year}</p> 
                        <p >Height: {pilot.height}cm</p> 
                        <p >Mass: {pilot.mass}Kg</p> 
                        <p >Eyes-color: {pilot.eye_color}</p> 
                    </FeaturesLeft>
                    <FeaturesRight>
                        <p >Hair-color: {pilot.hair_color}</p> 
                        <p >Skin-color: {pilot.skin_color}</p> 
                        <p >Created: {pilot.created}</p> 
                        <p >Edited: {pilot.edited}</p> 
                        <p >URL: {pilot.url}</p> 
                    </FeaturesRight>
                </FeaturesContainer>
            </PilotsCards>
            </div>
            
        )}

        

       </>
       
    )

}



export default Pilots;