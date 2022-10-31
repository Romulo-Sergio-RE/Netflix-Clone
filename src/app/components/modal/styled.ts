import styled from "styled-components";

export const ContainerModal = styled.div`
    width: 31.25rem;
    height: 16.875rem;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 2;
    background-color:  rgba(12, 10, 10, 1);
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 1.25rem;
    outline: 0.125rem solid #f2f2f2f2;
`;
export const Container = styled.div`
    width: 31.25rem;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    .poster-movie{
        width: 10.625rem;
        height: 16.875rem;
        border-radius: 1.25rem 0 0 1.25rem;
    }
    .container-infoMovie{
        display: flex;
        align-items: center;
        justify-content: space-around;
        flex-direction: column;
        width: 15.625rem;
        height: 12.5rem;
        margin-top: 1.875rem;
        color: white;
        button{
            width: 7.5rem;
            height: 2.5rem;
            margin: 0 0.625rem;
            border-radius: 0.625rem;
            cursor: pointer;
            font-size: 1rem;
            font-weight: bold;
            text-transform: uppercase;
            border: none;
            background-color: red;
            color: #ffffff;
            transition: all 2s;
            :hover{
                transform: scale(1.05);
            }
        }
    }
    .container-btns{
        display: flex;
        align-items: center;
        justify-content: center;   
        .button-favorites{
            width: 1.5rem;
            height: 1.5rem;
            cursor: pointer;
        }
    }
    .button-close{
        width: 1.5rem;
        height: 1.5rem;
        color: #f2f2f2f2;
        margin: 0.625rem 0.625rem 0 0;
        cursor: pointer;
    }
`;