import { ContainerInput } from "./styled"
import { AiOutlineSearch } from 'react-icons/ai';

export const InputSearch = ()=>{
    return(
        <ContainerInput>
            <AiOutlineSearch 
                className="icon-menu"
            />
            <input 
                type="text"
                placeholder="pesquisar"
                className="input-search"
            />
        </ContainerInput>
    )
}