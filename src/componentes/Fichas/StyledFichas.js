import styled from "styled-components";


export const CardContainer = styled.div`
    display: block;
    margin: 0 18% 0 18%;

    @media only screen and (max-width:470px){
    font-size: 70%;
    justify-content: center;
    }
`;

export const ShipImage = styled.div`
    margin-top: 1rem;
    text-align: center;
    img{
        border-bottom: solid 0.1rem #ff699b;
        width: 100%;
    }
`;
export const DetailsContainer = styled.div`
    border: solid 0.1px #363636;
    border-radius: 10px;
    padding:1rem;
`;
export const ShipName = styled.div`
    h2{
        font-weight: lighter;
    }
`;
export const ShipDescription = styled.div`
    text-align: justify;
`;
export const FeaturesContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 1rem;
    column-gap: 2rem;

    @media only screen and (max-width:470px){
    display: block;
    justify-content: center;
    }
`;
export const FeaturesLeft = styled.div`       
`;
export const FeaturesRight = styled.div`
`;

export const AddInfoContainer = styled.div`

`;
export const AdditionalInfo = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 1rem;
    margin-top: 2rem;
    
    @media only screen and (max-width:500px){
    display: block;
    justify-content: center;
    }
`;
export const Cards = styled.div`
    border: solid #575656 0.2rem;
    background-color: #1a1919;
    margin-bottom: 1rem;
    border-radius: 10px; 
    padding: 0.5rem;
`;

