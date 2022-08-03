import styled from 'styled-components';

export const Banner = styled.div `
    display: block;
`;

export const BannerTop = styled.div `
    display: flex;
    img{
        height: 10rem;
        margin-bottom: none;
        margin-left: 300px;
    }
`;

export const TopLeft = styled.div`
    flex-grow: 4;
    text-align: center;

`;

export const BannerBottom = styled.div `
    border-top: solid grey 0.5px;
    border-bottom: solid grey 0.5px;
    ul{
        display: flex;
        justify-content: center;
        gap: 1.5rem;
    }
    a{
        text-decoration: none;
        color:white;
        &:hover{
            border-bottom: solid blue 0.3rem;
            font-weight: bold;
            padding: 0.9rem;
        }
    }
    li{
        list-style-type: none;
    }
`;

export const TopRight = styled(BannerBottom)`
    font-size: 0.9rem;
    flex-grow: 1;
    margin-top: 2rem;
    border: none;
    a{        
        &:hover{ 
           border-bottom: none;
        }
    }
    .lastChild{
        border-left: solid lightgray 0.1px;
        padding-left: 1rem;
    }
`;
