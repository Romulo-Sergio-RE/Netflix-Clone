import styled from "styled-components";

export const ContainerModal = styled.div`
    width: 100%;
    height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 10;
    background-color: rgba(0,0,0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
`; 
export const Container = styled.div`
    width: 40.625rem;
    height: 500px;
    background-color:  rgba(12, 10, 10, 1);
    border-radius: 1.25rem;
    outline: 0.125rem solid #f2f2f2f2;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
    .backImage{
        width: 40.625rem;
        height: 16.875rem;
        border-radius: 1.25rem 1.25rem 0 0;
    }
    .container-img{
        display: flex;
        align-items: baseline;
        flex-direction: row-reverse;
        .button-close{
            width: 1.5rem;
            height: 1.5rem;
            color: #f2f2f2f2;
            background-color: red;
            border-radius: 0.625rem;
            cursor: pointer;
            position: absolute;
            margin: 1.25rem 1.25rem 1.25rem 0;
        }
    }
    .container-btns{
        display: flex;
        align-items: flex-start;

        button{
            width: 7.5rem;
            height: 2.1875rem;
            margin: 0 0.625rem;
            border-radius: 0.625rem;
            cursor: pointer;
            font-size: 1rem;
            font-weight: bold;
            margin: 0 0.625rem 0.9375rem 0;
            text-transform: uppercase;
            border: none;
            background-color: red;
            color: #ffffff;
            transition: all 2s;
            :hover{
                transform: scale(1.05);
            }
        }
        .button-favorites{
            width: 1.5rem;
            height: 1.5rem;
            cursor: pointer;
            margin: 0.375rem 0 0 0;
        }
    }
    h3{
        color: #f2f2f2f2;
        margin: 0.625rem 0 0 0;
    }
    p{
        color: #f2f2f2f2;
        padding: 0.9375rem;
    }
`;  
