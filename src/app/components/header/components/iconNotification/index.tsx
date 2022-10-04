import { ContainerNotification } from "./styled"
import { FaRegBell } from 'react-icons/fa';

export const IconNotification = ()=>{

    const notification = [
        "vermelhor",
        "azul",
        "amarelo",
    ]
    return(
        <ContainerNotification>
            <div
                className="notification"
            >{notification.length}</div>
            <FaRegBell 
                className="icon-bell"
            />
        </ContainerNotification>
    )
}