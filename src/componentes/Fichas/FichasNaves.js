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
    FeaturesRight
} from '../Fichas/FichasNavesStyled'

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
    },[id]);
    
const availableImage = `https://starwars-visualguide.com/assets/img/starships/${id}.jpg`;
const notAvailableImage = `../images/StarWarsLogo.png`;    

const image = availableImage? availableImage: notAvailableImage;

return (
    <>
    <CardContainer>
    
        <ShipImage>
            <img src={image} alt={`${ship.name}`} />
        </ShipImage>
        <DetailsContainer>
            <ShipName><h2>{ship.name}</h2></ShipName>
            <ShipDescription><p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci in, esse a vitae quasi aperiam officia amet quam incidunt, pariatur inventore eum consectetur est animi exercitationem. Itaque accusantium nobis ut.</p></ShipDescription>
            <FeaturesContainer>
                <FeaturesLeft>
                    <p>Model: {ship.model}</p>
                    <p>Class: {ship.starship_class}</p>
                    <p>Cost: {ship.cost_in_credits} credits</p>
                    <p>Atmospheric Speed: {ship.max_atmosphering_speed}</p>
                    <p>Cargo Capacity: {ship.cargo_capacity}</p>
                </FeaturesLeft>
                <FeaturesRight>
                    <p>Manufacturer: {ship.manufacturer}</p>
                    <p>Length: {ship.length}</p>
                    <p>Crew: {ship.crew}</p>
                    <p>Passengers: {ship.passengers}</p>
                    <p>Consumables: {ship.consumables}</p>
                </FeaturesRight>
            </FeaturesContainer>
        </DetailsContainer>
    </CardContainer>
    
    </>
    
);

}

export default ShipCard; 