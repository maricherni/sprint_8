
import React, { useState, useEffect }from "react";
import axios from 'axios'; 
import { ButtonLayout, NavesStyle } from "./NaveStyled";
import { Link } from "react-router-dom";
import { Button } from "../../generalStyles";
/* import ShipCard from "../Fichas/FichasNaves"; */

const Naves = () => {
    const [shipList, setShipList] = useState([]);
    const [page, setPage] = useState(1);


    //Llamada a la API de Starwars
    useEffect(() => {
        const obtenerNaves = async () =>{
            const url = `https://swapi.dev/api/starships/?page=${page}`;
            const result = await axios.get(url);
            console.log(result.data.results)
            setShipList(result.data.results)
        }
        obtenerNaves();
    },[page]);



    return(
        <div>
            <NavesStyle>
            <ul>
                {shipList.length === 0 && <p>Cargando...</p>} 
                {shipList.map((nave, index)=> {
                        return(
                          
                                <li key={index}> 
                                    <Link to= {`/naves/${nave.url.split('/').slice(-2, -1).toString()}`}>
                                        <h4>{nave.name.toUpperCase()}</h4>
                                    </Link>
                                    <p>{nave.model}</p>
                                </li>
                        )
                    })
                }
            </ul>
            <div>
                <ButtonLayout>
                    <Button className='button' onClick={()=> setPage(page + 1)}>VIEW MORE</Button>
                </ButtonLayout>
           </div>
            </NavesStyle>
            
        </div>
    )
}

export default Naves; 