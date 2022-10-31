import { Container, ContainerModal } from "./styled"

interface modalProps {
    title:string
    poster_path:string
    overview:string
    vote_average: number
    name:string
    backImage: string
    closeModal: () => void
}
export const ModalFavorites: React.FC<modalProps> = (props) =>{


    return(
        <ContainerModal>
            <Container>

                <button onClick={props.closeModal}>afdsfasd</button>
            </Container>
        </ContainerModal>
    )
}