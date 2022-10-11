import styled from "styled-components";

interface styledProps{
    imageBanner:string
}
export const ContainerBanner = styled.div<styledProps>`
    width: 100%;
    height: 450px;
    background: url(${(props)=> props.imageBanner}) no-repeat ;
    background-size: cover;
    background-position: center;
    mask-image: linear-gradient(to top, transparent 1%, black 20%);
    .title{
        color: #ffffff;
    }
    .ranting{
        color: #ffffff;
    }
    .overview{
        color: #ffffff;
    }
`;