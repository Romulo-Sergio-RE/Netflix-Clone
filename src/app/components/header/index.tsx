import { Link } from "react-router-dom"
import { DropDown } from "./components/dropDown"
import { IconNotification } from "./components/iconNotification"
import { InputSearch } from "./components/inputSearch"

import { ContainerHeader } from "./styled"

export const Header = () =>{
    return(
        <ContainerHeader>
            <nav className="container-nav">
                <div className="logo-menuItens">
                    <Link className="link"to={"/"}>
                        <img 
                            src={require("../../assets/netflix.png")}
                            alt="icone-netflix"
                            className="logo"
                        />
                    </Link>
                    <ul className="lista">
                        <li className="lista-itens">
                            <Link className="link"to={"/"}>Home</Link>
                        </li>
                        <li className="lista-itens">
                            <Link className="link" to={"/tvshows"}>Tv Shows</Link>
                        </li>
                        <li className="lista-itens">
                            <Link className="link" to={"/movie"}>Movie</Link>
                        </li>
                        <li className="lista-itens">
                            <Link className="link" to={"/mylist"}>My List</Link>
                        </li>
                    </ul>
                </div>
                <div className="teste">
                    <InputSearch />
                    <IconNotification />
                    <DropDown />
                </div>
            </nav>
            
        </ContainerHeader>
    )
}