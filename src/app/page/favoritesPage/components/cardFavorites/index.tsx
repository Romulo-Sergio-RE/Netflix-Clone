import { useState } from "react"
import { ModalFavorites } from "../modal"
import { Container, ContainerCard } from "./styled"

interface CardProps {
    title:string
    poster_path:string
    overview:string
    vote_average: number
    name:string
    backImage: string
}
export const CardFavorite: React.FC<CardProps> = (props) =>{

    const image_path = "https://image.tmdb.org/t/p/w500";
    const[isModalOpen, setIsModalOpen] = useState(false)

    return(
        <Container>
            {isModalOpen? 
                <ModalFavorites 
                    title={props.title}
                    poster_path={props.poster_path}
                    overview={props.overview}
                    vote_average={props.vote_average}
                    name={props.name}
                    backImage={props.backImage}
                    closeModal={() => setIsModalOpen(!isModalOpen)}
                /> :null
            }
            <ContainerCard 
                src={`${image_path}${props.poster_path}`} 
                onClick={()=>setIsModalOpen(!isModalOpen)}
            />       
        </Container>
    )
}