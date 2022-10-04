import styled from "styled-components";

export const ContainerInput = styled.div`
    .icon-menu{
        position: absolute;
        margin: 10px 0 0 8px;
        width: 20px;
        height: 20px;
    }
    .input-search{
        width: 30px;
        height: 40px;
        transition: all 2s;
        border-radius: 10px;
        padding: 0 0 0 30px; 

        :hover{
            width: 200px;
            border-radius: 10px;
            margin-right: 20px;
        }
    }
`;