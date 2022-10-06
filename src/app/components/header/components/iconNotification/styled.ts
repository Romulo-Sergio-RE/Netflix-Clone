import styled from "styled-components";

export const ContainerNotification = styled.div`
    margin: 0 0.313rem;
    cursor: pointer;
    .icon-bell{
        width: 1.875rem;
        height: 1.875rem;
    }
    .notification{
        position: fixed;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 1rem;
        height: 1rem;
        border-radius: 0.625rem;
        background-color: red;
        position: absolute;
        margin: 0 0 0 0.938rem;
        color: #ffffff;
        font-size: 1rem;
    }
`;