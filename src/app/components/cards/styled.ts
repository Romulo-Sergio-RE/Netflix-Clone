import styled from "styled-components";

export const ContainerCard = styled.div`
    .poster-big-movie{
        width: 200px;
        height: 300px;
        transition: all 2s;
        border-radius: 15px;
        cursor: pointer;
        :hover{
            transform: scale(1.08);
        }
    }
    .poster-movie{
        width: 150px;
        height: 200px;
        transition: all 2s;
        border-radius: 15px;
        cursor: pointer;
        :hover{
            transform: scale(1.08);
        }
    }
`;