import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    h2{
        color: #f2f2f2;
        margin: 1.875rem  0 0 0;
    }
`;  
export const ContainerGrid = styled.div`
    display: grid;
    grid-template-columns: auto auto auto auto;
    padding: 0.9375rem;
`;  