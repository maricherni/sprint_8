import styled from "styled-components";

export const Container = styled.div`
    margin-top: 30px ;
    display: flex;
    justify-content: center;
`;
export const ContainerLogIn = styled.div`
    background-image: url('../images/background.jpg');
    margin-top: 30px ;
    display: flex;
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
`;
export const Right = styled.div` 
    li{
        list-style-type: none;
        margin: 2rem;
        display: grid;
        grid-template-columns: 160px 80px;
    }
    input{
      margin-left: 50px;
    }
    .submit{
        margin-left: 150px;
    }
`;
export const InputLayout = styled.div` 
    display: flex;
`;