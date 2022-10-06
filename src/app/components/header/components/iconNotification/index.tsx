import { ContainerNotification } from "./styled"
import { FaRegBell } from 'react-icons/fa';

export const IconNotification = ()=>{

    const notification = [
        "vermelhor",
        "azul",
        "amarelo",
    ]
    return(
        <ContainerNotification onClick={()=>{alert("asds")}}>
            <div
                className="notification"
            >{notification.length}</div>
            <img 
                src={require("../../../../assets/Notification.png")}
                className="icon-bell"
                alt="icon-notification"
            />
        </ContainerNotification>
    )
}