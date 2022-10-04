import styled from "styled-components";

export const ContainerMenu = styled.div`
    .menu{
    }
    .menu-nav{
        position: fixed;
    }
    .btn-user{
        width: 40px;
        height: 35px;
        display: flex;
        align-items: center;
        justify-content: center;
        
    }
    .btn-user-icon{
        width: 20px;
        height: 20px;
    }
    .menu-lista{
        list-style: none;
        background-color: red;
        margin-top: 20px;
    }
    .menu-itens{
        display: flex;
        align-items: center;
        justify-content: center;
        width: 150px;
        height: 40px;
        :hover{
            background-color: #FFFFFF;
            padding: 10px;
        }
    }
`;