import { useContext, useState } from "react"
import { MovieContext } from "../../context/movieContext"
import { Modal } from "../modal"
import { ContainerCard } from "./styled"

interface cardProps {
    imagePoster: string,
    title: string,
    name: string,
    overview: string,
    vote_average: number
    media_type: string
}
export const Card: React.FC<cardProps> = (props)=>{
    const image_path = "https://image.tmdb.org/t/p/w500";
    const [isModalOpen,setModalOpen] = useState(false)

    return(
        <>
        {isModalOpen?
            <Modal 
                title={props.title}
                name={props.name}
                onClose={()=>{setModalOpen(false)}}
            />
            :null
        }
            <ContainerCard>
                <div onClick={()=>{setModalOpen(true)}}>
                    <img 
                        src={`${image_path}${props.imagePoster}`} 
                        alt="movieImage"
                        className="poster-big-movie"
                    />
                </div>
            </ContainerCard>
        </>
    )
}