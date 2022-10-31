import { createContext, ReactNode, useState } from "react";

type FavoritesContextProps = {
    children: ReactNode;
}
type ContextProps = { 
    favorites: any[];
    setFavorites: React.Dispatch<React.SetStateAction<any[]>>,
};

const defautValue ={
    favorites: [],
    setFavorites: ()=> void[],
}

export const FavoritesContext = createContext<ContextProps>(defautValue);

export const FavoritesProvider = ({children}:FavoritesContextProps)=>{
    const[favorites, setFavorites] = useState<any[]>([]);

    return(
        <FavoritesContext.Provider value={{favorites, setFavorites }}>
            { children }
        </FavoritesContext.Provider>
    )
}