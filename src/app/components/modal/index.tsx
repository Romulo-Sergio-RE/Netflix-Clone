import { ContainerModal } from "./styled"
interface ModalProps {
    poster_path?: string
    title?: string
    name?: string
    vote_average?: number
    overview?: string
    onClose?: ()=> void,
}
export const Modal: React.FC<ModalProps> = (props)=>{
    return(
        <ContainerModal>
            {props.title}
            {props.name}
            <button onClick={props.onClose}>fechar</button>
        </ContainerModal>
    )
}