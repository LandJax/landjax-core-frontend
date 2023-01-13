import React from 'react'
import DashboardSidebar from '../sidebar/Sidebar'
import ActitvityList from '../../UI/activity/ActitvityList'
import { DashboardWrapper } from './pagestyle'
import DashboardPages from '../../Dashboard/DashboardPages'

const Overview = () => {
  return (
    <DashboardWrapper>
    <DashboardSidebar/>
     <DashboardPages>
     <div className='Activity_container'>
     {
      [...Array(6)].map((item,index)=>(<ActitvityList 
        key='index'
        time='15:32:23'
        date='1m ago'
        msg='You Placed a house on auction'
        houseType='House Bungalow #457'
        track='You can track activity on block explorer'
        />))
    }
     </div>
     </DashboardPages>
  </DashboardWrapper>
  )
}

export default Overview