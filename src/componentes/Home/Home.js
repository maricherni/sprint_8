import { Link } from "react-router-dom";
import { Button } from "../../generalStyles";
import { HomeContainer } from "./Styled";

const Home =() => {
return(
    <div>
        <HomeContainer>
            <p>Adéntrate en el extraordinario mundo de StarWars. <br /><br />
            Haz clic en el botón y conoce las naves con las que nuestros personajes hacían viajes interestelares y vivían trepidantes aventuras. </p>
            
            <Link to= '/lista_naves'><Button>QUE LA FUERZA TE ACOMPAÑE</Button></Link>
       </HomeContainer>
       
    </div>
)

}

export default Home; 