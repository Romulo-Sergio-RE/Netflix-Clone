import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    z-index: 2;
    .trailer{
        display: flex;
        align-items: flex-start;
        justify-content: center;
        flex-direction: row;
        iframe{
            width: 50rem;
            height: 34.375rem;
            border: none;
            outline: 0.125rem solid #f2f2f2f2;
        }
        .button-close{
            display: flex;
            width: 2rem;
            height: 2rem;
            color: #f2f2f2f2;
            background-color: red;
            border-radius: 0.625rem;
            cursor: pointer;  
            margin: 1.25rem  0 0 1.25rem;
        }
    }
`;