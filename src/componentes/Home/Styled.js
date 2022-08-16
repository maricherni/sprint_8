import styled from "styled-components";

export const HomeContainer = styled.div `
    text-align:center;
    p{
        margin: 4%;
        font-size: 1.2rem;
        color: gold;
    }
    
    @media only screen and (max-width:500px){
        p, *{
            font-size: 80%;
        }
    }
`;