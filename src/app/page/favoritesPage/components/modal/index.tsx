import { Container, ContainerModal } from "./styled"
import { FaTimes } from "react-icons/fa";
import {AiFillHeart } from "react-icons/ai";
import { useContext, useState } from "react";
import { FavoritesContext } from "../../../../context/favoritesContext";
import { getTrailerMovie, getTrailerTvShows } from "../../../../hooks/trailer";
import { TrailerMovieAndTvShows } from "../../../../components/trailer";
interface modalProps {
    id:number
    title:string
    poster_path:string
    overview:string
    vote_average: number
    name:string
    backImage: string
    media_type:string
    closeModal: () => void
}
export const ModalFavorites: React.FC<modalProps> = (props) =>{

    const image_path = "https://image.tmdb.org/t/p/w500";
    const {favorites,setFavorites}= useContext(FavoritesContext)
    const [trailer,setTrailer] = useState<any []>([])
    const [isTrailerOpen,setIsTrailerOpen] = useState(false)
    

    const RemoveFavorites = () =>{
        if(favorites.find((favorite)=> favorite.poster_path === props.poster_path)){
            setFavorites(favorites.filter((favorite)=> favorite.poster_path !== props.poster_path))
            props.closeModal()
        }
    }

    const WatchTrailer = async (id: any, media_type: any) =>{
        if(media_type === "movie"){
            const data = await getTrailerMovie(id)
            setTrailer(data.results)
            setIsTrailerOpen(!isTrailerOpen)
        }else {
            const data = await getTrailerTvShows(id)
            setTrailer(data.results)
            setIsTrailerOpen(!isTrailerOpen)
        }
    }
    return(
        <ContainerModal>
            {isTrailerOpen?
                <TrailerMovieAndTvShows 
                    trailerKey={trailer}
                    closeTrailer={() => setIsTrailerOpen(!isTrailerOpen)}
                />:null
            },

            <Container>
                <div className="container-img">
                    <img 
                        src={`${image_path}${props.backImage}`}
                        alt="backImage"
                        className="backImage"
                    />
                    <FaTimes 
                        className="button-close" 
                        onClick={props.closeModal}
                    />
                </div>
                <h3>{props.title}{props.name}</h3>
                <p>{props.overview}</p>
                <div className="container-btns">
                    <button onClick={() => WatchTrailer(props.id, props.media_type)}>Trailer</button>
                    <button>
                        {props.media_type === "movie"? " To Watch":"Watch Episodes"}
                    </button>
                    <AiFillHeart 
                        className="button-favorites" 
                        color={
                            favorites.find((favorite)=> favorite.poster_path === props.poster_path)?"red"
                            :"white"
                        }
                        onClick={RemoveFavorites}
                    />
                </div>
            </Container>
        </ContainerModal>
    )
}