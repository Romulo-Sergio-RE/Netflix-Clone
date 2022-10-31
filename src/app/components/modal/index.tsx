import { Container, ContainerModal } from "./styled"
import { FaTimes } from "react-icons/fa";
import {AiFillHeart } from "react-icons/ai";
import { useContext, useState } from "react";
import { FavoritesContext } from "../../context/favoritesContext";
interface ModalProps {
    poster_path?: string
    title?: string
    name?: string
    vote_average: string
    overview: string
    backImage:string
    onClose?: ()=> void,
}
export const Modal: React.FC<ModalProps> = (props)=>{

    const image_path = "https://image.tmdb.org/t/p/w500";

    const {favorites,setFavorites}= useContext(FavoritesContext)

    const truncate = (str: string , n:number) => {
        return str.length > n ? str.substring(0, n-1) + "...": str;   
    }
    const AddFavorites = () =>{
        if(favorites.find((favorite)=> favorite.poster_path === props.poster_path)){
            setFavorites(favorites.filter((favorite)=> favorite.poster_path !== props.poster_path))
        }else{
            setFavorites([...favorites, props])
        }
    }
    return(
        <ContainerModal>
            <Container>
                <img
                    src={`${image_path}${props.poster_path}`} 
                    alt="movieImage"
                    className="poster-movie"
                />
                <div className="container-infoMovie">
                    <h4>{props.title}{props.name}</h4>
                    <h4>Avaliacao:{props.vote_average}/10</h4>
                    <p>{truncate(props.overview, 120)}</p>
                    <div className="container-btns">
                        <button>Saiba Mais</button>
                        <AiFillHeart 
                            className="button-favorites" 
                            color={
                                favorites.find((favorite)=> favorite.poster_path === props.poster_path)?
                                "red"
                                :"white"
                            }
                            onClick={AddFavorites}
                        />
                    </div>
                </div>
                <FaTimes 
                    className="button-close" 
                    onClick={props.onClose}
                />
            </Container>
        </ContainerModal>
    )
}