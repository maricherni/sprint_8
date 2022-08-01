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
            console.log(result.data);
            setShip(result.data)
        }
        obtenerNave();
    },[id]);
    
    
return (
    <>
    <CardContainer>
    
        <ShipImage>
            <img src="" alt="FOTO" />
        </ShipImage>
        <DetailsContainer>
            <ShipName><h2>{ship.name}</h2></ShipName>
            <ShipDescription><p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci in, esse a vitae quasi aperiam officia amet quam incidunt, pariatur inventore eum consectetur est animi exercitationem. Itaque accusantium nobis ut.</p></ShipDescription>
            <FeaturesContainer>
                <FeaturesLeft>
                    <p>Model: {ship.model}</p>
                    <p>Cost in credits: {ship.cost_in_credits}</p>
                    <p>Atmospheric Speed: {ship.max_atmosphering_speed}</p>
                </FeaturesLeft>
                <FeaturesRight>
                    <p>Manufacturer: {ship.manufacturer}</p>
                    <p>Length: {ship.length}</p>
                    <p>Crew: {ship.crew}</p>
                </FeaturesRight>
            </FeaturesContainer>
        </DetailsContainer>
    </CardContainer>
    
    </>
    
);

}

export default ShipCard; 