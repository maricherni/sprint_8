import { BrowserRouter, Route, Routes} from 'react-router-dom';
import ShipPage from '../pages/ShipPage';
import LandingPage from '../pages/LandingPage';
import Navbar from '../componentes/Navbar/Navbar';
import { GlobalStyle } from '../generalStyles';
import ShipCardPage from '../pages/ShipCardPage';
import SignUp from '../pages/SignUp';

const Router = () => (
    
    <BrowserRouter>
    <GlobalStyle/>
    <Navbar/>
        <Routes> 
            <Route index element={<LandingPage/>} />
            <Route path="/lista_naves/" element={<ShipPage/>} />
            <Route path='/naves/:id' element={<ShipCardPage/>} /> 
            <Route path='/SignUp' element={<SignUp/>} />
             { /* Ruta mensaje de error en el caso de que la ruta no exista.*/}    
            <Route path="*" element={<div>404</div> } />
        </Routes>
    </BrowserRouter>
);

export default Router;