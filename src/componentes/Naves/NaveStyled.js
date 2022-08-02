import styled from "styled-components";

export const NavesStyle = styled.div `
    ul{
        justify-content: center;
    }
    li{
        margin: 0 20% 2% 20%;
        background-color: #1a1919;
        list-style-type: none; 
        padding: 1px 0 1px 1rem; 
    }
    p{
        margin: none;
        font-size: 14px;
        font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
        font-weight: lighter;
        
    }
    h4{
        font-size: 16px;
        font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
        font-weight: lighter;
    }
    a{
        text-decoration: none;
        color: white;
    }
    button{
        background-color: black;
        color: white;
        border-color: darkgray;
        padding:1rem;
        margin-bottom: 1rem;
        :hover{
            border: solid blue 0.2rem;
        }
    }
 
`;