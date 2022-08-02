import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    body{
        background-color: black;
        color: white;
    }
`;

export const Button = styled.button `
    background-color: black;
    color: white;
    border-color: darkgray;
    padding:1rem;
    margin-bottom: 1rem;
:hover{
    border: solid blue 0.2rem;
    color: blue;
    font-weight: bold;
    }
`;