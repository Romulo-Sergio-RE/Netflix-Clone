import styled from "styled-components";

export const ContainerMenu = styled.div`
    .dropdown {
        float: left;
        overflow: hidden;
    }
    .dropdown .btn {
        font-size: 1rem;
        border: none;
        outline: none;
        color: white;
        padding: 0.875rem 1rem;
        background-color: red; 
        margin: 0; 
    }

    .dropdown:hover .btn {
        background-color: red;
    }

    .dropdown-content {
        display: none;
        position: absolute;
        background-color: #f9f9f9;
        min-width: 6.563rem;
        box-shadow: 0 0.5rem 1rem 0 rgba(0,0,0,0.2);
        z-index: 2;
    }
    .dropdown-content a {
        float: none;
        color: black;
        padding: 0.75rem 1rem;
        text-decoration: none;
        display: block;
        text-align: center;
    }
    .dropdown-content a:hover {
        background-color: #ddd;
    }
    .dropdown:hover .dropdown-content {
        display: block;
    }
`;