import { BrowserRouter, Route, Routes, Navigate} from 'react-router-dom';
import ShipPage from '../pages/ShipPage';
import LandingPage from '../pages/LandingPage';
import Navbar from '../componentes/Navbar/Navbar';
import { GlobalStyle } from '../generalStyles';
import ShipCardPage from '../pages/ShipCardPage';
import SignUpPage from '../pages/SignUp';
import LogInPage from '../pages/Login';


const Router = () => {
    const loggedIn = JSON.parse(sessionStorage.getItem('logged'))

    return(    
    <BrowserRouter>
    <GlobalStyle/>
    <Navbar/>
        <Routes> 
            <Route index element={<LandingPage/>} />
            <Route path='/lista_naves/' element={loggedIn ? (<ShipPage/>) : ( <Navigate replace to="/SignUp" /> )} />
            <Route path='/naves/:id' element={loggedIn ? (<ShipCardPage/>) : ( <Navigate replace to="/SignUp" /> )} /> 
            <Route path='/SignUp' element={<SignUpPage/>} />
            <Route path='/Login' element={<LogInPage/>} />
             { /* Ruta mensaje de error en el caso de que la ruta no exista.*/}    
            <Route path="*" element={<div>404</div> } />
        </Routes>
    </BrowserRouter>
    )
};

export default Router;