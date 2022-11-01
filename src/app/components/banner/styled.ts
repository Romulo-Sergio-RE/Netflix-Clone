import styled from "styled-components";

export const ContainerBanner = styled.div`
    width: 100%;
    height: 28.125rem;
    background-size: cover;
    background-position: center;
    mask-image: linear-gradient(to top, transparent 1%, black 20%);
    display: flex;
    align-items: baseline;
    flex-direction: row;
    .backImg{
        width: 100%;
        height: 28.125rem;
    }
    .info-movie{
        height: 28.125rem;
        display: flex;
        align-items: flex-start;
        justify-content: center;
        flex-direction: column;
        margin: 0 0 0 1.25rem;
        position: absolute;
    }
    .title{
        font-size: 2.5rem;
        color: #ffffff;
    }
    .ranting{
        margin: 0.625rem 0 0 0;
        color: #ffffff;
    }
    .overview{
        width: 21.875rem;
        font-size: 1.5rem;
        color: #ffffff;
        margin:1.25rem 0 0 0;
    }
    .btns{
        margin:1.25rem 0 0 0;
        .bottom{
            width: 7.5rem;
            height: 2.813rem;
            margin: 0 0.625rem;
            border-radius: 0.625rem;
            cursor: pointer;
            font-size: 1rem;
            font-weight: bold;
            text-transform: uppercase;
            border: none;
            background-color: black;
            color: #ffffff;
            :hover{
                background-color: red;
                color: #ffffff;
            }
        }
    }
`;