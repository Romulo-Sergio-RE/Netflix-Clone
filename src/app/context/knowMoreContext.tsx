import { createContext, ReactNode, useState } from "react";

type KnowMoreContextProps = {
    children: ReactNode;
}
type ContextProps = { 
    knowMore: any[];
    setKnowMore: React.Dispatch<React.SetStateAction<any[]>>,
};

const defautValue ={
    knowMore: [],
    setKnowMore: ()=> void[],
}

export const KnowMoreContext = createContext<ContextProps>(defautValue);

export const KnowMoreProvider = ({children}:KnowMoreContextProps)=>{
    const[knowMore, setKnowMore] = useState<any[]>([]);

    return(
        <KnowMoreContext.Provider value={{knowMore, setKnowMore }}>
            { children }
        </KnowMoreContext.Provider>
    )
}