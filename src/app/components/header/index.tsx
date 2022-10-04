import { DropDown } from "./components/dropDown"
import { IconNotification } from "./components/iconNotification"
import { InputSearch } from "./components/inputSearch"

import { ContainerHeader } from "./styled"

export const Header = () =>{
    return(
        <ContainerHeader>
            <nav className="container-nav">
                <img 
                    src={require("../../assets/netflix.png")}
                    alt="icone-netflix"
                    className="logo"
                />
                <ul className="lista">
                    <li className="lista-itens">inicio</li>
                    <li className="lista-itens">serie</li>
                    <li className="lista-itens">filmes</li>
                    <li className="lista-itens">bombando</li>
                    <li className="lista-itens">Minha lista</li>
                </ul>
                <div className="teste">
                    <InputSearch />
                    <IconNotification />
                    <DropDown />
                </div>
            </nav>
            
        </ContainerHeader>
    )
}