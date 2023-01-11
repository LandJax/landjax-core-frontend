import React from 'react'
import { NavItems, ProfileContainer, SideBarWrapper } from './style'
import { useAppContext } from '../../context/AppContext'
import icon from '../../../assest/images/dashboard/profileicon.png'
import { sideBarContent } from '../../data/sidebarContent'
import { NavLink } from 'react-router-dom'
import { useEffect } from 'react'
import Custombutton from '../../UI/Custombutton'
import { color } from '../../data/colors'
import { FaRegTimesCircle } from 'react-icons/fa'

const DashboardSidebar = () => {
    

    const {activeMenu,screenSize,setActiveMenu,setScreensize} = useAppContext()
    console.log(activeMenu,screenSize)

    const handleCloseSideBar = () => {
      if(activeMenu && screenSize <=900){
        setActiveMenu(false)
      }
    }

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
<>
{activeMenu && <SideBarWrapper isActive={activeMenu} screenSize={screenSize}>
  {
    screenSize <=900 && <div className='cancel'><FaRegTimesCircle fontSize={'30px'} color={color.placeholder} onClick={handleCloseSideBar}/></div>
  }
  <ProfileContainer>
  <div className='image_Wrapper'>
        <img src={icon} alt='profile'/>
    </div>
    <div className='profile_nameholder'>
        <h4>ONWE MOSES CHIMEZIE</h4>
        <h5>ID67990997........</h5>
    </div>
  </ProfileContainer>
  <NavItems>
    <ul>
        {sideBarContent.map(item=>(
        <li key={item.title}>
            <NavLink 
         to={`${item.link}`}
         className='tab_link'
         activeClassName='is_active'
         onClick={handleCloseSideBar}
         >
        {item.title}
        </NavLink>
        </li>))}
    </ul>
  </NavItems>
<div style={{marginTop:'4.813rem'}}>  
  <Custombutton text='Logout' width='100%' color={color.white} fontSize='24px'/>
</div>
    </SideBarWrapper>}
</>
  )
}

export default DashboardSidebar