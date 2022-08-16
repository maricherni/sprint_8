import React, {useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import { ContainerLogIn,  Container, Left, Right } from "./UserStyled";
import { Button } from "../../generalStyles";


export const SignUp = () => {
    
    //objeto de cada registro
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')) || []);
    //lista de todos los objetos (registrados)
    const [list, setList] = useState(JSON.parse(localStorage.getItem('list')) || []);
    const navigate = useNavigate();

    useEffect(()=>{
        try{
         setUser(user)
         localStorage.setItem('user', JSON.stringify(user))
        } catch (error){
            console.error(error)
        }
    },[user])
    
    useEffect(()=>{
        try{
         setList(list)
         localStorage.setItem('list', JSON.stringify(list))
        } catch (error){
            console.error(error)
        }
    },[list])

    const handleChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value})

        //Comprobar si el usuario ya está registrado para evitar duplicidad de registros
        if (e.target.name === 'email') {
        const email = e.target.value;
        const userList = JSON.parse(localStorage.getItem('list'))
        const duplicated = userList.find(user => user.email === email)
        if (duplicated) {
            alert('Usuario ya registrado')
            navigate('/LogIn')
        }
        }
    }
    
    const handleSubmit = () => {
        setList([...list, user])
        //Limpiar los input una vez se haga el submit
        setUser([]);
    }

    
    console.log(list);


       return(
        <div>
             <form onSubmit={handleSubmit}>
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
                                    name="username"
                                    required = {true}
                                    value={user.username}
                                    onChange={(e)=> handleChange(e)}
                                />
                            </div>
                        </li>
                        <li>
                            <label>Email tú indicar:</label>
                            <div>
                                <input 
                                    type="email"
                                    name="email"
                                    required = {true}
                                    value={user.email}
                                    onChange={(e)=> handleChange(e)}
                                />
                            </div>
                        </li>
                        <li>
                            <label>Contraseña tú asignar:</label>
                            <div>
                                <input 
                                   type="password"
                                   name="password"
                                   required = {true}
                                   minLength='5'
                                   value={user.password}
                                   onChange={(e)=> handleChange(e)}
                                />
                            </div>
                        </li>
                    </ul>
                    <Button className="submit" type="submit">ÚNETE A LA FUERZA</Button>
                    <h5>Registrarte tú debes, para el contenido ver poder.</h5>
                </Right>
            </Container>
            </form>
        </div>
    )
    
    }
    
    export const LogIn = () => {
        //Datos usuario
        const [logIn, setLogIn] = useState([]);
        //Autentificación usuario. Se almacena en sessionStorage para que al acabar la sesión se desconecte
        const[isAutheticated, setIsAutheticated] = useState(JSON.parse(sessionStorage.getItem('logged')) || false);
        const navigate = useNavigate();

        useEffect(()=>{
            try{
             setLogIn(logIn)
             localStorage.setItem('logIn', JSON.stringify(logIn))
            } catch (error){
                console.error(error)
            }
        },[logIn])
    
       
        const handleSubmit = () => {
            const email = logIn.email;
            const password = logIn.password;
            const userList = JSON.parse(localStorage.getItem('list'));
            let checkUser = []; // Para que no de error el find en caso de que no haya una lista creada
            let checkPassword = [];          
            checkUser = userList.filter(user=> user.email === email);
            checkPassword = checkUser.find(user => user.password === password);
            
            if (checkUser && !checkPassword) {
                alert('Contraseña errónea')
                setIsAutheticated(false);
                sessionStorage.setItem('logged', JSON.stringify(isAutheticated));
            }else if (checkUser && checkPassword) {
                setIsAutheticated(true);
                sessionStorage.setItem('logged', JSON.stringify(true));
                console.log("loggedInUser:" + isAutheticated)
                navigate('/lista_naves/')
            }else{
                alert('Usuario no registrado. \nRedirigiendo a la página de registro')
                setIsAutheticated(false);
                sessionStorage.setItem('logged', JSON.stringify(isAutheticated));
                console.log("loggedInUser:" + isAutheticated)
                navigate('/SignUp')
            }
            setLogIn([]);
        }
        
        return(
        <div>
            <form onSubmit={handleSubmit}>
            <ContainerLogIn>          
                    <Right>
                    <ul>
                        <li>
                            <label>Email:</label>
                            <div>
                                <input 
                                    type="email"
                                    name="email"
                                    required = {true}
                                    value={logIn.email}
                                    onChange={(e)=> setLogIn({...logIn, [e.target.name]: e.target.value })}
                                />
                            </div>
                        </li>
                        <li>
                            <label>Contraseña:</label>
                            <div>
                                <input 
                                   type="password"
                                   name="password"
                                   value={logIn.password}
                                   minLength='5'
                                   required = {true}
                                   onChange={(e)=> setLogIn({...logIn, [e.target.name]: e.target.value })}
                                />
                            </div>
                        </li>
                    </ul>
                        <Button className='button' type="submit" onClick={handleSubmit}>BIENVENIDO/A/E AL LADO OSCURO</Button>
                    </Right>
                </ContainerLogIn>
                </form>
        </div>
        )
    }
