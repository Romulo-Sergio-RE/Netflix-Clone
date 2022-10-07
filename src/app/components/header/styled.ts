import styled from "styled-components";

export const ContainerHeader = styled.div`
    width: 100%;
    height: 5rem;
    background-color: #000000;
    .container-nav{
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin: 0 1.875rem;
    }
    .logo-menuItens{
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 31.25rem;
    }
    .logo{
        width: 5.625rem;
        height: 4.375rem;
    }
    .lista{
        display: flex;
        align-items: center;
        justify-content: space-around;
    }
    .lista-itens{
        list-style: none;
        color: #ffffff;
        margin: 0 0.625rem;
    }
    .teste{
        display: flex;
        align-items: center;
        justify-content: space-around;
        width: 12.5rem;
    }
    .link{
        font-size: 1.125rem;
        color: #ffffff;
        text-decoration: none;
        :hover{
            color: red;
        }
    }
`;