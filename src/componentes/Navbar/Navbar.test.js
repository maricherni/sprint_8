import React from "react";
import {screen, render} from '@testing-library/react'
import Navbar from "./Navbar";

//1- Crear un test que falle (RED)
//2- Lo minimo necesario para que pase el test (GREEN)
//3- Refractors (clean code, code smells)

describe('Navbar', () => {
    it('must display an image, log-in and sign-up links, and home and starships links', () => {
        render(<Navbar/>)
        expect(screen.queryByText(/LOG IN/i)).toBeInTheDocument();
    })

})