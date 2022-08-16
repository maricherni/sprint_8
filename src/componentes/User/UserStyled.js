import styled from "styled-components";

export const Container = styled.div`
    margin-top: 30px ;
    display: flex;
    justify-content: center;

    @media only screen and (max-width:500px){
        font-size: 80%;
    .submit{
        font-size: 80%;
    }
    }
`;
export const ContainerLogIn = styled.div`
    background-image: url('../images/background.jpg');
    margin-top: 30px ;
    display: flex;
    color: black;
    justify-content: center;
    font-weight: bold;
    font-size: 18px;
    .lable{
        background-color: #696969;
    }
`;
export const Left = styled.div` 
    img{
        height: 400px;
    }
    @media only screen and (max-width:500px){
    img{
        width: 100%;
        height: auto;
        text-align: center;
    }
    }
`;
export const Right = styled.div` 
    li{
        list-style-type: none;
        margin: 2rem;
        display: grid;
        grid-template-columns: 1fr 1fr;
    }
    .submit{
        margin-left: 150px;
    }
    h5{
        text-align: center;
        color: gold
    }
    
    @media only screen and (max-width:500px){
        font-size: 80%;
        text-align: center;
        li{
            margin: 0.5rem;
        }
        input{
            margin-right: 1rem;
            margin-left: 1rem;
        }
        .submit{
            margin-left: 0;
        }
    }

`;
export const InputLayout = styled.div` 
    display: flex;
`;