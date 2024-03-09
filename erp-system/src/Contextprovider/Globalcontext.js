import {useContext, createContext, useState } from "react";

export const GlobalContext = createContext()

export const useGlobal =()=> useContext(GlobalContext)


export default function ContextProvider ({children}){
    

        const [ordercount,setordercount] = useState(4)
        const [productcount,setproductcount] = useState(5)

        return(
            <GlobalContext.Provider value={{ordercount,setordercount, productcount, setproductcount}}>
                {children}
            </GlobalContext.Provider>
        )
    
}