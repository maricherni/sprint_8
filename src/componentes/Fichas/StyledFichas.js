import styled from "styled-components";


export const CardContainer = styled.div`
    display: grid;
    grid-template-rows: min-content;
    margin: 0 18% 0 18%;
`;

export const ShipImage = styled.div`
    margin-top: 1rem;
    text-align: center;
    img{
        border-bottom: solid 0.1rem #ff699b;
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
    display: flex;
    justify-content: space-between;
`;
export const FeaturesLeft = styled.div`
       
`;
export const FeaturesRight = styled.div`
    
`;
export const PilotsCards = styled.div`
    
`;
export const FilmsCards = styled.div`
    
`;
