import { ContainerInput } from "./styled"
import { AiOutlineSearch } from 'react-icons/ai';
import { useState } from "react";

export const InputSearch = ()=>{

    const [isActive, setIsActive] = useState(false)
    return(
        <ContainerInput>
            <div className="container-icon">
                <AiOutlineSearch 
                    className="icon-menu"
                    onClick={()=>{setIsActive(!isActive)}}
                />
            </div>
            {isActive ?
                <input 
                    type="text"
                    placeholder="Search"
                    className="input-search"
                />
                :null
            }
        </ContainerInput>
    )
}