import { ContainerMenu } from "./styled"
import { IoMdArrowDropdown } from 'react-icons/io';
import { useRef, useState } from "react";

export const DropDown = ()=>{

    const[isActive, setActive]= useState(false)

    return(
        <ContainerMenu>
            <div className="menu">

                <button
                    onClick={()=>{setActive(!isActive)}}
                    className="btn-user"
                >
                <IoMdArrowDropdown />
                </button>
                {isActive?(
                    <div 
                        className="menu-nav"    
                    >
                        <ul className="menu-lista">
                            <li className="menu-itens">Home</li>
                            <li className="menu-itens">Favoritos</li>
                            <li className="menu-itens">Configuracoes</li>
                            <li className="menu-itens">Sair</li>
                        </ul>
                    </div>
                    ):null
                }
            </div>
        </ContainerMenu>
    )
}