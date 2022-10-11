import styled from "styled-components";

export const ContainerCard = styled.div`
    .poster-big-movie{
        width: 12.5rem;
        height: 18.75rem;
        transition: all 2s;
        border-radius: 0.938rem;
        cursor: pointer;
        box-shadow: 0.063rem 0 0.625rem rgba(255, 255, 255, 0.2);
        :hover{
            transform: scale(1.08);
        }
    }
    .poster-movie{
        width: 9.375rem;
        height: 12.5rem;
        transition: all 2s;
        border-radius: 0.938rem;
        cursor: pointer;
        box-shadow: 0.063rem 0 0.625rem rgba(255, 255, 255, 0.2);
        :hover{
            transform: scale(1.08);
        }
    }
`;