import styled from "styled-components";

export const ContainerHeader = styled.div`
    width: 100%;
    height: 75px;
    background-color: black;
    .container-nav{
        display: flex;
        align-items: center;
        justify-content: space-around;
        position: relative;
    }
    .logo{
        width: 90px;
        height: 70px;
    }
    .lista{
        display: flex;
        align-items: center;
        justify-content: space-around;
    }
    .lista-itens{
        list-style: none;
        color: #ffffff;
        margin: 0 10px;
    }
    .teste{
        display: flex;
        align-items: center;
        justify-content: space-around;
        width: 250px;
    }
`;