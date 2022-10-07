import { ContainerMenu } from "./styled"
import { IoMdArrowDropdown } from 'react-icons/io';
import { useRef, useState } from "react";
import { Link } from "react-router-dom";

export const DropDown = ()=>{

    const[isActive, setActive]= useState(false)

    return(
        <ContainerMenu>
        <div className="dropdown">
            <div className="icon-avatar">
                <img  
                    className="profile-avatar"
                    src={require("../../../../assets/netflix-avatar.png")}
                    alt="profile avatar netflix"
                />
                <IoMdArrowDropdown />
            </div>

            <div className="dropdown-content">
                <Link className="link" to={""}>Profile</Link>
                <Link className="link" to={"/tvshows"}>Tv Shows</Link>       
                <Link className="link" to={"/movie"}>Movie</Link>
                <Link className="link" to={""}>Setting</Link>
                <Link className="link" to={""}>Exit</Link>
            </div>
        </div>
        </ContainerMenu>
    )
}