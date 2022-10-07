import styled from "styled-components";

export const ContainerInput = styled.div`
    display: flex;
    align-items: center;
    justify-content: right;
    flex-direction: row-reverse;
    .container-icon{
        width: 2.5rem;
        height: 2.5rem;
        background-color: red;
        border-radius: 1.875rem;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        border: 0.125rem solid red;
    }
    .icon-menu{
        width: 1.875rem;
        height: 1.875rem;
        color: #ffffff;
    }
    .input-search{
        width: 12.5rem;
        height: 2.5rem;
        position: absolute;
        right: 14.375rem;
        border-radius: 0.75rem;
        border: 0.063rem solid red;
        padding: 0 0 0 0.625rem;
        :focus{
            outline: none;
            box-shadow: none;
        }
    }
`;