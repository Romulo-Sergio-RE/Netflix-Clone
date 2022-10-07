import styled from "styled-components";

export const ContainerMenu = styled.div`
    .dropdown {
        float: left;
        overflow: hidden;
        padding: 0 2.5rem 0 0 ;
    }
    .profile-avatar{
        width: 2.188rem;
        height: 2.188rem;
        border-radius: 0.313rem;
    }
    .dropdown .icon-avatar {
        display: flex;
        align-items: center;
        justify-content: center;
        border: none;
        outline: none;
        color: white;
        margin: 0; 
    }

    .dropdown:hover .btn {
        background-color: red;
    }

    .dropdown-content {
        display: none;
        position: absolute;
        background-color: #000000;
        min-width: 6.563rem;
        box-shadow: 0 0.5rem 1rem 0 rgba(0,0,0,0.2);
        z-index: 2;
        border-radius:0.75rem;
    }
    .dropdown-content .link{
        float: none;
        padding: 0.75rem 1rem;
        text-decoration: none;
        display: block;
        text-align: center;
        color: #FFFFFF;
        border-radius:0.75rem;
    }
    .link{

        color: #FFFFFF;
    }
    .dropdown-content a:hover {
        background-color: red;
    }
    .dropdown:hover .dropdown-content {
        display: block;
    }
`;