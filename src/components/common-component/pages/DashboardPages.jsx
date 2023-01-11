import React from 'react'
import { PagesWrapper } from './style'
import { useAppContext } from '../../context/AppContext'
import { FaBars } from "react-icons/fa";

const DashboardPages = ({children}) => {
    const {activeMenu,screenSize,setActiveMenu,setScreensize} = useAppContext()
  return (
    <>
    <PagesWrapper isActive={activeMenu} screenSize={screenSize}>
    {!activeMenu && <div onClick={()=>setActiveMenu((prevActivemenu) =>!prevActivemenu)}><FaBars/></div>}
      {children}
      </PagesWrapper>
    </>

  )
}

export default DashboardPages