import { Link } from "react-router-dom";
import {Banner, BannerTop, TopLeft, TopRight, BannerBottom}  from "./NavbarStyles";


const Navbar = () => {
    return(
        <div>
            <Banner>
                <BannerTop>
                    <TopLeft>
                        <img src={''} alt="Logo StarWars" />
                    </TopLeft>
                    <TopRight>
                        <ul>
                            <li><Link to= '/'>LOG IN</Link></li>
                            <li className = 'lastChild'><Link to= '/SignUp'>SIGN UP</Link></li>
                        </ul>
                    </TopRight>
                </BannerTop>
                <BannerBottom>
                    <ul>
                        <li><Link to= '/'>HOME</Link></li>
                        <li><Link to= '/lista_naves'>STARSHIPS</Link></li>
                    </ul>
                </BannerBottom>
            </Banner>
    
    </div>
    )    
}

export default Navbar;