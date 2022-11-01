import { useState } from "react"
import { Modal } from "../modal"
import { ContainerCard } from "./styled"

interface cardProps {
    imagePoster: string,
    title: string,
    name: string,
    overview: string,
    vote_average: string
    media_type: string
    backImage:string
    id:number
}
export const Card: React.FC<cardProps> = (props)=>{
    const image_path = "https://image.tmdb.org/t/p/w500";
    const [isModalOpen, setModalOpen] = useState(false)
    
    return(
        <>
        {isModalOpen?
            <Modal 
                id={props.id}
                title={props.title}
                name={props.name}
                poster_path={props.imagePoster}
                overview={props.overview}
                vote_average={props.vote_average}
                backImage={props.backImage}
                media_type={props.media_type}
                onClose={()=>{setModalOpen(!isModalOpen)}}
            />
            :null
        }
            <ContainerCard>
                <div onClick={() => setModalOpen(!isModalOpen)}>
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