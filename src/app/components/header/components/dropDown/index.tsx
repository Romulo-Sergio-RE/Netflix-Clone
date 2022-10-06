import { ContainerMenu } from "./styled"
import { IoMdArrowDropdown } from 'react-icons/io';
import { useRef, useState } from "react";

export const DropDown = ()=>{

    const[isActive, setActive]= useState(false)

    return(
        <ContainerMenu>
        <div className="dropdown">
            <button className="btn">
                Dropdown
            </button>
            <div className="dropdown-content">
                <a href="#">Perfil</a>
                <a href="#">Series</a>
                <a href="#">Movies</a>
                <a href="#">Settings</a>
                <a href="#">Exit</a>
            </div>
        </div>
        </ContainerMenu>
    )
}