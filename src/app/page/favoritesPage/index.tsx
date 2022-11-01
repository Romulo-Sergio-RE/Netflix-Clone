import { useContext, useState } from "react"
import { Header } from "../../components/header"
import { FavoritesContext } from "../../context/favoritesContext"
import { CardFavorite } from "./components/cardFavorites"
import { Container, ContainerGrid } from "./styled"

export const Favorites = ()=>{

    const {favorites}= useContext(FavoritesContext)

    return(
        <Container>
            <Header /> 
            {favorites.length !== 0?
                <ContainerGrid>
                    {
                        favorites.map((favorite)=>{
                            return(
                                <CardFavorite 
                                    id={favorite.id}
                                    name={favorite.name}
                                    title={favorite.title}
                                    poster_path={favorite.poster_path}
                                    overview={favorite.overview}
                                    vote_average={favorite.vote_average}
                                    backImage={favorite.backImage}
                                    media_type={favorite.media_type}
                                />
                            )
                        })
                    }
                </ContainerGrid> 
                :<h2>Add movies or tv shows to your list</h2>
            } 
        </Container>
    )
}