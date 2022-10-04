import styled from "styled-components";

export const ContainerNotification = styled.div`
    .icon-bell{
        width: 30px;
        height: 30px;
        background-color: red;
    }
    .notification{
        position: fixed;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 16px;
        height: 16px;
        border-radius: 10px;
        background-color: red;
        position: absolute;
        margin: 0 0 0 15px;
        cursor: default;
        color: #ffffff;
        font-size: 16px;
    }
`;