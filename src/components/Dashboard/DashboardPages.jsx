import React from 'react'
import { PagesWrapper } from './style'
import { useAppContext } from '../context/AppContext'
import { FaBars } from "react-icons/fa";

const DashboardPages = ({children}) => {
    const {activeMenu,screenSize,setActiveMenu} = useAppContext()
  return (
    <>
    <PagesWrapper isActive={activeMenu} screenSize={screenSize}>
    {!activeMenu && <div className='bars_wrapper' onClick={()=>setActiveMenu((prevActivemenu) =>!prevActivemenu)}><FaBars/></div>}
      {children}
      </PagesWrapper>
    </>

  )
}

export default DashboardPages