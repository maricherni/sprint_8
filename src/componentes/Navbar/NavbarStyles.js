import styled from 'styled-components';

export const Banner = styled.div `
    text-align: center;
    img{
        width: 15%;
        padding: 1rem 0 1rem 0;
    }
`;

export const BannerTop = styled.div `
    margin-top: -4rem;
    padding-right: 2rem;
    display:flex;
    justify-content: end;
 @media only screen and (max-width:500px){
    margin-top: 0;
    font-size: 70%;
    justify-content: center;
    border-top: solid grey 0.5px;
 }
`;

export const TopRight = styled.div`
    ul{
        display: flex;
        justify-content: center;
        gap: 1.5rem;
    }
    a{
        text-decoration: none;
        color:white;
        &:hover{
            font-weight: bold;
            padding: 0.9rem;
        }
    }
    li{
        list-style-type: none;
    }
    .lastChild{
        border-left: solid lightgray 0.1px;
        padding-left: 1rem;
    }
`;

export const BannerBottom = styled(TopRight) `
    margin: 1rem 0 2rem 0;
    border-top: solid grey 0.5px;
    border-bottom: solid grey 0.5px;
    font-size: 16px;
    a{
        &:hover{
            border-bottom: solid blue 0.3rem;
        }
    }
    @media only screen and (max-width:500px){
    margin: 0;
    font-size: 70%;
    justify-content: center;
    padding-right: 2rem;
    }
`;


