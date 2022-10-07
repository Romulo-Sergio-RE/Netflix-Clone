import { useContext, useState } from "react"
import { MovieContext } from "../../context/movieContext"
import { Modal } from "../modal"
import { ContainerCard } from "./styled"

interface cardProps {
    imagePoster: string,
    title: string,
    overview: string,
    vote_average: number
    typeCard:string
    media_type: string
}
export const Card: React.FC<cardProps> = (props)=>{
    const image_path = "https://image.tmdb.org/t/p/w500"
    const [isModalOpen,setModalOpen] = useState(false)
    // poster_path
    // title
    // vote_average
    // overview
    // media_type tv or movie
    return(
        <>
            <ContainerCard>
                {props.typeCard === "bigCard"?
                    <div>
                        <img 
                            src={`${image_path}${props.imagePoster}`} 
                            alt="movieImage"
                            className="poster-big-movie"
                        />
                    </div>
                    :
                    <div>
                        <img 
                            src={`${image_path}${props.imagePoster}`} 
                            alt="movieImage"
                            className="poster-movie"
                        />
                    </div>
                }
            </ContainerCard>
        </>
    )
}