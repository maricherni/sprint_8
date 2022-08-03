import React, {useState, useEffect} from "react";
import { ContainerLogIn, Container, Left, Right } from "./UserStyled";
import { Button } from "../../generalStyles";

export const LogIn = () => {
    
    return(
    <div>
        <ContainerLogIn>
                         
                <Right>
                    <ul>
                        <li>
                            <label className="lable">Usuario:</label>
                            <div>
                                <input 
                                    type="text"
                                />
                            </div>
                        </li>
                        <li>
                            <label className="lable">Contraseña:</label>
                            <div>
                                <input 
                                   type="password"
                                />
                            </div>
                        </li>
                    </ul>
                    <Button className="submit" >BIENVENIDO/A/E AL LADO OSCURO</Button>
                </Right>
            </ContainerLogIn>
    </div>
    )
}

export const SignUp = () => {
    
    const[storage, setStorage] = useState(localStorage.getItem('storage'))

    const[user, setUser] = useState(
        {
            name:"",
            email:"",
            password:""
        }
    );

    useEffect(()=>{
        try{
         setStorage(storage)
         localStorage.setItem('storage', storage)
        } catch (error){
            console.error(error)
        }
    },[storage])

    const handleClick = () => {
        setStorage({user});
    }

    console.log(user);
    

    return(
        <div>
            <Container>
                <Left>
                    <img src="../images/Yoda.png" alt="" />
                </Left>            
                <Right>
                    <ul>
                        <li>
                            <label>Usuario tú crear:</label>
                            <div>
                                <input 
                                    type="text"
                                    value={user.name}
                                    onChange={(e)=> setUser({...user, name: e.target.value})}
                                />
                            </div>
                        </li>
                        <li>
                            <label>Email tú indicar:</label>
                            <div>
                                <input 
                                    type="email"
                                    value={user.email}
                                    onChange={(e)=> setUser({...user, email: e.target.value})}
                                />
                            </div>
                        </li>
                        <li>
                            <label>Contraseña tú asignar:</label>
                            <div>
                                <input 
                                   type="password"
                                   value={user.password}
                                   onChange={(e)=> setUser({...user, password: e.target.value})} 
                                />
                            </div>
                        </li>
                    </ul>
                    <Button className="submit" onClick={handleClick}>VENTE AL LADO OSCURO</Button>
                </Right>
            </Container>
        </div>
    )

}

