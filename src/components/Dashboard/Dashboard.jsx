import React from 'react'
import DashboardSidebar from '../common-component/sidebar/Sidebar'
import DashboardPages from '../common-component/pages/DashboardPages'
import { DashboardWrapper } from './style'
import { useAppContext } from '../context/AppContext'
import { useEffect } from 'react'

const Dashboard = () => {
    const {activeMenu,screenSize,setActiveMenu,setScreensize} = useAppContext()
    console.log(activeMenu,screenSize)

    useEffect(()=>{
        const handleResize = () => setScreensize(window.innerWidth)
        window.addEventListener('resize',handleResize)
        handleResize()

        return ()=>window.removeEventListener('resize',handleResize)
    },[])

    useEffect(()=>{
        if(screenSize <= 900){
          setActiveMenu(false)
        } else{
          setActiveMenu(true)
        }
      },[screenSize])

  return (
    <DashboardWrapper>
        <DashboardSidebar/>
        <DashboardPages>lorem2000</DashboardPages>
    </DashboardWrapper>
  )
}

export default Dashboard