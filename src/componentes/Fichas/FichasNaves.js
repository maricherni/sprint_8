import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import {
    CardContainer,
    ShipImage, 
    DetailsContainer,
    ShipName, 
    ShipDescription, 
    FeaturesContainer, 
    FeaturesLeft, 
    FeaturesRight,
    PilotsCards,
    FilmsCards
} from './StyledFichas'
import Pilot from './Pilotos';
import Films from './Peliculas';



const ShipCard = () => {
    const [ship, setShip] = useState({});
    const {id} = useParams();

    useEffect(() => {
        const obtenerNave = async () =>{
            const url = `https://swapi.dev/api/starships/${id}/`;
            const result = await axios.get(url);

            setShip(result.data)
        }
        obtenerNave();
    },[id, ship]);

    
//Imagen de la nave. Se asigna la de la web, pero en caso de que no se encuentre, se actualizará el estado por una por defecto.
const [shipImage, setShipImage] = useState(`https://starwars-visualguide.com/assets/img/starships/${id}.jpg`)

return (
    <>
    <CardContainer>
        <ShipImage>
            <img src={shipImage} onError={()=> setShipImage(`../images/not_available.png`)} alt={`${ship.name}`} />
        </ShipImage>
        <DetailsContainer>
            <ShipName><h2>{ship.name}</h2></ShipName>
            <ShipDescription><p>{ship.starship_class}</p></ShipDescription>
            <FeaturesContainer>
                <FeaturesLeft>
                    <p>Model: {ship.model}</p>
                    <p>Cost: {ship.cost_in_credits} credits</p>
                    <p>Atmospheric Speed: {ship.max_atmosphering_speed}</p>
                    <p>Cargo Capacity: {ship.cargo_capacity}</p>
                </FeaturesLeft>
                <FeaturesRight>
                    <p>Manufacturer: {ship.manufacturer}</p>
                    <p>Length: {ship.length}</p>
                    <p>Crew: {ship.crew}</p>
                    <p>Passengers: {ship.passengers}</p>
                   
                </FeaturesRight>
            </FeaturesContainer>
            <PilotsCards>
                <Pilot pilotsArray={ship.pilots}></Pilot>
            </PilotsCards>
            <FilmsCards>
                {<Films shipFilms={ship.films}></Films>}
            </FilmsCards>
        </DetailsContainer>
    </CardContainer>
    </>
);
}

export default ShipCard; 