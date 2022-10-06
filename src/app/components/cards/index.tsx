import { useContext } from "react"
import { MovieContext } from "../../context/movieContext"
import { ContainerCard } from "./styled"

interface cardProps {
    imagePoster: string,
    title: string,
    synopsis: string,
    rating: number
    typeCard:string
}
export const Card: React.FC<cardProps> = (props)=>{
    const image_path = "https://image.tmdb.org/t/p/w500"
    // poster_path
    // title
    // vote_average
    // overview
    return(
        <ContainerCard>
            {props.typeCard === "bigCard"?
                <div onClick={()=>{alert(props.title)}}>
                    <img 
                        src={`${image_path}${props.imagePoster}`} 
                        alt="movieImage"
                        className="poster-big-movie"
                    />
                </div>
                :
                <div onClick={()=>{alert(props.title)}}>
                    <img 
                        src={`${image_path}${props.imagePoster}`} 
                        alt="movieImage"
                        className="poster-movie"
                    />
                </div>
            }
        </ContainerCard>
    )
}