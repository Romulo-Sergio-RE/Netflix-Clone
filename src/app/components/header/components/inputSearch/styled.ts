import styled from "styled-components";

export const ContainerInput = styled.div`
    display: flex;
    align-items: center;
    justify-content: right;
    flex-direction: row-reverse;
    .container-icon{
        width: 2rem;
        height: 2rem;
        background-color: red;
        border-radius: 0.9375rem;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
    }
    .icon-menu{
        width: 1.5rem;
        height: 1.5rem;
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
        background-color: #252525;
        color: #f2f2f2;
        ::placeholder{
            color: #f2f2f2;
        }
        :focus{
            outline: none;
            box-shadow: none;
        }
    }
`;