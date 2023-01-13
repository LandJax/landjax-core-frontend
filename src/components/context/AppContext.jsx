import React from "react";
import { useState } from "react";
import { useContext } from "react";

const AppContext = React.createContext()

export const AppContextProvider = ({children}) => {

    const [activeMenu,setActiveMenu] = useState(true)
    const [screenSize,setScreensize] = useState()
    
return(
    <AppContext.Provider value={{activeMenu,setActiveMenu,screenSize,setScreensize}}>
        {children}
    </AppContext.Provider>
)
}

export const useAppContext = () => useContext(AppContext)